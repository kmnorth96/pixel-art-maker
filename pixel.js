//containers for working page content
    //grid container
const canvas = document.querySelector(".canvas");
    //main container
const container = document.querySelector(".container");
    //swatch container
const swatch = document.querySelector(".swatch");
    //erase button 
const reset = document.querySelector('.erase');

//canvas size
const pixelRow = 60;
const pixelWidth = 10;

//working color
let currentColor = 'orange';

//paintbrush mouseover
let draw = false;

//canvas width
canvas.style.width = `${pixelWidth * pixelRow}px`;
//create canvas
function createCanvas() {
for (let i = 1; i <= pixelRow** 2; i++){
    const pixel = document.createElement("button");
    pixel.className = 'pixel';
    pixel.style.width = `${pixelWidth}px`;
    pixel.style.height = `${pixelWidth}px`;
    //change pixel color 
    pixel.addEventListener('click', () =>{
        pixel.style.background = currentColor;
    })
    //if mouse is clicked down and moving mouse over pixels, change pixel color
    pixel.addEventListener("mouseover", ()=> {
        //if mousedown, change color of pixels gone over
        mouseOver(pixel);
    })
    //append grid to canvas
    canvas.append(pixel);
}
}
//call canvas function
createCanvas();

//current color displayed
function displayedColor() {
    //get menu container
    let menu = document.querySelector('.menu');
    //get color display button
    let displayedColor = document.querySelector('.displayedColor');
    //change background of displayed color button to current color
    displayedColor.style.backgroundColor = currentColor;
    //append display color button to the menu
    menu.append(displayedColor);
    }
    displayedColor();

    //paintbrush function and eventlisteners
function mouseOver(pixel) {
    if (!draw) return
     pixel.style.backgroundColor = currentColor;
}
//when mousedown, set draw to true (draw on line 19)
window.addEventListener("mousedown", function() {
    draw = true;
})
// when mouseup set draw to false
window.addEventListener("mouseup", function () {
    draw = false;
})

//colorPicker function 
function createColorPicker(color) {
    const picker = document.createElement('div');
    picker.className = "color-picker";
    picker.style.backgroundColor = color;
    picker.addEventListener('click', () => {
    //change color from current color to chosen color from swatch
        currentColor = color;
    // change the color of current displayed color
    let colorChange = document.querySelector('.displayedColor');
    colorChange.style.backgroundColor = currentColor;
    })
    //append picker to swatch div
    swatch.append(picker);
}
// color selected from color picker
const colorOptions = ["red", "orange", "yellow", "green", "blue", "aqua", "purple", "magenta", "pink", "black", "grey", "brown" ,"white"];
// loop through array of colors and call color picker function on selected color
for (let color of colorOptions){
    createColorPicker(color);
}

//erase button eventListener, need to callback createcanvas after erasing grid
reset.addEventListener('click', function(){
    canvas.innerHTML = '';
    createCanvas();
})