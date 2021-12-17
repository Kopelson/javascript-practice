const slider = [
    {
        title: "One",
        src: "https://via.placeholder.com/150?text=One"
    },
    {
        title: "two",
        src: "https://via.placeholder.com/150?text=two"
    },
    {
        title: "three",
        src: "https://via.placeholder.com/150?text=three"
    },
    {
        title: "four",
        src: "https://via.placeholder.com/150?text=four"
    }
]

const sliderTitle = document.getElementById('title');
const sliderImage = document.getElementById('image');

let index = 0;

function handleClick (e){
    const targetId =  e.target.id;
    if(targetId === "prev"){
        index --;
       checkIndex();
        changeImage(index);
    }

    if(targetId === "next"){
        index ++;
        checkIndex();
        changeImage(index);
    }
}

function checkIndex(){
    if (index < 0) {
        index = slider.length - 1;
    }
    if (index > slider.length - 1) {
        index = 0;
    }
}

function changeImage(index){
    sliderTitle.innerHTML = slider[index].title;
    sliderImage.src = slider[index].src;
}



document.addEventListener("click", handleClick);