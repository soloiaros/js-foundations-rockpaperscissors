// When a user opens the program
// Initialize two variables for user score and computer score
// Show a prompt asking to pick between "rock", "paper", or "scissors"
// Store the user's input
// Get the random value from the list above as a "computer pick"
// Via if-else statements, get to know who won the round
// Update the score variables accordingly
// Notify the user on the results of the round
// If it was the fifth round, conclude the game
// If not, start the next round

let userScore = 0;
let computerScore = 0;

const buttons = document.getElementsByClassName('button');
Array(buttons).forEach(actionBtn => {
  actionBtn.addEventListener(
    'click', 
    playRound(actionBtn.getAttribute('data-choice')))
});

function getComputerChoice () {
    const randomValue = Math.random();
    const computerChoice = randomValue <= 0.32 ? "rock" :
        randomValue <= 0.66 ? "paper" : "scissors";
    return computerChoice;
}

function playRound (userChoice) {
    let computerChoice = getComputerChoice();

    console.log(`Your pick is ${userChoice}`)
    console.log(`Computer' pick is ${computerChoice}`)

    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            userScore += 1;
            computerScore += 1;
        } else if (computerChoice === "paper") {
            computerScore += 1;
        } else {
            userScore += 1;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            userScore += 1;
        } else if (computerChoice === "paper") {
            computerScore += 1;
            userScore += 1;
        } else {
            computerScore += 1;
        }
    } else {
        if (computerChoice === "rock") {
            computerScore += 1;
        } else if (computerChoice === "paper") {
            userScore += 1;
        } else {
            userScore += 1;
            computerScore += 1;
        }
    };
  }

function playGame () {

    
}

playGame();