/*
computer play has array of values
randomly returns one: rock paper or scissors

play round takes player selection and computer selection
checks for tie
evaluate all win cases for player
else return loss

play game is basically just a switch case for play round
it generates win and lose messages for the log and
adds to the score tally's in the html document


*/
//assigns variables to interface with webpage
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
  //converts selection to lowercase from buttons
  playerSelection = playerSelection.toLowerCase();

  //checks for tie case
  if (playerSelection == computerSelection){
    return 0;
  }
  //eval all win cases here
  if (
    ((playerSelection=="rock")&&(computerSelection=="scissors")) ||
    ((playerSelection=="scissors")&&(computerSelection=="paper")) ||
    ((playerSelection=="paper")&&(computerSelection=="rock"))
    ){
      return 1;
    }
  //if we've checked for a tie and we'be checked for a win;
  //it's safe to say the player lost!
  else {
    return 2;
  }
}

function playGame(playerSelection, computerSelection){
  let msg;
  //takes the playround function and evalutes the output for win, loss or tie
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

  //checks if either player hit 5 points and resets the game if so
  if(playerScore.textContent == '5'){
    alert("You win! Click okay to play again");
    playerScore.textContent = '0';
    computerScore.textContent = '0';
  }
  else if(computerScore.textContent == '5'){
    alert("You lose! Click okay to play again");
    playerScore.textContent = '0';
    computerScore.textContent = '0';
  }

}

