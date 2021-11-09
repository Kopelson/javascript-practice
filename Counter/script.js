const numberDisplay = document.getElementById("number");
let number = 0;

function handleClick (e) {
    console.log("You Clicked: ")
    if(e === "decrease"){
        console.log("decrease");
        number--;
    }
    if(e === "reset"){
        console.log("reset");
        number = 0;
    }
    if(e === "increase"){
        console.log("increase");
        number++;
    }
    numberDisplay.innerHTML = number;
}

document.getElementById("decrease").addEventListener("click", () => handleClick("decrease"));
document.getElementById("reset").addEventListener("click", () => handleClick("reset"));
document.getElementById("increase").addEventListener("click", () => handleClick("increase"));