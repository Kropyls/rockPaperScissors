/*
computer play has array of values
randomly returns one: rock paper or scissors

play round takes player selection and computer selection
turn player selection to lower case
check to make sure player selection valid -- this has been moved to "game()" function
pick one of the 3 for computer selection 
checks for tie
evaluate all win cases for player
else return loss

game loops for set number of times
gets player input using prompt
checks player input for validity
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
  //checks to see if player or computer wins
  //all inputs should be checked for validity before being handed to this function
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

function game(){
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('pick an option: rock paper or scissors')
    playerSelection = playerSelection.toLowerCase();
    //evaluates player input for validity
    if ((playerSelection!="rock") && (playerSelection!="scissors") && (playerSelection!="paper"))
      {
      alert("please enter a valid choice: rock, paper, or scissors");
      i=-1;
      continue;
      }
  }
}

// let playerSelection = "rock";
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

