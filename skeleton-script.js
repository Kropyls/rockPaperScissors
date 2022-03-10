/*
computer play has array of values
randomly returns one
play round takes player selection and computer selection
turn player selection to lower case
check to make sure player selection valid
pick one of the 3 for computer selection 
checks for tie
evaluate all win cases for player
else return loss
*/

function computerPlay(){
  let choices = ['rock','paper','scissors'];
  let select = choices[Math.floor(Math.random()*choices.length)];
  return select;
}

function end_message(result,winpick,losepick){
  return `You ${result}! ${winpick} beats ${losepick}!`;
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  //evaluates player input for validity
  if (!(playerSelection == "rock") || (playerSelection == "scissors") || (playerSelection == "paper"))
    {
    return "please enter a valid choice; choices are either rock, paper, or scissors";
    }
  //checks for tie case
  if (playerSelection == computerSelection){
    return `Tie! You both picked ${playerSelection}`;
  }
  //eval all win cases here
  if (
    ((playerSelection=="rock")&&(computerSelection=="scissors")) ||
    ((playerSelection=="scissors")&&(computerSelection=="paper")) ||
    ((playerSelection=="paper")&&(computerSelection=="rock"))
    ){
      return end_message("win",playerSelection,computerSelection);
    }
  //if we've checked for a tie and we'be checked for a win;
  //it's safe to say the player lost!
  else {
    return end_message("lose",computerSelection,playerSelection);
  }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

