let audioIsPlaying = false;
let selectedMoves = [-1, -1, -1, -1];
let selectedTargets = [-1, -1, -1, -1];
let targetType = ["enemy", "enemy", "enemy", "enemy"];
let players = [playerPeter, playerJustin, playerRaymond, playerDrWinder];

let enemies = [new mrFunky(), new mrFunky(), new mrFunky()];
let myAudio = document.createElement("audio");
myAudio.src = "audio/battle_funky_enemy.mp3";
myAudio.loop = true;

let selectMove = function (user, move) {
  if (move < players[user].skills.length) {
    selectedMoves[user] = move;
    console.log(players[user].name + " will " + players[user].skills[selectedMoves[user]].name + ".");
  } else {
    console.log("Invalid move!");
  }
};

let selectTarget = function (user, target) {
  if (targetType [user] === "player") {
    selectedTargets[user] = target;
    console.log(players[user].name + " -> now targeting " + players[selectedTargets [user]].name);
    updateTargetIcon(user, target);
  } else if (target < enemies.length) {
    selectedTargets[user] = target;
    console.log(players[user].name + " -> now targeting " + enemies[target].name);
    updateTargetIcon(user, target);
  } else {
    console.log("Invalid target!");
  }
};

let toggleTarget = function (user) {
    let toggleButton = document.getElementById("toggle-target-" + (user + 1));
    if (toggleButton) {
        if (targetType [user] === "enemy") {
            targetType [user] = "player";
            toggleButton.innerHTML = "P";
        } else {
            targetType [user] = "enemy";
            toggleButton.innerHTML = "E";
        }
    }
}

let updateTargetIcon = function (user, target) {
  let targetIcon = document.getElementById("target-icon-" + (user + 1));
  targetIcon.style.visibility = "visible";

  if (targetType [user] === "enemy") {
    let iconPositionPercent = 13 + user * 3 + 20 * target;
    targetIcon.style.left = iconPositionPercent + "%";
    targetIcon.style.top = "23%";
  } else {
    let iconPositionPercent = 13 + user * 3 + 20 * target;
    targetIcon.style.left = iconPositionPercent + "%";
    targetIcon.style.top = "68%";
  }
};

let fight = function () {
  for (let i = 0; i < players.length; i++) {
      if (selectedMoves [i] === -1 || selectedTargets [i] === -1) {
          console.log("Commands not given!");
          return;
      }
  }
  if (!audioIsPlaying) {
    audioIsPlaying = true;
    myAudio.play();
  }

  for (let i = 0; i < players.length; i++) {
    if (players [i].health > 0) {
        console.log(players[i].name + " used " + players[i].skills[selectedMoves[i]].name + "!");
        if (targetType [i] === "player") { 
            players[i].skills[selectedMoves[i]].use(players[i], players[selectedTargets[i]]);
        } else {
            players[i].skills[selectedMoves[i]].use(players[i], enemies[selectedTargets[i]]);

        }
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    if (enemies [i].health > 0) {
        enemies[i].ai(players);
    }
  }

  if (allEnemiesDead ()) {
    saveState ();
    setTimeout(function () { window.location.replace('victory.html'); }, 1000);
  }

  if (players [0].health <= 0) {
    setTimeout(function () { window.location.replace('death.html'); }, 1000);
  }

  updateCombatantInfo();
};

let allEnemiesDead = function () {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies [i].health > 0) { return false; }
    }
    return true;
}

let updateCombatantInfo = function () {
  for (let i = 0; i < players.length; i++) {
    let playerHealthText = document.getElementById("party-member-" + (i + 1) + "-hp");
    playerHealthText.innerHTML = "<span style='color: coral'>" + players[i].health + "</span> HP";
  }
  for (let i = 0; i < enemies.length; i++) {
    let enemyHealthText = document.getElementById("enemy-" + (i + 1) + "-hp");
    enemyHealthText.innerHTML = "<span style='color: coral'>" + enemies[i].health + "</span> HP";
  }
};
