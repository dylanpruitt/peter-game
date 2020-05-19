class Entity {
    constructor (sName, iHealth, iMaxHealth, iAttack, iDefense, iEvasion, iLevel, iExperience, aSkills, itemItem, sImagePath) {
        this.name = sName;
        this.health = iHealth;
        this.maxHealth = iMaxHealth;
        this.attack = iAttack;
        this.defense = iDefense;
        this.evasion = iEvasion;
        this.level = iLevel;
        this.experience = iExperience;
        this.skills = aSkills;
        this.item = itemItem;
        this.statuses = [];
        this.weaknesses = [];
        this.expToNextLevel = [80, 175, 285, 410, 550, 705, 875, 1060, 1260];
        this.imagePath = sImagePath;
        this.ai = this.ai.bind(this);
        this.hasStatus = this.hasStatus.bind(this);
        this.hasWeakness = this.hasWeakness.bind(this);
        this.updateStatuses = this.updateStatuses.bind(this);
    }

    ai (targets) { defaultAI (targets); }

    hasStatus (status) {
        for (let i = 0; i < this.statuses.length; i++) {
            if (this.statuses [i].name === status) {
                return true;
            }
        }
        return false;
    }

    hasWeakness (type) {
        for (let i = 0; i < this.weaknesses.length; i++) {
            if (this.weaknesses [i] === type) {
                return true;
            }
        }
        return false;
    }

    updateStatuses () {
        let newStatuses = [];
        for (let i = 0; i < this.statuses.length; i++) {
            this.statuses [i].effect (this);
            this.statuses [i].turnsLeft--;
            if (this.statuses [i].turnsLeft > 0) {
                newStatuses.push (this.statuses [i]);
            }
        }
        this.statuses.length = 0;
        for (let i = 0; i < newStatuses.length; i++) { this.statuses.push (newStatuses [i]); }
    }
}

let playerPeter = new Entity ("Peter", 6, 6, 1, 0, 15, 1, 0, [attack, provoke, guitarSolo], null, "images/demo-peter-portrait.png");
playerPeter.weaknesses.push ("melee");
let playerJustin = new Entity ("Justin", 9, 9, 3, 1, 32, 1, 0, [attack, charm], null, "images/demo-justin-portrait.png");
let playerRaymond = new Entity ("Raymond", 11, 11, 2, 2, 11, 1, 0, [attack, useItem], new warheadGnome (), "images/demo-raymond-portrait.png");
let playerDrWinder = new Entity ("Dr. Winder", 8, 8, 1, 2, 10, 1, 0, [heal], null, "images/demo-drwinder-portrait.png");

let players = [playerPeter, playerJustin, playerRaymond, playerDrWinder];

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

class mrFunky extends Entity {
    constructor () {
        super ("Mr. Funky",
        24, 24,
        6,
        1,
        15,
        4,
        16,
        [attack],
        null,
        "images/mr-funky.jpg");
        this.weaknesses = ["ice"];
    }

    ai (targets) { 
        let ATTACK = 0;
        let target = Math.floor(Math.random() * targets.length);
        updateBattleLog (this.name + " used " + this.skills [ATTACK].name + "!"); 
        this.skills [ATTACK].use (this, targets [target]);
    }
}

let defaultAI = function (targets) {
    console.log ("needs ai implementation!");
}