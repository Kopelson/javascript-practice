
const colors = [
'AliceBlue',
'AntiqueWhite',
'Aqua',
'Aquamarine',
'Azure',
'Beige',
'Bisque',
'Black',
'BlanchedAlmond',
'Blue',
'BlueViolet',
'Brown',
'BurlyWood',
'CadetBlue',
'Chartreuse',
'Chocolate',
'Coral',
'CornflowerBlue',
'Cornsilk',
'Crimson',
'Cyan',
'DarkBlue',
'DarkCyan',
'DarkGoldenRod',
'DarkGray',
'DarkGrey',
'DarkGreen',
'DarkKhaki',
'DarkMagenta',
'DarkOliveGreen',
'DarkOrange',
'DarkOrchid',
'DarkSalmon',
'DarkSeaGreen',
'DarkSlateBlue',
'DarkSlateGray',
'DarkTurquoise',
'DarkViolet',
'DeepPink',
'DeepSkyBlue',
'DimGray',
'DodgerBlue',
'FireBrick',
'FloralWhite',
'ForestGreen',
'Fuchsia',
'Gainsboro',
'GhostWhite',
'Gold',
'GoldenRod',
'Gray',
'Green',
'GreenYellow',
'HoneyDew',
'HotPink',
'IndianRed',
'Indigo',
'Ivory',
'Khaki',
'Lavender',
'LavenderBlush',
'LawnGreen',
'LemonChiffon',
'LightBlue',
'LightCoral',
'LightCyan',
'LightGoldenRodYellow',
'LightGray',
'LightGreen',
'LightPink',
'LightSalmon',
'LightSeaGreen',
'LightSkyBlue',
'LightSlateGray',
'LightSteelBlue',
'LightYellow',
'Lime',
'LimeGreen',
'Linen',
'Magenta',
'Maroon',
'MediumAquaMarine',
'MediumBlue',
'MediumOrchid',
'MediumPurple',
'MediumSeaGreen',
'MediumSlateBlue',
'MediumSpringGreen',
'MediumTurquoise',
'MediumVioletRed',
'MidnightBlue',
'MintCream',
'MistyRose',
'Moccasin',
'NavajoWhite',
'Navy',
'OldLace',
'Olive',
'OliveDrab',
'Orange',
'OrangeRed',
'Orchid',
'PaleGoldenRod',
'PaleGreen',
'PaleTurquoise',
'PaleVioletRed',
'PapayaWhip',
'PeachPuff',
'Peru',
'Pink',
'Plum',
'PowderBlue',
'Purple',
'RebeccaPurple',
'Red',
'RosyBrown',
'RoyalBlue',
'SaddleBrown',
'Salmon',
'SandyBrown',
'SeaGreen',
'SeaShell',
'Sienna',
'Silver',
'SkyBlue',
'SlateBlue',
'SlateGray',
'SlateGrey',
'Snow',
'SpringGreen',
'SteelBlue',
'Tan',
'Teal',
'Thistle',
'Tomato',
'Turquoise',
'Violet',
'Wheat',
'White',
'WhiteSmoke',
'Yellow',
'YellowGreen'
]

const hexDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

function handleClick(){

    if(document.getElementById('color-flipper').className === "active"){
        let randomNumber = Math.floor(Math.random()*colors.length);
        document.getElementById('colorChanger').innerHTML = colors[randomNumber];
        document.getElementById('background-color-main').style.backgroundColor = colors[randomNumber];
        document.getElementById('background-color-button').style.backgroundColor = colors[randomNumber];  
    }

    if(document.getElementById('simple-hex').className === "active"){
        let randomHexDigit1 = Math.floor(Math.random()*hexDigits.length);
        let randomHexDigit2 = Math.floor(Math.random()*hexDigits.length);
        let randomHexDigit3 = Math.floor(Math.random()*hexDigits.length);
        let randomHexDigit4 = Math.floor(Math.random()*hexDigits.length);
        let randomHexDigit5 = Math.floor(Math.random()*hexDigits.length);
        let randomHexDigit6 = Math.floor(Math.random()*hexDigits.length);
        let randomHex = "#" + hexDigits[randomHexDigit1] + hexDigits[randomHexDigit2] + hexDigits[randomHexDigit3] + hexDigits[randomHexDigit4] + hexDigits[randomHexDigit5] + hexDigits[randomHexDigit6];
        document.getElementById('colorChanger').innerHTML = randomHex;
        document.getElementById('background-color-main').style.backgroundColor = randomHex;
        document.getElementById('background-color-button').style.backgroundColor = randomHex;  
    }
    
}

function changeActive() {
    if(this.id === "simple-hex"){
        document.getElementById("color-flipper").className = "";
        document.getElementById("simple-hex").className = "active";
    }
    if(this.id === "color-flipper"){
        document.getElementById("simple-hex").className = "";
        document.getElementById("color-flipper").className = "active";
    }
}

document.getElementById("color-flipper").addEventListener("click", changeActive);
document.getElementById("simple-hex").addEventListener("click", changeActive);
