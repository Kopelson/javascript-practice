
const buttons = document.querySelectorAll('button');

function handleClick(e) {
    //handles opening an answer to a question
    if( e.target.innerHTML === "+"){
        //selects the entire div card
        const card = e.target.parentNode.parentNode;
        //selects the answer div to the question 
        const answer = card.childNodes;
        //The 4th child to the card nodes and removes the class 'hidden'
        answer[3].classList.remove("hidden");
        //changes the targets button to a "-"
        e.target.innerHTML = '-';
        return
    }
    //handles closing an answer to a question
    if( e.target.innerHTML === "-"){
        //selects the entire div card
        const card = e.target.parentNode.parentNode;
        //selects the answer div to the question 
        const answer = card.childNodes;
        //The 4th child to the card nodes and adds the class 'hidden'
        answer[3].classList.add("hidden");
        //changes the targets button to a "+"
        e.target.innerHTML = '+';
        return
    }
}

buttons.forEach(button => button.addEventListener("click", handleClick));
