/*
play round takes player selection and computer selection
turn player selection to lower case
check to make sure player selection valid
pick one of the 3 for computer selection 

*/

function computerPlay(){
  let choices = ['rock','paper','scissors'];
  let select = choices[math.floor(math.random()*choices.length)];
  return select;
}

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  if ((playerSelection == "rock") || (playerSelection == "scissors") || (playerSelection == "paper"))
    {
      continue;
    }
  else
  {
    return "please enter a valid choice";
  }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

