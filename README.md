# Os-WEBP Converter

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

Os-WEBP Converter is a lightweight, privacy-focused web application designed to convert WEBP images into universally supported formats (PNG, JPG) directly in the browser. Built with a stunning neumorphic (soft UI) design, it offers a tactile user experience without relying on external servers or complex build processes.

<img width="751" height="663" alt="Screenshot 2025-11-23 153359" src="https://github.com/user-attachments/assets/0870dd5c-dadd-4f62-8463-68077115dce5" />



## Key Features

### Format Conversion
Seamlessly convert .webp files to .png or .jpeg formats. The engine handles format transitions efficiently while maintaining visual fidelity suitable for production use.

### Smart Upscaling
Enhance image resolution using built-in canvas scaling options. Users can select magnification levels (1.0x, 1.5x, 2.0x) to upscale assets cleanly during the conversion process.

### Neumorphic Design
The interface features a modern, monochromatic aesthetic using soft shadows and highlights to mimic physical depth. This design language provides a clean, distraction-free environment for image processing.

### 100% Client-Side Processing
All processing is performed locally using the HTML5 Canvas API. No data leaves the device, ensuring absolute privacy and zero latency.

### Instant Preview
The application provides a real-time side-by-side comparison, allowing users to verify the input and the converted output before downloading.

## Technology Stack

* **Frontend:** React 19 (delivered via CDN & Import Maps)
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **Architecture:** Zero-build setup using native ES Modules

## Project Structure

```text
/
├── index.html           # Application entry point & Import Map configuration
├── index.tsx            # React root mount
├── App.tsx              # Core application logic & UI components
├── types.ts             # Type definitions
├── metadata.json        # Project metadata
└── components/
    └── icons.tsx        # SVG UI icons
````

## Installation and Usage

### Prerequisites

Because Os-WEBP Converter uses modern web standards (ES Modules and Import Maps), it requires a static file server to run locally. It does not use bundlers like Webpack or Vite.

### Launch Instructions

1.  **Clone and Enter Directory:**

    ```bash
    git clone [https://github.com/your-username/os-webp-converter.git](https://github.com/your-username/os-webp-converter.git)
    cd os-webp-converter
    ```

2.  **Start a Static Server:**
    You may use any static server. Examples:

      * **Node (npx):**
        ```bash
        npx serve .
        ```
      * **Python:**
        ```bash
        python3 -m http.server
        ```

3.  **Open Application:**
    Navigate to the localhost URL provided (e.g., `http://localhost:3000`).

### Operational Guide

1.  **Upload:** Click the raised "Select WEBP Image" button to choose a file from your device.
2.  **Configure:**
      * **Format:** Toggle between PNG or JPG.
      * **Upscale:** Select the magnification level (1x, 1.5x, 2x).
3.  **Convert:** Press "Convert Image" to process the file in the browser memory.
4.  **Save:** Click "Download Converted Image" to save the result to your disk.

## Browser Requirements

This application leverages modern web standards, specifically **ES Modules** and **Import Maps**, to run without a build step. Please use the latest version of:

  * Google Chrome
  * Microsoft Edge
  * Mozilla Firefox
  * Safari

## License

This project is licensed under the MIT License.
