//Select all cards
let cards = document.querySelectorAll(".card");
//initialize current card
let currentCard = 0;
//removes active class
function removeActive(){
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("active");
    }
}
//adds active class
function addActive(){
    if(currentCard < 0){
        cards[cards.length - 1].classList.add("active");
        currentCard = cards.length - 1;
        return;
    }
    if(currentCard > cards.length - 1){
        cards[0].classList.add("active");
        currentCard = 0;
        return;
    }
    cards[currentCard].classList.add("active");
}
//handle button clicks
function clickHandler(e){
    if(e.target.id === "left"){
        removeActive();
        currentCard--;
        addActive();
    }
    if(e.target.id === "right"){
        removeActive();
        currentCard++;
        addActive();
    }
    if(e.target.id === "surprise"){
        let randomCard = Math.floor(Math.random()*cards.length);
        removeActive();
        currentCard = randomCard;
        addActive()  
    }
};

document.addEventListener("click", clickHandler);