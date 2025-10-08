const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const Winmessage = document.getElementById('Winmessage');
const resetButton = document.getElementById('reset');
let score = 0;
let gameInterval;

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    Winmessage.style.display = 'none';
    resetButton.style.display = 'none';
    gameInterval = setInterval(randomMole, 800);
}

function randomMole() {
    moles.forEach(mole => mole.classList.remove('active'));
    const index = Math.floor(Math.random() * moles.length);
    moles[index].classList.add('active');
}

moles.forEach(mole => {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('active')) {
            score++;
            scoreDisplay.textContent = score;
           
            if (score >= 5) {
                stopGame();
            }
        }
    });
});

function stopGame() {
    clearInterval(gameInterval);
    moles.forEach(mole => mole.classList.remove('active'));
    Winmessage.style.display = 'block';
    resetButton.style.display = 'inline-block';
}

resetButton.addEventListener('click', () => {
    startGame();
});


startGame();