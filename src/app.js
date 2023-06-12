/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suites = ["♦", "♥", "♠", "♣"];
  const cardnumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // function randomNum(numbers) {
  //   return Math.floor(Math.random() * numbers.length);
  // }

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  let suite = suites[randomCard(suites)];
  let num = cardnumbers[randomCard(cardnumbers)];
  let top = document.querySelector("#top");
  let number = document.querySelector("#num");
  let bottom = document.querySelector("#bottom");

  // Add a class to the elements representing the heart and diamond suites
  if (suite === "♥" || suite === "♦") {
    top.classList.add("red-suite");
    bottom.classList.add("red-suite");
  } else {
    top.classList.remove("red-suite");
    bottom.classList.remove("red-suite");
  }

  top.innerHTML = suite;
  number.innerHTML = num;
  bottom.innerHTML = suite;
};
