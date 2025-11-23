# Contributing to Os-WEBP Converter

Thank you for your interest in contributing to Os-WEBP Converter. This document outlines the standards for contributing to this project. We prioritize code clarity, strict adherence to the "zero-build" architecture, and the preservation of the neumorphic design language.

## Development Philosophy

### 1. Zero-Build Architecture
This project runs on native ES Modules and Import Maps.
* **Do not** introduce bundlers (Webpack, Vite, Parcel).
* **Do not** introduce transpilers (Babel).
* **Do not** add npm dependencies that require a build step. All libraries must be consumable via ESM/CDN.

### 2. Privacy First
Os-WEBP Converter is a privacy-focused tool.
* **Do not** add server-side processing.
* **Do not** add analytics or trackers that send user data externally.
* All image manipulations must occur within the HTML5 Canvas API.

### 3. Neumorphic Design
All UI components must strictly adhere to the Soft UI aesthetic.
* Use low contrast, monochromatic color palettes.
* Utilize the existing Tailwind shadow utilities to create depth (raised and depressed states).

## Reporting Issues

Please open an issue on the repository with the following details:
* **Browser & Version:** Critical for debugging ESM compatibility.
* **Description:** Concise summary of the defect.
* **Reproduction:** Steps to reproduce the error.

## Pull Request Process

1.  **Branching:** Create a feature branch (e.g., `feature/improved-scaling`).
2.  **Coding:** Write clear TypeScript code. Ensure all types are defined in `types.ts`.
3.  **Testing:** Verify functionality in at least one Chromium-based browser (Chrome/Edge) and one non-Chromium browser (Firefox/Safari).
4.  **Submission:** Push your branch and open a Pull Request against `main`.

## License

By contributing, you agree that your code will be licensed under the MIT License.

