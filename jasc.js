var players = [];
var numPlayers = 0;
var gameStarted = false;
/**
 * Create a new player
 */
function add () { 
  if (players.size >= 4)
    return;

  if (txtNewPlayer.value == "")
    return;

  var player = new Object();
  player.name = txtNewPlayer.value;
  player.totalScore = 0;
  player.curScore = 0;
  numPlayers++;
  players[numPlayers] = player;
  enablePlayer(numPlayers);
  txtNewPlayer.value = "";
}

function enablePlayer(i) {
  var player = players[i];
  var playerSection = document.getElementById("player" + i);
  console.log(player.name);
  document.getElementById("playerName" + i).innerHTML = player.name;
  playerSection.style.display = "block";
}

function clearPlayers() {
  players = [];
  numPlayers = 0;
  for (i = 1; i <= 4; i++) {
    document.getElementById("player" + i).style.display = "none";
    document.getElementById("playerControls" + i).style.display = "block";
  }
}

function beginGame() {
  if (numPlayers < 2) {
    alert("You must add at least 2 players");
    return;
  }

  //make controls invisible except for player 1
  for (i = 2; i <= 4; i++) {
    document.getElementById("playerControls" + i).style.display = "none";
  }
  gameStarted = true;
}

function roll(i) {
  if (!gameStarted) {
    alert("Game has not been started.")
    return;
  }
  diceShake.play();
  var faceValue = Math.floor(Math.random() * 6);
  dice.innerHTML = "&#x268" + faceValue + ";";
  dice.style.display = "block";

  var rolled = faceValue + 1;
  if (rolled == 1) {
    failShake.play();
  }
  else {
    players[i].curScore += (faceValue + 1);
    document.getElementById("currentScore" + i).innerHTML = players[i].curScore;
  }
}
