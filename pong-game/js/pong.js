// JavaScript code for the Pong game

// Get the canvas and context
const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

// Set up the game variables
let paddleWidth = 10;
let paddleHeight = 100;
let ballSize = 10;
let player1Score = 0;
let player2Score = 0;
let isSinglePlayer = false;

// Create paddles and ball
const player1 = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'blue',
    dy: 0
};

const player2 = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'red',
    dy: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: ballSize,
    speed: 4,
    dx: 4,
    dy: 4
};

// Load sound effects
const bounceSound = new Audio('sounds/bounce.wav');
const scoreSound = new Audio('sounds/score.wav');

// Initialize the game
function initGame(singlePlayer) {
    isSinglePlayer = singlePlayer;
    player1Score = 0;
    player2Score = 0;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 4;
    ball.dy = 4;
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    requestAnimationFrame(gameLoop);
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    // Move paddles
    player1.y += player1.dy;
    if (isSinglePlayer) {
        // AI for player 2
        player2.y = ball.y - paddleHeight / 2;
    } else {
        player2.y += player2.dy;
    }

    // Keep paddles within canvas
    player1.y = Math.max(Math.min(player1.y, canvas.height - paddleHeight), 0);
    player2.y = Math.max(Math.min(player2.y, canvas.height - paddleHeight), 0);

    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom
    if (ball.y + ball.size > canvas.height || ball.y < 0) {
        ball.dy *= -1;
        bounceSound.play();
    }

    // Ball collision with paddles
    if (ball.x < player1.x + player1.width && ball.y > player1.y && ball.y < player1.y + player1.height) {
        ball.dx *= -1;
        bounceSound.play();
    }
    if (ball.x + ball.size > player2.x && ball.y > player2.y && ball.y < player2.y + player2.height) {
        ball.dx *= -1;
        bounceSound.play();
    }

    // Scoring
    if (ball.x < 0) {
        player2Score++;
        scoreSound.play();
        resetBall();
    }
    if (ball.x > canvas.width) {
        player1Score++;
        scoreSound.play();
        resetBall();
    }
}

// Reset ball position
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx; // Change direction
}

// Draw everything
function draw() {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    context.fillStyle = player1.color;
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    context.fillStyle = player2.color;
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    // Draw ball
    context.fillStyle = 'black';
    context.fillRect(ball.x, ball.y, ball.size, ball.size);

    // Draw scores
    context.font = '20px Arial';
    context.fillText(player1Score, canvas.width / 4, 20);
    context.fillText(player2Score, (canvas.width * 3) / 4, 20);
}

// Handle key down events
function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            player2.dy = -8;
            break;
        case 'ArrowDown':
            player2.dy = 8;
            break;
        case 'w':
            player1.dy = -8;
            break;
        case 's':
            player1.dy = 8;
            break;
    }
}

// Handle key up events
function handleKeyUp(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            player2.dy = 0;
            break;
        case 'w':
        case 's':
            player1.dy = 0;
            break;
    }
}