let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuess = []
let numGuess = 0;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    } else if (guess < 1) {
        alert(`plaese enter a number greater than 1`)
    }
    else if (guess > 100) {
        alert(`plaese enter a number less than 100`)
    }
    else {
        previousGuess.push(guess)
        if (numGuess === 9) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low `)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high  `)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess += 1;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess=[]
        numGuess=0
        guessSlot.innerHTML=''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}