const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time-left');

let result = 0;
let hitPosition;
let currentTime = 20;
let timerId = null;

function randomSquare() {
    squares.forEach(squ => squ.classList.remove('mole'));

    let randomSquare = squares[Math.floor(Math.random() * squares.length)];

    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(squ => {
    squ.addEventListener('mousedown', () => {
        if (squ.id === hitPosition) {
            result++;
            scoreDisplay.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 300);
}

moveMole();

function countDown() {
    currentTime--;
    timeDisplay.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert(`Game Over! Your final score is ${result}`);
    }
}

let countDownTimerId = setInterval(countDown, 1000);