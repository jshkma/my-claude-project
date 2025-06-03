# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple web project consisting of three main files:
- `index.html` - Interactive web page with glassmorphism design, features grid, theme switching, and real-time updates
- `app.js` - Node.js script with colorful terminal output, multilingual greetings, and periodic messages
- `README.md` - Basic project documentation

## Development Commands

### Running the Project
- **Web version**: Open `index.html` directly in a browser (no server required)
- **Node.js version**: `node app.js`

### File Structure
- Static HTML/CSS/JS website with inline styles and scripts
- No build process or package manager required
- Self-contained single-file web application

## Code Architecture

### Web Application (`index.html`)
- Single-page application with embedded CSS and JavaScript
- Responsive design using CSS Grid for feature cards
- Theme system with 5 gradient background options
- Real-time clock updates every second
- Quote rotation every 10 seconds
- Interactive buttons for greetings and theme changes

### Node.js Script (`app.js`)
- Terminal-based application with ANSI color codes
- Random selection utilities for greetings and quotes
- Interval-based status messages every 5 seconds
- Multilingual support (Korean, English, French, Spanish, Japanese)

Both applications share similar concepts (random greetings, quotes, time display) but serve different environments (web vs terminal).