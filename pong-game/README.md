# Pong Game Documentation

## Overview
This project implements the classic game of Pong using HTML5, CSS, and vanilla JavaScript. It features a simple menu to launch the game and options for both single-player and two-player modes. Sound effects enhance the gaming experience.

## Project Structure
```
pong-game
├── index.html        # Main menu for the game
├── pong.html         # Implementation of the Pong game
├── js
│   └── pong.js       # JavaScript code for game mechanics
├── sounds
│   ├── bounce.wav    # Sound effect for ball hitting a paddle
│   └── score.wav     # Sound effect for scoring a point
└── README.md         # Documentation for the project
```

## How to Play
1. Open `index.html` in your web browser to access the main menu.
2. Click on the link to launch the Pong game.
3. Choose between single-player or two-player mode:
   - **Single Player**: Control one paddle using the designated keys.
   - **Two Player**: Control both paddles using shared keyboard controls.
4. The game ends when a player reaches a predetermined score.

## Adding Future Games
To add more games to this project:
1. Create a new HTML file for the game (e.g., `newgame.html`).
2. Add a corresponding JavaScript file in the `js` directory (e.g., `js/newgame.js`).
3. Update `index.html` to include a link to the new game.

## Code Explanation
- **index.html**: Contains the basic HTML structure and navigation links.
- **pong.html**: Implements the game using the HTML5 canvas for rendering.
- **js/pong.js**: Contains the game logic, including:
  - Paddle movement
  - Ball movement and collision detection
  - Scoring system
  - Sound effects for gameplay feedback

## Sound Effects
- **bounce.wav**: Played when the ball hits a paddle.
- **score.wav**: Played when a player scores a point.

## Conclusion
This Pong game project serves as a great introduction to game development using web technologies. The code is structured to be easily understandable, making it suitable for learning purposes. Enjoy playing and feel free to expand the project with new games!