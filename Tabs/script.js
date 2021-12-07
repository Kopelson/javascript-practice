// classList.add()
// classList.remove()
// forEach()
// addEventListener()

const tabs = document.querySelectorAll(".tab");
const info = document.querySelector(".info");
const content = document.querySelectorAll(".content");

info.addEventListener("click", function (e){
    const id = e.target.dataset.id
    if(id){
        //remove active from other tabs
        tabs.forEach(function (tab) {
            tab.classList.remove("active");
            e.target.classList.add("active");
        })
        //hide other content sections
        content.forEach(function (section){
            section.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})