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

function game(){
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('pick an option: rock paper or scissors')
    //evaluates player input for validity
    try{
      playerSelection = playerSelection.toLowerCase();
    }
    catch(err){
      alert("please enter a valid choice: rock, paper, or scissors");
    }
    if ((playerSelection!="rock") && (playerSelection!="scissors") && (playerSelection!="paper"))
      {
      alert("please enter a valid choice: rock, paper, or scissors");
      i=-1; continue;
      }
    
    //now that player input is good, we can proceed with playing the round
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    switch(result){
      case 0:
        console.log(`Tie! You both picked ${playerSelection}! Re-doing round...`);
        i=i-1; 
        continue;
      case 1:
        console.log(end_message("win",playerSelection,computerSelection))
        playerScore++;
        break;
      case 2:
        console.log(end_message("lose",computerSelection,playerSelection))
        computerScore++;
        break;
      default:
        throw `playRound returned a bad number -- the code should never get here: player input = ${playerSelection}, computer input = ${computerSelection}`;
    }
  }
  if (playerScore > computerScore){
    return `You win!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
  }
  else{
    return `You lose!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
  }

}

console.log(game());


