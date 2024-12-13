// script.js
const game = document.getElementById('game');
const player = document.getElementById('player');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

let score = 0;
let ballSpeed = 5;
let ballInterval;

function resetBall() {
  ball.style.top = '0px';
  ball.style.left = `${Math.random() * (game.clientWidth - 30)}px`;
}

function startGame() {
  resetBall();

  ballInterval = setInterval(() => {
    const ballTop = parseInt(ball.style.top);
    ball.style.top = `${ballTop + ballSpeed}px`;

    const ballRect = ball.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    if (
      ballRect.top + ballRect.height > playerRect.top &&
      ballRect.left < playerRect.left + playerRect.width &&
      ballRect.left + ballRect.width > playerRect.left
    ) {
      score++;
      scoreDisplay.textContent = score;
      resetBall();
    }

    if (ballTop > game.clientHeight) {
      alert('Game Over! Your Score: ' + score);
      clearInterval(ballInterval);
      score = 0;
      scoreDisplay.textContent = score;
      resetBall();
    }
  }, 20);
}

game.addEventListener('mousemove', (e) => {
  const playerWidth = player.offsetWidth;
  player.style.left = `${Math.min(
    Math.max(0, e.clientX - playerWidth / 2),
    game.clientWidth - playerWidth
  )}px`;
});

startGame();
