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

/*
This is an accounting for an issue that showed up one night
I cannot reproduce it, but I will leave this here in case it 
show up again so I can work to isolate what might be causing
it

bug showed up with the following play:
R player - com      = score

W rock   - scissors = p1c0
T rock   - rock     = p1c0
T rock   - rock     = p1c0
L rock   - paper    = p1c1
T rock   - rock     = p1c1
L rock   - paper    = p1c2
L rock   - paper    = p1c3
W rock   - scissors = p2c3
L rock    - paper   = p2c4

reported score: P2C4

UPDATE: This bug occurs when the counter value i, resets itself to 0.
I have no idea why it does this as of now but I have caught a log of it
happening. So far I have not been able to steadily reproduce the problem.

I'm going to commit this as is so I have a document of the issue
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

  //temp variables for T/S
  let totalRndPlayed = 0;
  let currentRnd = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('pick an option: rock paper or scissors')
    //evaluates player input for validity
    try{
      playerSelection = playerSelection.toLowerCase();
    }
    catch(err){
      alert("please enter a valid choice: rock, paper, or scissors");
    }
    //still evaling player input
    if ((playerSelection!="rock") && (playerSelection!="scissors") && (playerSelection!="paper"))
      {
      alert("please enter a valid choice: rock, paper, or scissors");
      i=-1; continue;
      }

    totalRndPlayed++;
    currentRnd++;
    
    //now that player input is good, we can proceed with playing the round
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    switch(result){
      case 0:
        //tie case
        console.log(`Tie! You both picked ${playerSelection}! Re-doing round...`);
        i=i-1; 
        //troubleshooting variable logging
        currentRnd = currentRnd - 1;
        console.log(`\nTotal Rounds: ${totalRndPlayed}\nCurrent Round: ${currentRnd}\ni = ${i}\n`);
        continue;
      case 1:
        //player win case
        console.log(end_message("win",playerSelection,computerSelection))
        playerScore++;
        //troubleshooting variable logging
        console.log(`\nTotal Rounds: ${totalRndPlayed}\nCurrent Round: ${currentRnd}\ni = ${i}\n`);
        break;
      case 2:
        //player lose case
        console.log(end_message("lose",computerSelection,playerSelection))
        computerScore++;
        //troubleshooting variable logging
        console.log(`\nTotal Rounds: ${totalRndPlayed}\nCurrent Round: ${currentRnd}\ni = ${i}\n`);
        break;
      default:
        //in case I for some reason modify the play round function, this should catch me being stupid
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


