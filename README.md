# Simple Calculator App

A modern, responsive calculator application built with React, Vite, and Tailwind CSS. This calculator provides a clean user interface with essential mathematical operations and a professional dark theme design.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Handle decimal numbers with precision
- **Error Handling**: Displays "Error" for invalid operations (e.g., division by zero)
- **Clear Function**: Reset calculator with the AC (All Clear) button
- **Expression Display**: Shows the current expression and calculation history
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dark Theme**: Professional dark gray and black color scheme with orange and yellow accents
- **Smooth Interactions**: Hover and active states for better user experience

## Tech Stack

- **React 19.2.6** - UI library
- **Vite 8.0.12** - Build tool and dev server
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript
- **ESLint** - Code quality and style linting

## Project Structure

```
simple-calculator-app/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Calculator.jsx      # Main calculator logic and state
│   │   ├── Keypad.jsx          # Calculator keypad layout
│   │   └── Screen.jsx          # Display screen component
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # This file
```

## Component Overview

### Calculator.jsx

The main component that manages all calculator logic:

- Handles digit input and decimal points
- Processes mathematical operations
- Performs calculations with proper error handling
- Manages state for input, previous values, operators, and expressions

### Keypad.jsx

Displays the calculator buttons organized in a grid:

- Number buttons (0-9)
- Operator buttons (+, -, \*, /)
- Decimal point button
- All Clear (AC) button
- Equals button

### Screen.jsx

Shows both the expression history and current input

### Button.jsx

Reusable button component with customizable styling

## Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd simple-calculator-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Calculator Operations

- **Addition**: Enter a number → press `+` → enter another number → press `=`
- **Subtraction**: Enter a number → press `-` → enter another number → press `=`
- **Multiplication**: Enter a number → press `×` → enter another number → press `=`
- **Division**: Enter a number → press `/` → enter another number → press `=`
- **Clear**: Press `AC` to clear all and start over
- **Decimal Numbers**: Press `.` to add a decimal point

## Browser Support

This app works in all modern browsers that support ES2020+ and CSS Grid:

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- The calculator includes proper state management using React hooks (`useState`, `useCallback`)
- Calculations are performed with floating-point precision handling
- The UI is fully responsive using Tailwind CSS breakpoints (sm, lg)
- Color-coded buttons for different functions (gray for numbers, orange for operators, yellow for equals)

## Future Enhancements

Potential features for future versions:

- Memory functions (M+, M-, MR, MC)
- Keyboard support for all operations
- Calculation history display
- Scientific calculator mode
- Theme switcher (light/dark mode)
- Copy result to clipboard
- Undo/Redo functionality

## License

This project is open source and available for educational purposes.
