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
starts loop
  calls play round
end loop

return winner
*/

let playerScore = document.getElementById("PS");
let computerScore = document.getElementById("CS");
let log = document.getElementById("log")

const buttons = document.getElementsByClassName("rps-buttons");

Array.from(buttons).forEach(btn => {
  btn.addEventListener('click', function(){
    playGame(btn.textContent, computerPlay())
  })
})



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
  playerSelection = playerSelection.toLowerCase();

  //checks for tie case
  if (playerSelection == computerSelection){
    //the original string return values have been moved to the game() function for wins, loses, and ties
    //I've left the original return statements for clarity
    //return `Tie! You both picked ${playerSelection}`;
    return 0;
  }
  //eval all win cases here
  if (
    ((playerSelection=="rock")&&(computerSelection=="scissors")) ||
    ((playerSelection=="scissors")&&(computerSelection=="paper")) ||
    ((playerSelection=="paper")&&(computerSelection=="rock"))
    ){
      //return end_message("win",playerSelection,computerSelection);
      return 1;
    }
  //if we've checked for a tie and we'be checked for a win;
  //it's safe to say the player lost!
  else {
    //return end_message("lose",computerSelection,playerSelection);
    return 2;
  }
}

function playGame(playerSelection, computerSelection){
  let msg;
  switch(playRound(playerSelection,computerSelection)){
    case 0:
      //tie
      msg = `Tie! You both picked ${playerSelection}`;
      log.textContent = msg;
      break;
    case 1:
      //player win
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      msg = end_message('win', playerSelection, computerSelection);
      log.textContent = msg;
      break;
    case 2:
      //player loose
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      msg = end_message('lose', computerSelection, playerSelection);
      log.textContent = msg;
      break;
  }
  //check for total score here
}

