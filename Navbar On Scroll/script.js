function handleScroll(){
    if(window.scrollY > document.getElementById('header').clientHeight){
        document.getElementById('header').classList.add("fixed");
        document.getElementById('footer').classList.add("footer");
    }
    if(window.scrollY < document.getElementById('header').clientHeight){
        document.getElementById('header').classList.remove("fixed");
        document.getElementById('footer').classList.remove("footer");
    }

}

document.addEventListener("scroll", handleScroll);
