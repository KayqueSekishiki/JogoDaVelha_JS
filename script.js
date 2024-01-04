let selectedPlayer = document.getElementById("player-selected");
let selectedWinner = document.getElementById("winner-selected");
let squares = document.getElementsByClassName("square");
let player;
let winner;

function choiceSquare(id) {
  let square = document.getElementById(id);

  if (square.innerHTML !== "-") return;

  square.innerText = player;
  square.style.color = "#000000";

  player === "X" ? (player = "O") : (player = "X");
  selectPlayer(player);
  checkWinner();
}

function selectPlayer(value) {
  player = value;
  selectedPlayer.innerHTML = player;
}

function checkWinner() {
  let square1 = document.getElementById(1);
  let square2 = document.getElementById(2);
  let square3 = document.getElementById(3);
  let square4 = document.getElementById(4);
  let square5 = document.getElementById(5);
  let square6 = document.getElementById(6);
  let square7 = document.getElementById(7);
  let square8 = document.getElementById(8);
  let square9 = document.getElementById(9);

  if (checkSequence(square1, square2, square3)) {
    changeSquareBackground(square1, square2, square3);
    winner = square1.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square4, square5, square6)) {
    changeSquareBackground(square4, square5, square6);
    winner = square4.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square7, square8, square9)) {
    changeSquareBackground(square7, square8, square9);
    winner = square7.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square1, square4, square7)) {
    changeSquareBackground(square1, square4, square7);
    winner = square1.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square5, square5, square8)) {
    changeSquareBackground(square2, square5, square5);
    winner = square2.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square3, square6, square9)) {
    changeSquareBackground(square3, square6, square9);
    winner = square3.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square1, square5, square9)) {
    changeSquareBackground(square1, square5, square9);
    winner = square1.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }

  if (checkSequence(square3, square5, square7)) {
    changeSquareBackground(square3, square5, square7);
    winner = square3.innerHTML;
    selectedWinner.innerHTML = winner;
    return;
  }
}

function checkSequence(square1, square2, square3) {
  let isEqual = false;

  if (
    square1.innerHTML !== "-" &&
    square1.innerHTML === square2.innerHTML &&
    square2.innerHTML === square3.innerHTML
  ) {
    isEqual = true;
  }

  return isEqual;
}

function changeSquareBackground(square1, square2, square3) {
  square1.style.background = "#00f00f";
  square2.style.background = "#00f00f";
  square3.style.background = "#00f00f";
}

function restatGame() {
  selectPlayer("X");
  winner = "";
  selectedWinner.innerHTML = "";

  for (let i = 1; i <= 9; i++) {
    let square = document.getElementById(i);
    square.style.background = "#eeeeee";
    square.style.color = "#eeeeee";
    square.innerText = "";
  }
}

selectPlayer("X");
