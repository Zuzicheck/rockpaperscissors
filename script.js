start();

function start(){
    console.log("start");
    getUserSelection();
}

function getUserSelection() {
    console.log("user selection")
    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    console.log("computer choice");
    showAnimation();
}

function showAnimation() {
    console.log("animation");
    determineWinner();
}

let winner = "";

function determineWinner() {
    console.log("winner");
    // faked so player alwas wins!
    winner = "player";

    //if player won
    showWin();
}

function showWin() {
    console.log("win");
    //show winner
}

function showLose() {
    console.log("lose");
    //show loser
}

function showDraw() {
    console.log("draw");
    //show draw
}