# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.0] - 2023-11-22

### Added
- Implemented web scraping infrastructure for multi-platform support, enabling the comparison of product prices across various e-commerce websites.
- Introduced a robust backend caching system for efficient retrieval of spot price comparisons during repeated searches.
- Integrated support for five popular e-commerce platforms: Amazon, Flipkart, AliBaba, BoAt, and eBay.
- Enabled customizable search parameters, including search terms, filters, and the number of top results.
- Created API documentation for developers, providing insights into endpoints, request parameters, and response structures.
- Implemented modular scraping modules, each dedicated to a specific e-commerce website, enhancing maintainability and scalability.
- Integrated a proxy management system to mitigate IP blocking and rate-limiting risks during web scraping.
- Utilized Puppeteer as the primary web scraping tool, offering headless browser capabilities, advanced interaction, asynchronous operations, CAPTCHA handling, and effective debugging capabilities.
- Employed MongoDB for data storage, leveraging its flexible schema to accommodate diverse data structures across different e-commerce websites.

### Changed
- Transitioned from manual scraping implementation to Puppeteer for enhanced efficiency and maintainability.

### Fixed
- Resolved issues related to selector parsing, broken CSS selector attributes, and compatibility with Node.js runtime.

## [0.9.1] - 2023-11-21

### Fixed
- Fixed broken "text" selectors.

## [0.9] - 2023-11-21

### Added
- Added unit tests for bug reports and Puppeteer scripts.
- Enhanced web scraping scripts with additional functions and error handling.
- Integrated MIT License to the project root.

### Changed
- Updated documentation and improved code readability.
- Removed automatic filtering of certain selectors.

### Fixed
- Fixed bugs related to selector parsing, missing whitespace, and broken detection of duplicate attributes.

## [0.8.1] - 2023-11-20

### Fixed
- Fixed various bugs related to web scraping logic and selector parsing.

## [0.8] - 2023-11-19

### Added
- Added documentation for various web scraping methods and modules.
- Added unit tests for bug reports and Puppeteer scripts.
- Integrated coding standards to maintain code consistency.

### Changed
- Removed automatic filtering of certain selectors.
- Updated lists of supported e-commerce platforms.

### Fixed
- Fixed compatibility issues with Node.js and addressed bugs related to web scraping logic.

## [0.7] - 2023-11-19

### Added
- Added code documentation to improve readability.
- Included unit tests for bug reports and web scraping modules.
- Enhanced support for attributes without whitespace.

### Changed
- Improved documentation and readability for scraping modules.
- Updated lists of supported e-commerce platforms.

### Fixed
- Fixed bugs related to memory management and Node.js compatibility.
- Addressed issues with Puppeteer script compatibility.

...
