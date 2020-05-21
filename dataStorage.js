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

function saveEncounter(enemyIndices) {
    localStorage.setItem("encounter-data", JSON.stringify(enemyIndices));    
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

function getEncounter() {
    let retrievedData = localStorage.getItem("encounter-data");
    if (retrievedData !== null) {
      let gameData = JSON.parse(retrievedData);
      return gameData;
    }  
}