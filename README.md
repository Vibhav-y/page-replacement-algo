# Page Replacement Simulator

**Page Replacement Simulator** is an interactive web application built with HTML, CSS, and JavaScript that demonstrates how different page replacement algorithms work. Through this simulator, users can gain a clear understanding of common memory management techniques used in modern operating systems to manage virtual memory.
## Table of Contents
[Overview](#overview)
[Background](#background)
[Features](#features)
[Demo](#demo)
[Installation](#installation)
[Usage](#usage)
[Project Structure](#project-structure)\n- 
[Future Enhancements](#future-enhancements)\n- 
[Contributing](#contributing)
[Technology Stack](#technology-stack)
[References](#references)
[License](#license)


## Overview
When physical memory runs short, operating systems rely on **page replacement algorithms** to decide which pages to evict from memory. This simulator allows you to see how different algorithms operate step-by-step and compare their performance in terms of page faults, page hits, and hit ratios. The algorithms featured in this project include:

**FIFO (First-In, First-Out):** A simple algorithm that removes the oldest loaded page.
**LRU (Least Recently Used):** Uses the heuristic that the page not accessed for the longest time is likely to be replaced.
**Optimal:** A theoretical algorithm that replaces the page that is not needed for the longest period in the future, serving as a performance benchmark.
## Background
Modern operating systems use virtual memory to extend the apparent amount of physical memory available to processes. The simulation of page replacement algorithms is used extensively in computer science education and research to understand how caching and memory management can affect system performance. This project uses a visual and interactive approach to make these concepts easier to grasp:

**Educational Purpose:** Designed primarily for learners and educators in operating systems, this tool helps visualize complex algorithms.
**Real-Life Analogy:** The simulator uses a real-life analogy (a bookshelf with limited space) to explain how page replacement works, providing context alongside visuals.

## Features- 
**Interactive Input:** Enter your own reference string (comma-separated page numbers), choose the number of frames, and select an algorithm for simulation.
**Visual Simulation:** The application demonstrates every step of the algorithm execution including page hits, page faults, and replacement steps.
**Detailed Metrics:** See clear metrics including the total number of page faults, page hits, and the computed hit ratio.
**Responsive Design:** Optimized for your desktop, tablet, or mobile phone with adaptive layouts.
**Full Explanation Panel:** A dedicated side panel explains each algorithm in-depth, includes pros and cons, and provides a practical analogy.
**Lightweight & Standalone:** Built using pure HTML, CSS, and JavaScript—no additional dependencies required.
## Demo
- Check out the live demo of the Page Replacement Simulator on GitHub Pages:[Live Demo URL](pra.vbhav-y.com) 
## Usage
Once the project is running in your browser, use the following steps:
1. **Input Reference String:**
Enter a sequence of page numbers (e.g., `7, 0, 1, 2, 0, 3, 4, 2, 3, 0`).
2. **Configure Frames:**
    Set the number of frames available (for example, enter `3`).
3. **Select an Algorithm:**
    Choose between FIFO, LRU, or Optimal from the dropdown menu.
4. **Run the Simulation:** 
    Click the \"Run Simulation\" button. The simulator displays:
    - Total page faults
    - Total page hits
    - Hit ratio
    - A step-by-step visualization of the algorithm execution\n\n5. 
5. **Read the Explanation:**
    The side panel on the right provides detailed insights into the mechanics behind each algorithm along with real-life analogies and a comparison summary.

## Project Structure
The project is organized into the following files:

page-replacement-simulator/

|── index.html      # Main HTML file containing the structure and content of the web app.

├── style.css       # External CSS file for styling and responsive design.

├── sc.js           # JavaScript file with simulation logic, event handlers, and algorithm implementations.

└── README.md       # This README file.

## Technology Stack
- **HTML5:** Used for the document structure.
- **CSS3:** For styling and responsive design using media queries.
- **JavaScript (ES6):** Contains the simulation logic, DOM manipulation, and event handling.
- **Google Fonts:** Utilizes the Roboto font for a modern aesthetic.

## References
- [Understanding Page Replacement Algorithms](https://en.wikipedia.org/wiki/Page_replacement_algorithm)
- [Operating System Concepts – Silberschatz et al.](https://www.os-book.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

## License
This project is licensed under the [MIT License](LICENSE).

Feel free to explore, experiment, and learn more about page replacement algorithms with this interactive simulator. Enjoy the journey of understanding memory management and system performance optimization!
}
