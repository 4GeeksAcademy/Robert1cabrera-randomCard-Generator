/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suites = ["♦", "♥", "♠", "♣"];
  const cardnumbers = [
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
  top.innerHTML = suite;
  let number = document.querySelector("#num");
  number.innerHTML = num;
  let bottom = document.querySelector("#bottom");
  bottom.innerHTML = suite;
};
