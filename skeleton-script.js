/*
computer play has array of values
randomly returns one
play round takes player selection and computer selection
turn player selection to lower case
check to make sure player selection valid
pick one of the 3 for computer selection 
checks for tie
switch case to evaulate winner
*/

function computerPlay(){
  let choices = ['rock','paper','scissors'];
  let select = choices[Math.floor(Math.random()*choices.length)];
  return select;
}

function playRound(playerSelection, computerSelection) {
  let win_msg = "You win! "
  let lose_msg = "You lose! "
  playerSelection = playerSelection.toLowerCase();
  if (!(playerSelection == "rock") || (playerSelection == "scissors") || (playerSelection == "paper"))
    {
    return "please enter a valid choice";
    }
  if (playerSelection == computerSelection){
    return `Tie! You both picked ${playerSelection}`;
  }
  //eval all win cases here
  if (
    ((playerSelection=="rock")&&(computerSelection=="scissors")) ||
    ((playerSelection=="scissors")&&(computerSelection=="paper")) ||
    ((playerSelection=="paper")&&(computerSelection=="rock"))
    ){
      return win_msg;
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

