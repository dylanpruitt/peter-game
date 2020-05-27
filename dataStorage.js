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

function saveParty(party) {
    localStorage.setItem("party-data", JSON.stringify(party));    
}

function saveUnselectedMembers(party) {
    localStorage.setItem("member-data", JSON.stringify(party));    
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

function getParty() {
    let retrievedData = localStorage.getItem("party-data");
    if (retrievedData !== null) {
      let gameData = JSON.parse(retrievedData);
      updatePartySkills(gameData);
      updateParty(gameData);
      return gameData;
    }  
}

function getUnselectedMembers() {
    let retrievedData = localStorage.getItem("member-data");
    if (retrievedData !== null) {
      let gameData = JSON.parse(retrievedData);
      updatePartySkills(gameData);
      updateParty(gameData);
      return gameData;
    }  
}

function updatePartySkills(party) {
    for (let i = 0; i < party.length; i++) {
        let tempSkills = [];
        for (let j = 0; j < party [i].skills.length; j++) {
            let index = getSkillIndexFromName(party [i].skills [j].name);
            tempSkills.push (skills [index]); 
        }  
        party [i].skills = tempSkills;
    }
    for (let i = 0; i < party.length; i++) {
        let tempSkills = [];
        for (let j = 0; j < party [i].skillsLearned.length; j++) {
            let index = getSkillIndexFromName(party [i].skillsLearned [j].name);
            tempSkills.push (skills [index]); 
        }  
        party [i].skillsLearned = tempSkills;
    }
}

function updateParty(party) {
    for (let i = 0; i < party.length; i++) {
        Object.assign (party [i], properties(party [i]));
    }
}