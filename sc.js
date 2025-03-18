function runSimulation() {
    let pages = document.getElementById("pages").value
        .split(",")
        .map(p => parseInt(p.trim()));
    let frames = parseInt(document.getElementById("frames").value);
    let algorithm = document.getElementById("algorithm").value;

    if (!pages.length || isNaN(frames) || frames < 1) {
        alert("Please enter valid input!");
        return;
    }
    let result;
    if (algorithm === "FIFO") result = fifo(pages, frames);
    else if (algorithm === "LRU") result = lru(pages, frames);
    else if (algorithm === "Optimal") result = optimal(pages, frames);

    document.getElementById("faults").innerText = result.faults;
    document.getElementById("hits").innerText = result.hits;
    document.getElementById("ratio").innerText = ((result.hits / pages.length) * 100).toFixed(2);
    document.getElementById("steps-container").innerHTML = result.steps;
    document.getElementById("output").style.display = "block";
}

function fifo(pages, frames) {
    let queue = [],
        faults = 0,
        hits = 0,
        steps = "";
    pages.forEach((page, index) => {
        let isHit = queue.includes(page);
        if (!isHit) {
            if (queue.length < frames) {
                queue.push(page);
            } else {
                queue.shift();
                queue.push(page);
            }
            faults++;
        } else {
            hits++;
        }
        steps += renderStep(index + 1, queue, isHit, page, "FIFO");
    });
    return {
        faults,
        hits,
        steps
    };
}

function lru(pages, frames) {
    let memory = [],
        faults = 0,
        hits = 0,
        steps = "";
    pages.forEach((page, index) => {
        let foundIndex = memory.findIndex(item => item.value === page);
        if (foundIndex === -1) {
            faults++;
            if (memory.length === frames) {
                memory.shift();
            }
            memory.push({
                value: page,
                time: index
            });
        } else {
            hits++;
            memory.splice(foundIndex, 1);
            memory.push({
                value: page,
                time: index
            });
        }
        steps += renderStep(
            index + 1,
            memory.map(item => item.value),
            foundIndex !== -1,
            page,
            "LRU"
        );
    });
    return {
        faults,
        hits,
        steps
    };
}

function optimal(pages, frames) {
    let memory = [],
        faults = 0,
        hits = 0,
        steps = "";
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if (memory.includes(page)) {
            hits++;
            steps += renderStep(i + 1, memory, true, page, "Optimal");
            continue;
        }
        faults++;
        if (memory.length < frames) {
            memory.push(page);
        } else {
            let indexToReplace = -1,
                farthestUse = -1;
            memory.forEach((mPage, idx) => {
                let nextUse = pages.slice(i + 1).indexOf(mPage);
                if (nextUse === -1) {
                    indexToReplace = idx;
                    return;
                }
                if (nextUse > farthestUse) {
                    farthestUse = nextUse;
                    indexToReplace = idx;
                }
            });
            memory[indexToReplace] = page;
        }
        steps += renderStep(i + 1, memory, false, page, "Optimal");
    }
    return {
        faults,
        hits,
        steps
    };
}

function renderStep(step, currentMemory, isHit, page, algorithm) {
    return `
             <div class="step">
               <div class="step-number">Step ${step}:</div>
               ${currentMemory.map(p => `<div class="frame-box ${isHit ? 'hit' : 'miss'}">${p}</div>`).join('')}
               <div class="explanation">Page ${page} ${isHit ? "was a hit" : "caused a fault"} (${algorithm}).</div>
             </div>`;
}
