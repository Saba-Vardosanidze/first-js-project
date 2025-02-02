const myParagraph = document.querySelector("#GreetingsFarewells");
const myBtnOne = document.querySelector("#helloButton");
const myBtnTWo = document.querySelector("#goodByeButton");
myBtnOne.addEventListener("click", function () {
  myParagraph.textContent = "Welcome to our website";
});
myBtnTWo.addEventListener("click", function () {
  myParagraph.textContent = "Goodbye and thank you.";
});
