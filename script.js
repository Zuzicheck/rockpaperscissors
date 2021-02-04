let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let win = document.querySelector("#win");
let lose = document.querySelector("#lose");
let draw = document.querySelector("#draw");

let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

let player1_rock = document.getElementById("player1").classList.contains("rock");
let player1_paper = document.getElementById("player1").classList.contains("paper");
let player1_scissors = document.getElementById("player1").classList.contains("scissors");

let player2_rock = document.getElementById("player2").classList.contains("rock");
let player2_paper = document.getElementById("player2").classList.contains("paper");
let player2_scissors = document.getElementById("player2").classList.contains("scissors");


window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("start");
    userStart();
}

function userStart() {
    console.log("user start")

    rock.addEventListener("click", userChoice);
    paper.addEventListener("click", userChoice);
    scissors.addEventListener("click", userChoice);
}

function userChoice() {
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");

    const randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);

    player1.classList.add("shake");
    player2.classList.add("shake");

    if (this.classList.contains("rock")) {
        player1.addEventListener("animationend", function () {
            player1.classList.remove("shake");
            player1.classList.remove("paper");
            player1.classList.remove("scissors");
            player1.classList.remove("rock");
            player1.classList.add("rock");
        });
      } else if (this.classList.contains("paper")) {
        player1.addEventListener("animationend", function () {
            player1.classList.remove("shake");
            player1.classList.remove("paper");
            player1.classList.remove("scissors");
            player1.classList.remove("rock");
            player1.classList.add("paper");
        });
      } else if (this.classList.contains("scissors")) {
        player1.addEventListener("animationend", function () {
            player1.classList.remove("shake");
            player1.classList.remove("paper");
            player1.classList.remove("scissors");
            player1.classList.remove("rock");
            player1.classList.add("scissors");
        });
    }
    computerChoice(randomNum);
}

function computerChoice(randomNum) {
    //show computer choice
  if (randomNum == "1") {
    player2.addEventListener("animationend", function () {
        player2.classList.remove("shake");
        player2.classList.remove("paper");
        player2.classList.remove("scissors");
        player2.classList.remove("rock");
        player2.classList.add("rock");
    });
  } else if (randomNum == "2") {
    player2.addEventListener("animationend", function () {
        player2.classList.remove("shake");
        player2.classList.remove("paper");
        player2.classList.remove("scissors");
        player2.classList.remove("rock");
        player2.classList.add("paper");
    });
  } else if (randomNum == "3") {
    player2.addEventListener("animationend", function () {
        player2.classList.remove("shake");
        player2.classList.remove("paper");
        player2.classList.remove("scissors");
        player2.classList.remove("rock");
        player2.classList.add("scissors");
    });
  }
  determineWinner();
}

function determineWinner() {
    if (player1_rock && player2_rock) {
        showDraw();
      } else if (player1_rock && player2_paper) {
        showLose();
      } else if (player1_rock && player2_scissors) {
        showWin();
      } else if (player1_paper && player2_rock) {
        showWin();
      } else if (player1_paper && player2_paper) {
        showDraw();
      } else if (player1_paper && player2_scissors) {
        showLose();
      } else if (player1_scissors && player2_rock) {
        showLose();
      } else if (player1_scissors && player2_paper) {
        showWin();
      } else if (player1_scissors && player2_scissors) {
        showDraw();
      }
}


function showWin() {
    console.log("win");
    win.classList.remove("hidden");
  }
  
  function showLose() {
    console.log("lose");
    lose.classList.remove("hidden");
  }
  
  function showDraw() {
    console.log("draw");
    draw.classList.remove("hidden");
  }