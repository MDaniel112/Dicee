var dice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]

function getRandomNumber(){
  return randomNr1 = Math.floor(Math.random() * (6 - 1) + 1);
}

function changeText() {

}

function loadDice(){
  var d1 = getRandomNumber();
  var d2 = getRandomNumber();
  document.querySelector(".img1").src = "images/dice" + d1 + ".png";
  document.querySelector(".img2").src = "images/dice" + d2 + ".png";

  if(d1 > d2) {
    document.querySelector("#winner").innerText = "Player 1 Wins";
  } else {
    if(d1 < d2) {
      document.querySelector("#winner").innerText = "Player 2 Wins";
    } else {
      document.querySelector("#winner").innerText = "Tie";
    }
  }
}
