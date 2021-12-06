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


const icon = document.querySelector('.icon-toggle');
const nav = document.querySelector(".nav-toggle")

icon.addEventListener("click", function(){
    console.log("clicked icon")
    nav.classList.toggle("show-links");
})