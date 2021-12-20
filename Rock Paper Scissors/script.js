//selectors
const playerChoice = document.getElementById('player');
const playerChoiceContainer = document.getElementById('playerChoiceContainer');
const playerScoreId = document.getElementById('playerScore');

const computerChoice = document.getElementById('computer');
const computerChoiceContainer = document.getElementById('computerChoiceContainer');
const computerScoreId = document.getElementById('computerScore');

const gameResult = document.getElementById('result');
//initialize
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function randomChoice(){
   const index = Math.floor(Math.random() * choices.length);

   return choices[index];
}

function renderScore(){
    playerScoreId.innerText = playerScore;
    computerScoreId.innerText = computerScore;
}

function decideWinner(player, computer){
    //tie game
    if(player === computer){
        //update game result
        gameResult.innerHTML = "<h1>Tie!</h1>";
        playerChoiceContainer.classList = "game-choice tie";
        computerChoiceContainer.classList = "game-choice tie";
        return console.log("Tie");
    }
    //winning game
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
        )
    {
        //update game result
        gameResult.innerHTML = "<h1>You Win!</h1>";
        //update background color
        playerChoiceContainer.classList = "game-choice win";
        computerChoiceContainer.classList = "game-choice lose";
        //update player score
        playerScore += 1;
        return console.log("Player Wins!")
    //losing game
    } else {
        //update game result
        gameResult.innerHTML = "<h1>You Lose!</h1>";
        //update background color
        playerChoiceContainer.classList = "game-choice lose";
        computerChoiceContainer.classList = "game-choice win";
        //update computer score
        computerScore += 1
        console.log("Computer Wins!")
    }
}

function changeSymbol(symbol){
    console.log("player has chosen " + symbol);
    console.log("Changing player choice to " + symbol);
    playerChoice.innerHTML = `<i class="far fa-hand-${symbol}"></i>`;
    
    const getComputerChoice = randomChoice();
    console.log("Computer has chosen " + getComputerChoice);
    console.log("Changing computer choice to " + getComputerChoice);
    computerChoice.innerHTML = `<i class="far fa-hand-${getComputerChoice}"></i>`;

    decideWinner(symbol, getComputerChoice);
    renderScore();
}

function handleClick(e){
    console.log("clicked " + e.target.id + e.target.parentElement.id)
    const symbol = e.target.id;
    const symbolIcon = e.target.parentElement.id;
    if(symbol === "rock" || symbolIcon === "rock"){
        changeSymbol("rock");
    }
    if(symbol === "paper" || symbolIcon === "paper"){
        changeSymbol("paper");
    }
    if(symbol === "scissors" || symbolIcon === "scissors"){
        changeSymbol("scissors");
    }

} 




document.addEventListener('click', handleClick);