
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



const generateTarget = () => {
  return Math.floor(Math.random() * 10);
 
}
console.log(generateTarget())

const compareGuesses = (humanGuess, pcGuess, secretNumber) => {
  const humanDifference = Math.abs(secretNumber - humanGuess)
  const computerDifference = Math.abs(secretNumber - pcGuess)
  if (humanDifference <= computerDifference) {
    return true
  } else {
    return false
  }
}

console.log(compareGuesses())

const updateScore = (winner) => {
  if (winner === "computer") {
    computerScore++;
  } else {
    humanScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

console.log(updateScore())
