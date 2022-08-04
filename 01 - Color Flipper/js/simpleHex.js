colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let background = document.getElementById("background");
let button = document.querySelector("button");
let text = document.getElementById("text");

function getColor() {
    return Math.floor(Math.random() * (colorArr.length - 1));
}

button.addEventListener("click", function changeBackgroundColor() {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colorArr[getColor()];
    }

    background.style.backgroundColor = hexColor;
    text.innerHTML = hexColor;
})
