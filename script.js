//computer choice via math random
function compChoice() {
  let compChoice = Math.random();
  if (compChoice < 0.34) {
    compChoice = "rock";
    } else if (compChoice <= 0.67) {
      compChoice = "paper";
    } else {
      compChoice = "scissors";
    }
    return compChoice
  }

//counters 
let playerScore=0;
let cpuScore=0;
let drawScore=0;   

//Game Logic 
function playRound(userChoice, compChoice) { 
  //rock
    if (userChoice == "rock") {
      if (compChoice == "scissors") {
        return (playerScore=playerScore+1) && `Computer chose scissors. You Win! Rock beats Scissors! Computer:${cpuScore}, Player:${playerScore}` ;
      } else if (compChoice == "paper") {
        return (cpuScore=cpuScore+1) && `Sorry! Computer chose paper. Paper beats rock! Computer:${cpuScore}, Player:${playerScore}`;
      } else if (compChoice == "rock") {
        return (drawScore=drawScore+1) && `It's a Draw! Computer:${cpuScore}, Player:${playerScore}`;
      } 
    }
  //paper
    else if (userChoice == "paper") {
      if (compChoice == "rock") {
        return (playerScore=playerScore+1) && `You Win! Computer chose paper. Paper beats rock! Computer:${cpuScore}, Player:${playerScore}`;
      } else if (compChoice == "scissors") {
        return (cpuScore=cpuScore+1) && `You Lose! Computer chose scissors. Scissors beats Paper! Computer:${cpuScore}, Player:${playerScore}`;
      } else if (compChoice == "paper") {
        return (drawScore=drawScore+1) &&`It's a Draw! Computer:${cpuScore}, Player:${playerScore}`;
      } 
    }
  //scissors
    else if (userChoice == "scissors") {
      if (compChoice == "paper") {
        return (playerScore=playerScore+1) &&`You win! Computer chose paper. Scissors beat paper! Computer:${cpuScore}, Player:${playerScore}`;
      } else if (userChoice == "scissors" && compChoice == "rock") {
        return (cpuScore=cpuScore+1) && `You Lose! Computer chose rock. Rock beats scissors Computer:${cpuScore}, Player:${playerScore}`;
      } else if (userChoice == "scissors" && compChoice == "scissors") {
        return (drawScore=drawScore+1) && `It's a Draw! Computer:${cpuScore}, Player:${playerScore}`;
      } 
    } 
  };

//Winning conditions function
function hideButtons(){
  rock.style.display="none";
  paper.style.display="none";
  scissors.style.display="none";
}

const winLoseMessage = document.getElementById("win-lose")
function winLose(){
  if (playerScore === 5){
    winLoseMessage.innerHTML = 'You beat the computer! Try again?';
    document.querySelector('body').style.backgroundColor="#60b347";
    hideButtons();
    document.querySelector('.winCondition').innerHTML = '';
  } else if (cpuScore === 5) {
    winLoseMessage.innerHTML = 'Tough luck! Try again?';
    document.querySelector('body').style.backgroundColor="#A13D2D";
    document.querySelector('.winCondition').innerHTML = '';
    hideButtons();
  };
} 

//user choice 
const outcome = document.getElementById("outcome")
const rock = document.getElementById("rock")
rock.addEventListener("click", function(){
  outcome.innerHTML = playRound("rock",compChoice());
winLose()
});

const paper = document.getElementById("paper")
paper.addEventListener("click", function(){
  outcome.innerHTML = playRound("paper",compChoice());
winLose()
});

const scissors = document.getElementById("scissors")
scissors.addEventListener("click", function(){
  outcome.innerHTML = playRound("scissors",compChoice());
winLose()
});




//reset button 
const reset = document.getElementById("btn")
reset.addEventListener("click", function(){
  playerScore=0;
  cpuScore=0;
  drawScore=0; 
  outcome.innerHTML='';
  winLoseMessage.innerHTML = ''; 
  document.querySelector('body').style.backgroundColor ="#FFFFFF"
  rock.style.display="";
  paper.style.display="";
  scissors.style.display="";
  document.querySelector('.winCondition').innerHTML = 'Best of Five!'
})


/*
//This is to play game in console without UI
function userChoice() {
  const userChoice = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
    return userChoice
}


5 game round with 5 user input, need to unccomment game() below and 
you will get 5 alerts, results posted after in console 

function game(){
    for(let i=0;i<5;i++){
    playRound(userChoice(), compChoice()); 
  }
    if (playerScore > cpuScore) {
        return `Player Wins--Computer:${cpuScore}, Player:${playerScore}, Draws:${drawScore}`;
    } else {
        return `Computer wins--Computer:${cpuScore}, Player:${playerScore}, Draws:${drawScore}`;
    }
    
}
console.log(game())
console.log(playRound(userChoice(), compChoice()))
*/

