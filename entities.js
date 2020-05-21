const properties = (entity) => ({
    hasStatus: (status) => {
        for (let i = 0; i < entity.statuses.length; i++) {
            if (entity.statuses [i].name === status) {
                return true;
            }
        }
        return false;
    },
    hasWeakness: (type) => {
        for (let i = 0; i < entity.weaknesses.length; i++) {
            if (entity.weaknesses [i] === type) {
                return true;
            }
        }
        return false;
    },
    updateStatuses: () => {
        let newStatuses = [];
        for (let i = 0; i < entity.statuses.length; i++) {
            entity.statuses [i].effect (entity);
            entity.statuses [i].turnsLeft--;
            if (entity.statuses [i].turnsLeft > 0) {
                newStatuses.push (entity.statuses [i]);
            }
        }
        entity.statuses.length = 0;
        for (let i = 0; i < newStatuses.length; i++) { entity.statuses.push (newStatuses [i]); }
    }
});

let playerPeter = () => {
    let entity = {
        name: "Peter",
        health: 12,
        maxHealth: 12,
        attack: 1,
        defense: 0,
        evasion: 15,
        level: 1,
        experience: 0,
        skills: [attack()],
        statuses: [],
        weaknesses: ["melee"],
        item: null,
        imagePath: "images/demo-peter-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy"
    }

    return Object.assign (entity, properties(entity));
}
let playerJustin = () => {
    let entity = {
        name: "Justin",
        health: 17,
        maxHealth: 17,
        attack: 4,
        defense: 1,
        evasion: 32,
        level: 1,
        experience: 0,
        skills: [attack()],
        statuses: [],
        weaknesses: [],
        item: null,
        imagePath: "images/demo-justin-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy"
    }

    return Object.assign (entity, properties(entity));
}
let playerRaymond = () => {
    let entity = {
        name: "Raymond",
        health: 22,
        maxHealth: 22,
        attack: 3,
        defense: 2,
        evasion: 11,
        level: 1,
        experience: 0,
        skills: [attack()],
        statuses: [],
        weaknesses: [],
        item: null,
        imagePath: "images/demo-raymond-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy"
    }

    return Object.assign (entity, properties(entity));
}
let playerHunter = () => {
    let entity = {
        name: "Hunter",
        health: 19,
        maxHealth: 19,
        attack: 2,
        defense: 2,
        evasion: 22,
        level: 1,
        experience: 0,
        skills: [attack()],
        statuses: [],
        weaknesses: [],
        item: null,
        imagePath: "images/demo-hunter-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy"
    }

    return Object.assign (entity, properties(entity));
}

let players = [playerPeter(), playerJustin(), playerRaymond(), playerHunter()];

for (let i = 0; i < players.length; i++) {
    players [i] = Object.assign (players [i], properties(players [i]));
}

let updatePlayerInfo = function (gameData) {
    for (let i = 0; i < players.length; i++) {
        players [i].name = gameData [i].name;
        players [i].health = gameData [i].health;
        players [i].maxHealth = gameData [i].maxHealth;
        players [i].attack = gameData [i].attack;
        players [i].defense = gameData [i].defense;
        players [i].evasion = gameData [i].evasion;
        players [i].level = gameData [i].level;
        players [i].experience = gameData [i].experience;
        players [i].weaknesses = gameData [i].weaknesses;
    }
}

let bikerGnome = () => {
    let entity = {
        name: "Biker Gnome",
        health: 7,
        maxHealth: 7,
        attack: 3,
        defense: 2,
        evasion: 5,
        level: 1,
        experience: 14,
        skills: [attack(), fire()],
        statuses: [],
        weaknesses: ["ice"],
        imagePath: "images/biker-gnome.jpg",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        }
    }

    return Object.assign (entity, properties(entity));
}

let bear = () => {
    let entity = {
        name: "Bear",
        health: 14,
        maxHealth: 14,
        attack: 4,
        defense: 1,
        evasion: 5,
        level: 1,
        experience: 14,
        skills: [attack()],
        statuses: [],
        weaknesses: ["melee", "fire"],
        imagePath: "images/bear.jpg",
        ai: (targets) => { 
            let ATTACK = 0;
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [ATTACK].name + "!"); 
            entity.skills [ATTACK].use (entity, targets [target]);
        }
    }

    return Object.assign (entity, properties(entity));
}

let dungeonEnemies = [bikerGnome, bear];
