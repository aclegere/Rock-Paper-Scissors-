function userChoice() {
    const userChoice = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
    return userChoice
  }
  
  //originally tried using random int, math.random was easier to use. Thanks Google
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

  function playRound(userChoice, compChoice) { 
//rock
  if (userChoice == "rock") {
    if (compChoice == "scissors") {
      return (playerScore=playerScore+1) && `Winner! Rock beats Scissors! Computer:${cpuScore}, Player:${playerScore}` ;
    } else if (compChoice == "paper") {
      return (cpuScore=cpuScore+1) && `Sorry! Paper beats rock! Computer:${cpuScore}, Player:${playerScore}`;
    } else if (compChoice == "rock") {
      return (drawScore=drawScore+1) && `It's a Draw! Computer:${cpuScore}, Player:${playerScore}`;
    } 
  }
//paper
  else if (userChoice == "paper") {
    if (compChoice == "rock") {
      return (playerScore=playerScore+1) && `You Win! Paper beats rock! Computer:${cpuScore}, Player:${playerScore}`;
    } else if (compChoice == "scissors") {
      return (cpuScore=cpuScore+1) && `You Lose! Scissors beats Paper! Computer:${cpuScore}, Player:${playerScore}`;
    } else if (compChoice == "paper") {
      return (drawScore=drawScore+1) &&`It's a Draw! Computer:${cpuScore}, Player:${playerScore}`;
    } 
  }
//scissors
  else if (userChoice == "scissors") {
    if (compChoice == "paper") {
      return (playerScore=playerScore+1) &&`You win! scissors beat paper! Computer:${cpuScore}, Player:${playerScore}`;
    } else if (userChoice == "scissors" && compChoice == "rock") {
      return (cpuScore=cpuScore+1) && `You Lose! rock beats scissors Computer:${cpuScore}, Player:${playerScore}`;
    } else if (userChoice == "scissors" && compChoice == "scissors") {
      return (drawScore=drawScore+1) && `It's a Draw! Computer:${cpuScore}, Player:${playerScore}`;
    } 
  } else {
    return "That's not a valid choice";
  }
}

//5 game round with 5 user input
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

console.log(playRound(userChoice(), compChoice()))
// console.log(game())