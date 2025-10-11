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

let gameRules = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper"
}

const buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach(function(actionBtn) {
  actionBtn.addEventListener(
    'click', 
    playRound
  );
});

const scoreWindows = document.getElementsByClassName('score-window');
Array.from(scoreWindows).forEach(function(scoreWindow) {
  scoreWindow.addEventListener(
    'transitionend', 
    () => scoreWindow.classList.remove('tie')
  );
});

function getComputerChoice () {
    const randomValue = Math.random();
    const computerChoice = randomValue <= 0.32 ? "rock" :
        randomValue <= 0.66 ? "paper" : "scissors";
    return computerChoice;
}

function displayTieAnimation () {
  const scoreWindows = document.getElementsByClassName('score-window');
  for (let scoreWindow of scoreWindows) {
    scoreWindow.classList.add('tie')
  }
}

function playRound () {
  let userChoice = this.getAttribute('data-choice');
  let computerChoice = getComputerChoice();

  userChoice === computerChoice ? displayTieAnimation() 
    : computerChoice === gameRules[userChoice] ? userScore++
    : computerScore++

  const userScoreWindow = document.querySelector('#user-score');
  const computerScoreWindow = document.querySelector('#computer-score');
  userScoreWindow.innerText = userScore;
  computerScoreWindow.innerText = computerScore;

  if (userScore >= 5 || computerScore >= 5) {
    Array.from(buttons).forEach(button => button.disabled = true);
    
    const winnerText = document.createElement('p');
    winnerText.style['font-size'] = '48px';
    
    userScore >= 5 ? winnerText.innerText = `You're a champion!` : winnerText.innerText = `The robot outplayed you!`;
    userScore >= 5 ? winnerText.style['color'] = 'green' : winnerText.style['color'] = 'red';
    
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Start over?';
    
    const container = document.querySelector('.container');
    container.appendChild(winnerText);
    container.appendChild(resetButton);
    
    resetButton.addEventListener('click', () => {
      container.removeChild(winnerText);
      container.removeChild(resetButton);
      [userScore, computerScore] = [0, 0];
      userScoreWindow.innerText = userScore;
      computerScoreWindow.innerText = computerScore;
      Array.from(buttons).forEach(button => button.disabled = false);
    })
  }
}