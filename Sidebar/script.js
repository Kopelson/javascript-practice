const menu = document.getElementById("sidebar-menu");
const sidebar = document.getElementById("sidebar");

function handleMenuClick(e) {
    if(e.target.classList.contains("sidebar-menu")){
        console.log("you clicked on menu");
        toggleMenu();
    }
}

function toggleMenu(){
    console.log(sidebar);
    if(sidebar.classList.contains("hidden")){
        sidebar.classList.remove("hidden");
    } else {
        sidebar.classList.add("hidden");
    }
}

document.addEventListener("click", handleMenuClick);