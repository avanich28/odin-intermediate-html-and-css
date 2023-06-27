"use strict";

const name = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

// Using Form Controls Outside of Forms
greetMeButton.addEventListener("click", (event) => {
  greetingOutput.innerText = `Hello ${name.value}`;
});
