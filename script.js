var _ = require("lodash");

console.log(_);

let array= [1,2,3,4,5,6,7,8,];
console.log("answer:", _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var ranButton = document.createElement("button");
ranButton.appendChild(document.createTextNode("Give me a random color"));
body.appendChild(ranButton);

function setGradient() {

    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("load", setGradient());

color2.addEventListener("load", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

ranButton.addEventListener("click", getColor);

function getColor() {
    var clr1 = getRandColor();
    var clr2 = getRandColor();
    body.style.background = "linear-gradient(to right, " + clr1 + " , " + clr2 + ")";

    css.textContent = body.style.background + ";";
}

function getRandColor() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}