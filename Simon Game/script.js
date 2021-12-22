// LQKey concepts covered:

// querySelector()
// addEventListener()
// setInterval()
// clearInterval()
// setTimeout()
// play()
// Math.floor()
// Math.random()

//selectors
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const message = document.getElementById('message');
const time = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

const colors = ["red", "blue", "green", "yellow"];
let score = 0;
let gameCount = 1;
let simonArray = [];
let playersArray = [];
let timer = 10;
let start = false;

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}

function removeActive(){
    red.classList.remove('active');
    blue.classList.remove('active');
    green.classList.remove('active');
    yellow.classList.remove('active');
}

function simonDisplay(color){
    console.log("showing color: " + color);
    removeActive();
    if(color === "red"){
        red.classList.add("active");
    }
    if(color === "blue"){
        blue.classList.add("active");
    }
    if(color === "green"){
        green.classList.add("active");
    }
    if(color === "yellow"){
        yellow.classList.add("active");
    }
}

function fillSimonArray(){
    console.log("filling simon's array...")
    for (let i=0; i < gameCount; i++){
      simonArray.push(getRandomColor());  
    }
}

function playersTurn(){
    playersArray = [];
    console.log("Listening to player choices...")
    message.innerText = "Choose carefully!"
    playerInterval = setInterval(function(){
        console.log(timer);
        time.innerText = "Timer: " + timer;
        timer --;
        if(timer < 0){
            clearInterval(playerInterval);
            console.log("Timer has ended!")
            endGame();
        }
    }, 1000);
}

function endGame(){
    let playerChoiceString = JSON.stringify(playersArray);
    let simonChoiceString = JSON.stringify(simonArray);
    console.log(playerChoiceString);
    console.log(simonChoiceString);
    if(playerChoiceString === simonChoiceString){
        message.innerText = "Nice Work! Press Start to Continue!"
        console.log("You Win!");
        score ++;
        scoreDisplay.innerText = "Score: " + score;
        gameCount ++;
    }
    if(playerChoiceString !== simonChoiceString){
        message.innerText = "Oops! Press Start to try again."
        console.log("You Lose!");
        score = 0;
        scoreDisplay.innerText = "Score: " + score;
        gameCount = 1;
    }
    simonArray = [];
    playersArray = [];
    timer = 10;
    time.innerText = "Timer: " + timer;
    start = false;
}

function startGame(){
    if(!start){
    console.log("starting game...")
    message.innerText = "Simon Says:"
    start = true;
    fillSimonArray()
    let index = 0;
    gameInterval = setInterval(function(){
        simonDisplay(simonArray[index])
        index ++;
        if(index > simonArray.length - 1){
            clearInterval(gameInterval);
            console.log("Ending Simon's turn...");
            setTimeout(removeActive, 1000, playersTurn());
        }
    }, 2000);
    }
    if(start){
        console.log("Game has already started!")
    }
}

function handleClick(e){
    console.log(e.target.id)
    if(e.target.classList.value === 'start'){
        startGame();
    }
    if(e.target.id === "red"){
        playersArray.push("red");
    }
    if(e.target.id === "blue"){
        playersArray.push("blue");
    }
    if(e.target.id === "green"){
        playersArray.push("green");
    }
    if(e.target.id === "yellow"){
        playersArray.push("yellow");
    }
}


document.addEventListener("click", handleClick);