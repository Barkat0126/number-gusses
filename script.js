let randomNumber = (parseInt(Math.random() * 10 + 1 ));

const guessSlot = document.querySelector('.guesses');
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const remaining = document.querySelector('.LastResult');
const loworhi = document.querySelector('.loworhi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter more then 1');
    } else if(guess > 10){
        alert('please enter less 10');
    } else{
        prevGuess.push(guess)
        if (numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over.Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            displayMessage(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`number is TOO low`);
    } else if (guess > randomNumber){
        displayMessage(`number is TOO high`);
    } 
}

function displayGuess(guess){;
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disable','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random() * 10 + 1 ));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML ='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        
        playGame = true
    })
    //
}


