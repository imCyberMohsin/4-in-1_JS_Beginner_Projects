//! Script Guess The Number

// Random number from 0 to 1
const randomNumber = parseInt(Math.random() * 100 + 1);

// Get Elements From HTML
const submit = document.querySelector("#submit-btn");
const UserInput = document.querySelector("#guess-input");
const previousGuess = document.querySelector("#prev-guess");
const remainingGuess = document.querySelector("#rem-guess");
const smallORbig = document.querySelector("#smallORbig");
const startOver = document.querySelector(".paras");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

/* Main Game */
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(UserInput.value);
        // console.log(guess);

        validateGuess(guess);
    });
}

// Game Functions
function validateGuess(guess) {
    // Validate the guesses
    if (guess === "" || isNaN(guess)) {
        alert("Please Enter A Valid Number 🥹");
    } else if (guess > 100) {
        alert("Number must be less than 100 😶");
    } else if (guess < 1) {
        alert("Number must be greater than 1 🥲");
    } else {
        // storing the gussed numbers to array
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`🤡🤡Game Over🤡🤡 🔢Number Was ${randomNumber}🔢`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // check that the guess is higher or lower
    if (guess === randomNumber) {
        displayMessage(`You Guessed It Right 🥳`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Try Greater Number!`);
    } else if (guess > randomNumber) {
        displayMessage(`Try Lower Number!`);
    }
}

function displayGuess(guess) {
    // display the guesses in HTML
    UserInput.value = "";
    previousGuess.innerHTML += `${guess}, `;
    numGuess++;
    remainingGuess.innerHTML = `Attempts Remaining : ${11 - numGuess}`;
}

function displayMessage(message) {
    // display that the no. is high or low
    smallORbig.innerHTML = `<h4>${message}</h4>`;
}

function endGame() {
    //
    UserInput.value = "";
    UserInput.setAttribute("disabled", "");
    playGame = false;
}

function newGame() {
    //
}
