let player;

let selectedPlayer = document.getElementById("player-selected");

function choiceSquare(id) {
  let square = document.getElementById(id);
  square.innerText = player;
  square.style.color = "#000000";
}

function selectPlayer(value) {
  player = value;
  selectedPlayer.innerHTML = player;
}

selectPlayer("X");
