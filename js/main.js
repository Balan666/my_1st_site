alert("Hello!")
var buttonElement = document.querySelector("button");
var textElement = document.querySelector("p");

buttonElement.addEventListener("click", changeText, false);

function changeText(e) {
    textElement.innerText = "hello, world!";
}
