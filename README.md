
# Graphite - Grafix Conversion

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

Graphite is a sleek, monochromatic, web-based image processing tool designed with a modern neumorphic user interface. It streamlines the workflow of converting WEBP images into widely supported formats (PNG, JPG) while providing client-side upscaling capabilities via high-quality canvas scaling.

Graphite is built on a zero-dependency architecture using native ES Modules and React 19, requiring no bundlers or build steps.

## Key Features

### Format Conversion
Instantly convert .webp files to standard .png or .jpeg formats. The conversion engine handles transparency and compression automatically based on the selected output format.

### Smart Upscaling
Increase image resolution directly within the browser. The tool offers selectable magnification levels (1.0x, 1.5x, 2.0x) utilizing HTML5 Canvas scaling algorithms to maintain clarity during resizing.

### Neumorphic Design System
The user interface implements a "Soft UI" aesthetic. It utilizes Tailwind CSS to mimic physical objects through realistic light and shadow rendering, creating a tactile and cohesive user experience.

### Privacy-First Architecture
Graphite operates entirely on the client side. All image processing occurs within the user's browser memory using the HTML5 Canvas API. No images are ever uploaded to external servers, ensuring 100% data privacy, security, and zero network latency.

### Real-time Visualization
The interface provides a dual-pane preview system, allowing users to view the original source media side-by-side with the transformed output before committing to a download.

## Technology Stack

* **Frontend Framework:** React 19 (utilized via ES Modules/Import Map)
* **Styling:** Tailwind CSS (served via CDN)
* **Language:** TypeScript
* **Build Tooling:** None (Native Browser ES Modules)
* **Storage:** Local Browser Memory

## Project Structure

```text
/
├── index.html           # Application entry point; handles Import Maps and CDN links
├── index.tsx            # React Root mounting configuration
├── App.tsx              # Main application logic, state management, and UI layout
├── types.ts             # Shared TypeScript interface definitions
├── metadata.json        # Application metadata configurations
└── components/
    └── icons.tsx        # Scalable Vector Graphics (SVG) component library
````

## Installation and Deployment

Because Graphite uses React 19 via Import Maps and native ES Modules, it does not require `npm install` for a build process. However, it must be served over HTTP/HTTPS to avoid Cross-Origin Resource Sharing (CORS) issues associated with the `file://` protocol.

### Prerequisites

  * A modern web browser (Chrome, Edge, Firefox, Safari)
  * A local static file server

### Launching Locally

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/graphite.git](https://github.com/your-username/graphite.git)
    cd graphite
    ```

2.  **Serve the directory:**
    You may use any static server. Examples:

      * **Using npx (Node.js):**

        ```bash
        npx serve .
        ```

      * **Using Python:**

        ```bash
        python3 -m http.server
        ```

3.  **Access the application:**
    Open your browser and navigate to the address provided by your terminal (usually `http://localhost:3000` or `http://localhost:8000`).

## Usage Guide

1.  **Upload Image:** Click the "Select WEBP Image" button—styled as a raised element on the interface—to open the file picker. Select a valid `.webp` file from your device.
2.  **Configure Output:**
      * **Format:** Toggle between PNG or JPEG output.
      * **Upscale:** Select the desired magnification factor (1x, 1.5x, or 2x).
3.  **Process:** Click the "Convert Image" button. The application will render the new image in the "Converted" preview pane.
4.  **Save:** Click "Download Converted Image" to write the processed file to your local disk.

## Browser Compatibility

This project relies on **Import Maps** and native **ES Modules**. It is compatible with the latest versions of all major browsers:

  * Google Chrome (89+)
  * Mozilla Firefox (108+)
  * Microsoft Edge (89+)
  * Safari (16.4+)

*Note: Legacy browsers (such as Internet Explorer) are not supported due to the lack of ES6+ and Import Map support.*

## License

This project is licensed under the MIT License. See the LICENSE file for details.
