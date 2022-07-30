colorArr = ["red", "blue", "rgba(245, 20, 145, 0.8)", "#154365"];

let background = document.getElementById("background");
let button = document.querySelector("button");
let text = document.getElementById("text");

function getColor() {
    return Math.floor(Math.random() * 3);
}

button.addEventListener("click", function changeBackgroundColor() {
    background.style.backgroundColor = colorArr[getColor()];
    text.innerHTML = background.style.backgroundColor;
});
