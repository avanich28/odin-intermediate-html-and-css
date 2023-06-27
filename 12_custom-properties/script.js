"use strict";

/* Creating Themes with Customs Properties */
function setTheme() {
  //   e.preventDefault();
  // Don't need to put this bcs button tag is not in the form tag

  // HTML element
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-name").textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);

/* Values in Javascript (Custom properties) */

const element = document.querySelector(".element");

// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", "jsVar" + 4);
