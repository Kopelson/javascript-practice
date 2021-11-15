const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const icon = document.querySelector(".fa-bars");

function clickHandler(){

    if(icon.classList.contains("fa-rotate-90")){
        icon.classList.remove("fa-rotate-90"); 
    } else {
        icon.classList.add("fa-rotate-90"); 
    }
    
    if(menu.classList.contains("show-links")){
        menu.classList.remove("show-links");
    } else {
        menu.classList.add("show-links");
    }
}

toggle.addEventListener("click", clickHandler);