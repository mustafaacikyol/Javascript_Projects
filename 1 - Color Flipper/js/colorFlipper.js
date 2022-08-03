colorArr = ["red", "blue", "rgba(245, 20, 145, 0.8)", "#154365"];

let background = document.getElementById("background");
let button = document.querySelector("button");
let text = document.getElementById("text");

function getColor() {
    return Math.floor(Math.random() * (colorArr.length - 1));
}

button.addEventListener("click", function changeBackgroundColor() {
    let indexArray = getColor();
    background.style.backgroundColor = colorArr[indexArray];
    text.innerHTML = colorArr[indexArray];
});
