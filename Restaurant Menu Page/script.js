// Key concepts covered:

// arrays
// objects
// forEach()
// DOMContentLoaded
// map, reduce, and filter
// innerHTML
// includes method

const menu = {
    breakfast: [
        {
            title: "Buttermilk Pancakes",
            price: "$15.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://bakerbynature.com/wp-content/uploads/2016/02/IMG_8456-6-2.jpg"
        },
        {
            title: "Country Delight",
            price: "$20.99",
            description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austing mlkshk truffaunt",
            image: "http://cdn.theculturetrip.com/wp-content/uploads/2016/06/img_3618.jpg"
        },
        {
            title: "Bacon Overflow",
            price: "$8.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://media.istockphoto.com/photos/cooked-greasy-bacon-picture-id160860037"
        }
    ],

    lunch: [
        {
            title: "Diner Double",
            price: "$15.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://eu2prddennyscdnstr.blob.core.windows.net/cms/menu/product/americas-diner-double_thumbnailmedium_2019-06-12-22-59-23.jpg"
        },
        {
            title: "Egg Attack",
            price: "$15.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_02/933116/breakfast_pizza_bianca.jpg"
        },
        {
            title: "Buttermilk Pancakes",
            price: "$15.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://bakerbynature.com/wp-content/uploads/2016/02/IMG_8456-6-2.jpg"
        }
    ],

    shakes: [
        {
            title: "Godzilla Milkshake",
            price: "$6.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://i0.wp.com/miakouppa.com/wp-content/uploads/2019/06/Milkshake-edited-4.jpg?resize=656%2C875&ssl=1"
        },
        {
            title: "Oreo Dream",
            price: "$18.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "http://www.sweetdscreations.com/blog/wp-content/uploads/2017/07/img_9903.jpg"
        },
        {
            title: "Quarantine Buddy",
            price: "$16.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            image: "https://www.thespruceeats.com/thmb/to4ToJyiIm0DcxElULigDHKTOPY=/1500x1041/filters:fill(auto,1)/chocolatemilkshake-5c6e0b9e46e0fb0001e6e84d.jpg"
        },
    ]
}



function generateMenuItem(title, price, description, image){
    //Select menu div
    const menuDiv = document.getElementById('menu');
    //Create card div
    const cardDiv = document.createElement('div');
    cardDiv.className = 'menu-item-card';
    //Create image div
    const cardImgDiv = document.createElement('div');
    cardImgDiv.className = 'menu-item-card-img';
    //Create img element 
    const cardImg = document.createElement('img');
    cardImg.src = image;
    cardImg.alt = title;
    //Create card info div
    const cardInfoDiv = document.createElement('div');
    cardInfoDiv.className = 'menu-item-card-info';
    //Create card title div 
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.className = 'menu-item-card-title';
    //Create title h2 element 
    const cardTitleH2 = document.createElement('h2');
    cardTitleH2.innerText = title;
    //Create price p element
    const cardPriceP = document.createElement('p');
    cardPriceP.className = "item-price";
    cardPriceP.innerText = price;
    //Create description div 
    const cardDescriptionDiv = document.createElement('div');
    cardDescriptionDiv.className = 'menu-item-card-description';
    //Create hr 
    const cardHr = document.createElement('hr');
    //Create description p element
    const cardDescriptionP = document.createElement('p');
    cardDescriptionP.className = 'padding';
    cardDescriptionP.innerText = description;

    //append newly created elements to the menu 
    menuDiv.append(cardDiv);
    //the following appends creates a menu item card
    cardDiv.appendChild(cardImgDiv);
    cardImgDiv.appendChild(cardImg)
    cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(cardTitleDiv);
    cardTitleDiv.appendChild(cardTitleH2);
    cardTitleDiv.appendChild(cardPriceP);
    cardInfoDiv.appendChild(cardDescriptionDiv);
    cardDescriptionDiv.appendChild(cardHr);
    cardDescriptionDiv.appendChild(cardDescriptionP);

    
}

function loadMenu(){
    menu.breakfast.forEach(element => {
        generateMenuItem(element.title, element.price, element.description, element.image)
    });
    menu.lunch.forEach(element => {
        generateMenuItem(element.title, element.price, element.description, element.image)
    });
    menu.shakes.forEach(element => {
        generateMenuItem(element.title, element.price, element.description, element.image)
    });
}

//initialize menu items
loadMenu();