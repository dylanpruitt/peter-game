let audioIsPlaying = false;
let enemies = [];

let myAudio = document.createElement("audio");
myAudio.src = "audio/battle_funky_enemy.mp3";
myAudio.loop = true;

let selectMove = function (user, move) {
  if (move < players[user].skills.length) {
    players[user].selectedMove = move;
    updateBattleLog(players[user].name + " will " + players[user].skills[move].name + ".");
  } else {
    console.log("Invalid move!");
  }
};

let selectTarget = function (user, target) {
  if (players[user].targetType === "player") {
    players[user].selectedTarget = target;
    updateBattleLog(players[user].name + " -> now targeting " + players[target].name);
    updateTargetIcon(user, target);
  } else if (target < enemies.length) {
    players[user].selectedTarget = target;
    updateBattleLog(players[user].name + " -> now targeting " + enemies[target].name);
    updateTargetIcon(user, target);
  } else {
    updateBattleLog("Invalid target!");
  }
};

let toggleTarget = function (user) {
    let toggleButton = document.getElementById("toggle-target-" + (user + 1));
    if (toggleButton) {
        if (players[user].targetType === "enemy") {
            players[user].targetType = "player";
            toggleButton.innerHTML = "P";
        } else {
            players[user].targetType = "enemy";
            toggleButton.innerHTML = "E";
        }
    }
}

let updateTargetIcon = function (user, target) {
  let targetIcon = document.getElementById("target-icon-" + (user + 1));
  targetIcon.style.visibility = "visible";

  if (players[user].targetType === "enemy") {
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
      if (players[i].selectedMove === -1 || players[i].selectTarget === -1) {
          updateBattleLog("Commands not given!");
          return;
      }
  }
  if (!audioIsPlaying) {
    audioIsPlaying = true;
    myAudio.play();
  }

  let battleLog = document.getElementById("battle-log");
  battleLog.appendChild(document.createElement("hr"));

  for (let i = 0; i < enemies.length; i++) {
    if (enemies [i].health > 0) {
        enemies [i].updateStatuses ();
    }
  }

  for (let i = 0; i < players.length; i++) {
    if (players [i].health > 0) {
        let selectedMove = players [i].selectedMove, selectedTarget = players [i].selectedTarget;
        updateBattleLog(players[i].name + " used " + players[i].skills[selectedMove].name + "!");
        if (players [i].targetType === "player") { 
            players[i].skills[selectedMove].use(players[i], players[selectedTarget]);
        } else {
            players[i].skills[selectedMove].use(players[i], enemies[selectedTarget]);

        }
    } else {
        updateBattleLog(players[i].name + "'s still dead.");
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    if (enemies [i].health > 0) {
        if (enemies [i].hasStatus ("Charm")) {
            updateBattleLog(enemies [i].name + " is charmed!");
        } else {
            enemies[i].ai(players);
        }
    }
  }

  for (let i = 0; i < players.length; i++) {
    if (players [i].health > 0) {
        players [i].updateStatuses ();
    }
  }

  if (allEnemiesDead ()) {
    saveBattleState ();
    clearPlayerModifiers(playerCopy);
    saveParty (players);
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

let clearPlayerModifiers = function (playerCopy) {
    for (let i = 0; i < players.length; i++) {
      players [i].attack = playerCopy [i].attack;
      players [i].defense = playerCopy [i].defense;
      players [i].evasion = playerCopy [i].evasion;
    } 
}

let updateCombatantInfo = function () {
  for (let i = 0; i < players.length; i++) {
    let playerHealthText = document.getElementById("party-member-" + (i + 1) + "-hp");
    playerHealthText.innerHTML = "<span style='color: coral'>" + players[i].health + "</span> HP";
    playerHealthText.title = players [i].maxHealth + " max HP";

    let playerNameText = document.getElementById("party-member-" + (i + 1) + "-name");
    let statusesString = "statuses: ";
    for (let j = 0; j < players [i].statuses.length; j++) {
        statusesString += players [i].statuses [j].name + " (" + players [i].statuses [j].turnsLeft + ")";
        if (j < (players [i].statuses.length - 1)) { statusesString += ", "; }
    }
    playerNameText.title = statusesString;
  }
  for (let i = 0; i < enemies.length; i++) {
    let enemyHealthText = document.getElementById("enemy-" + (i + 1) + "-hp");
    enemyHealthText.innerHTML = "<span style='color: coral'>" + enemies[i].health + "</span> HP";
    enemyHealthText.title = enemies [i].maxHealth + " max HP";

    let enemyNameText = document.getElementById("enemy-" + (i + 1) + "-name");
    let statusesString = "statuses: ";
    for (let j = 0; j < enemies [i].statuses.length; j++) {
        statusesString += enemies [i].statuses [j].name + " (" + enemies [i].statuses [j].turnsLeft + ")";
        if (j < (enemies [i].statuses.length - 1)) { statusesString += ", "; }
    }
    enemyNameText.title = statusesString;
  }
};