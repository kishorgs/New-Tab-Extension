# New Tab Chrome Extension

Demo

<img src="img/Demo.mp4" alt="Demo Video" width="800" height="500"/>

## Overview

This Chrome extension replaces the default new tab page with a custom-designed screen that greets the user with dynamic messages based on the time of day. The extension also includes a beautiful particle background for an enhanced user experience.

## Features

- Dynamic greeting based on the current time (Morning, Afternoon, Evening, Night).
- Title of the tab changes when the page visibility changes.
- Interactive particle animation background.
- Simple and lightweight design.

## Installation

Follow the steps below to install and use the extension on Chrome:

1. **Clone or download the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   ```

2. **Navigate to Chrome Extensions page**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle at the top-right corner of the page.

3. **Load the extension**:
   - Click the "Load unpacked" button and select the folder where you cloned/downloaded the repository.
   - The extension will now be installed and active.

4. **Set the new tab page**:
   - Open a new tab in Chrome, and you will see the custom-designed greeting and particle animation.

## Usage

- When you open a new tab, you will be greeted with a message based on the current time:
  - Morning: "Good morning"
  - Afternoon: "Good afternoon"
  - Evening: "Good evening"
  - Night: "Good night"
  
- When the browser tab is not visible (i.e., minimized or in the background), the tab's title will change to "Hello Kishor" followed by the appropriate greeting (e.g., "Good morning").

- The page features a particle animation in the background that reacts to mouse events like hovering and clicking.

## Files and Structure

- `manifest.js`: Defines the Chrome extension configuration and specifies the `index.html` as the override for new tab pages.
- `index.html`: The main HTML file that contains the structure of the new tab page.
- `script.js`: Contains the logic for displaying dynamic greetings and managing the particle effects.
- `styles.css`: Styling for the new tab page.
- `particles.min.js`: A library used for the particle effect background.

## Future Improvements

- Add additional customizations for users to change the background color or greeting message.
- Enhance the particle effects with more interactivity.
- Allow users to configure greetings based on personalized preferences.

## Contributing

If you'd like to contribute to this project, feel free to open a pull request or report any issues in the repository.
```

In this version, the demo video appears at the beginning, right after the title, making it more prominent for users to access immediately.
