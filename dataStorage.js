function saveBattleState() {
    let gameData = {
        players: players,
        enemies: enemies,
    };
    localStorage.setItem("battle-data", JSON.stringify(gameData));
}

function saveDungeonState() {
    let gameData = {
        player: player,
        dungeon: dungeon,
    };
    localStorage.setItem("dungeon-data", JSON.stringify(gameData));
}

function getBattleState() {
    let retrievedData = localStorage.getItem("battle-data");
    if (retrievedData !== null) {
      let gameData = JSON.parse(retrievedData);
      return gameData;
    }
}

function getDungeonState() {
    let retrievedData = localStorage.getItem("dungeon-data");
    if (retrievedData !== null) {
      let gameData = JSON.parse(retrievedData);
      return gameData;
    }
}