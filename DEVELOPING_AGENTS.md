# Guidelines for Developing SVG Generators (For AI Agents & Humans)

This repository is built to support **agentic development**. All generators are modular, single-file HTML pages that are cross-linked using a shared configuration. This document outlines the standards and procedures for creating new generators so that both human developers and agentic AI models can easily contribute to and scale the suite.

---

## Architecture Overview

1. **Self-Contained Pages**: Each generator is a standalone `.html` page containing its own style overrides, layout, parameter states, and SVG rendering logic.
2. **Centralized Navigation**: A shared script ([shared-nav.js](file:///C:/Users/mike/Documents/Personal%20Projects/Desktop-Manufacturing-Crafts-Cutting-Plotter/shared-nav.js)) defines all registered tools and dynamically injects a navigation bar into the top of each page.
3. **No Build Step**: The project runs purely as static HTML in the browser. It works directly from local file systems (`file:///` protocol) and HTTP servers alike, using Tailwind CSS via CDN.

---

## Step-by-Step Guide to Add a New Generator

### 1. Register the Tool
Update the `generators` array at the top of [shared-nav.js](file:///C:/Users/mike/Documents/Personal%20Projects/Desktop-Manufacturing-Crafts-Cutting-Plotter/shared-nav.js) and the [generators.json](file:///C:/Users/mike/Documents/Personal%20Projects/Desktop-Manufacturing-Crafts-Cutting-Plotter/generators.json) registry with the metadata for your new tool:

```javascript
// Inside shared-nav.js
const generators = [
    // ... existing entries
    {
        id: "my-new-tool",
        name: "My New Generator",
        path: "MyNewGenerator.html"
    }
];
```

### 2. Create the HTML File
Create your new HTML file in the repository root. Ensure the structure follows these boilerplate patterns:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My New Generator - Craft Cutter Tools</title>
    <!-- 1. Tailwind & Font CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        /* 2. Standard Preview Container styling */
        #svgPreviewContainer {
            border: 1px solid #e5e7eb;
            margin-top: 1rem;
            width: 100%;
            min-height: 250px;
            background-color: #f9fafb;
            overflow: auto;
            border-radius: 0.375rem;
            resize: vertical;
        }
        #svgPreviewContainer svg {
            display: block;
            width: 100%;
            height: auto;
        }
    </style>
    <!-- 3. Inject Navigation script -->
    <script src="shared-nav.js" defer></script>
</head>
<body class="bg-gray-100">
    <!-- 4. Body Content Wrapper with padding -->
    <div class="p-6">
        <div class="container max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
            <h1 class="text-2xl font-semibold text-gray-800 mb-6 text-center">My New SVG Generator</h1>
            
            <form id="generatorForm" class="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Parameters go here -->
            </form>

            <div id="svgPreviewContainer" class="mb-6">
                <!-- SVG rendered preview goes here -->
            </div>

            <div class="flex justify-center">
                <button id="downloadButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Generate and Download SVG
                </button>
            </div>
        </div>
    </div>

    <script>
        // Form handling, SVG math, rendering, and download logic
    </script>
</body>
</html>
```

### 3. Add to Dashboard UI
Update [index.html](file:///C:/Users/mike/Documents/Personal%20Projects/Desktop-Manufacturing-Crafts-Cutting-Plotter/index.html) to include a visual card for your generator in the grid, following the design system of the existing tools (e.g. matching icons, HSL-colored backgrounds for icons, tag lists, search criteria tags).

---

## Design and Quality Standards

When writing a generator, follow these rules:

### A. Responsive & Premium UI
- **Grid Layout**: Keep input fields in a responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Interactive States**: Inputs must have focus rings (`focus:ring-2 focus:ring-blue-500`). Buttons must have smooth transition hover states.
- **Micro-interactions**: If you have slider inputs, sync them in real-time with corresponding numerical text boxes.

### B. Precise Vector / SVG Rules
- **Physical Scale**: Ensure your SVG specifies explicit real-world dimensions using `"in"` (inches) or `"mm"` (millimeters) in its `width` and `height` attributes to avoid scaling issues in cutter software:
  ```xml
  <svg width="12in" height="12in" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
  ```
- **Continuous Paths**: Connect lines where possible instead of using separate short lines, which increases cut head travel time. Group paths using `<g>` tags and use descriptive IDs.
- **Reproducible Randomization**: If generating randomized elements (like Voronoi cells), use a seedable random generator (e.g., a simple LCG like `mulberry32`) rather than `Math.random()`. This ensures that a user can re-generate the exact same pattern if they save the seed value.

---

## Agent Verification Checklist

When building or updating a generator page, verify:
1. **Nav Inject Check**: Does the header load at the very top of the page without colliding with existing content?
2. **Download Check**: Does clicking "Generate and Download SVG" download a valid XML/SVG file?
3. **No-CORS Fetch**: Does the navigation script avoid making AJAX calls that fail on `file://` environments?
4. **Cricut Import compatibility**: Are the output paths clean (e.g. no overlapping duplicate lines)?
