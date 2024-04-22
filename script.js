
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0EL = document.getElementById('score--0')
const score1EL = document.getElementById('score--1')
const diceEL = document.querySelector('.dice')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1');


const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden')

score = [0, 0]
let activePlayer = 0;
let currentScore = 0;


// rolling dice functionality

btnRoll.addEventListener('click', function () {

    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEL.src = `dice-${dice}.png`
    diceEL.classList.remove('hidden')


    if (dice !== 1) {
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else {
        currentScore = 0;

        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')

        activePlayer = activePlayer === 0 ? 1 : 0;




    }






})
