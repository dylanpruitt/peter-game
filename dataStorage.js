function saveState() {
    let gameData = {
        players: players,
        enemies: enemies,
    };
    localStorage.setItem("gamedata", JSON.stringify(gameData));
}

function getState() {
    let retrievedData = localStorage.getItem("gamedata");
    if (retrievedData !== null) {
      let gameData = JSON.parse(retrievedData);
      return gameData;
    }
}