'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // Whan no input
    if (!guess || guess > 20 || guess < 1) {
        document.querySelector('.message').textContent = '🔴 Error 404! Recheck your input.';
    }
    // When player gueses it right
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!🥳';
        document.querySelector('body').style.backgroundColor = '#32CD32';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highestScore) {
            document.querySelector('.highscore').textContent = score;
            highestScore = score;
        }
    }
    // When the player is wrong
    else if (guess !== secretNumber && score > 1) {
        score--;
        document.querySelector('.message').textContent = guess > secretNumber ? 'The number is too high! ⬆️' : 'The number is too low! ⬇️';
        document.querySelector('.score').textContent = score;
    }
    // When the player looses
    else if (score === 1) {
        document.querySelector('.message').textContent = '😢 You lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#B22222';
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    // console.log(secretNumber);
})