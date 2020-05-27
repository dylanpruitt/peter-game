let expToNextLevel = [80, 175, 285, 410, 550, 705, 875, 1060, 1260];

let levelUp = document.createElement("audio");
levelUp.src = "audio/level_up.mp3";
levelUp.loop = true;

let promotePlayer = function (player) {
    let levelUpStrings = ["Gnarly! ", "Radical! ", "Tubular! ", "Totally Based! ", "Awesome! "];
    let levelUpString = levelUpStrings[Math.floor(Math.random() * levelUpStrings.length)];

    levelUp.play();
    player.level++;
    let levelUpText = document.createElement ("p");
    levelUpText.innerHTML = levelUpString + player.name + " has been promoted to level <span style='color: coral'>"
         + player.level + "</span>!";
    document.body.appendChild (levelUpText); 

    if (player.name === "Peter") {
        player.maxHealth += Math.floor (Math.random() * 6) + 5;
        player.health = player.maxHealth;
        player.attack += Math.floor (Math.random() * 3) + 2;
        player.defense += Math.floor (Math.random() * 2) + 1;
        player.evasion += Math.floor (Math.random() * 5) + 1;
        updatePeterSkills (player);
    } else if (player.name === "Raymond") {
        player.maxHealth += Math.floor (Math.random() * 7) + 3;
        player.health = player.maxHealth;
        player.attack += Math.floor (Math.random() * 4) + 1;
        player.defense += Math.floor (Math.random() * 3) + 1;
        player.evasion += Math.floor (Math.random() * 4) + 1;
        updateRaymondSkills (player);
    } else if (player.name === "Hunter") {
        player.maxHealth += Math.floor (Math.random() * 6) + 3;
        player.health = player.maxHealth;
        player.attack += Math.floor (Math.random() * 4) + 1;
        player.defense += Math.floor (Math.random() * 2) + 1;
        player.evasion += Math.floor (Math.random() * 3) + 1;
        updateHunterSkills (player);
    } else if (player.name === "Abby") {
        player.maxHealth += Math.floor (Math.random() * 4) + 3;
        player.health = player.maxHealth;
        player.attack += Math.floor (Math.random() * 3) + 1;
        player.defense += Math.floor (Math.random() * 2);
        player.evasion += Math.floor (Math.random() * 4) + 1;
        updateAbbySkills (player);
    } else if (player.name === "Joe") {
        player.maxHealth += Math.floor (Math.random() * 3) + 5;
        player.health = player.maxHealth;
        player.attack += Math.floor (Math.random() * 2) + 1;
        player.defense += Math.floor (Math.random() * 2) + 1;
        player.evasion += Math.floor (Math.random() * 3) + 1;
        updateJoeSkills (player);
    } else if (player.name === "Justin") {
        player.maxHealth += Math.floor (Math.random() * 6);
        player.health = player.maxHealth;
        player.attack += Math.floor (Math.random() * 2) + 2;
        player.defense += Math.floor (Math.random() * 2);
        player.evasion += Math.floor (Math.random() * 2) + 4;
        updateJustinSkills (player);
    }
}

let updatePeterSkills = function (player) {
    let hasLearnedSkill = false;
    if (player.level === 2) {
        player.skillsLearned.push (provoke ());
        hasLearnedSkill = true;
    }
    if (player.level === 3) {
        player.skillsLearned.push (lightning2 ());
        hasLearnedSkill = true;
    }
    if (player.level === 4) {
        player.skillsLearned.push (resistIce());
        hasLearnedSkill = true;
    }
    if (player.level === 5) {
        player.skillsLearned.push (trickCard());
        hasLearnedSkill = true;
    }
    if (player.level === 7) {
        player.skillsLearned.push (backstab());
        hasLearnedSkill = true;
    }
    if (hasLearnedSkill) {
        let skillAwardText = document.createElement ("p");
        skillAwardText.innerHTML = player.name + " has learned a new skill!";
        document.body.appendChild (skillAwardText); 
    }
}
let updateRaymondSkills = function (player) {
    let hasLearnedSkill = false;
    if (player.level === 2) {
        player.skillsLearned.push (gravity ());
        hasLearnedSkill = true;
    }
    if (player.level === 3) {
        player.skillsLearned.push (holy ());
        hasLearnedSkill = true;
    }
    if (player.level === 4) {
        player.skillsLearned.push (boostDefense());
        hasLearnedSkill = true;
    }
    if (player.level === 5) {
        player.skillsLearned.push (resistFire());
        hasLearnedSkill = true;
    }
    if (player.level === 6) {
        player.skillsLearned.push (resistHoly());
        hasLearnedSkill = true;
    }
    if (player.level === 7) {
        player.skillsLearned.push (bustaMove());
        hasLearnedSkill = true;
    }
    if (hasLearnedSkill) {
        let skillAwardText = document.createElement ("p");
        skillAwardText.innerHTML = player.name + " has learned a new skill!";
        document.body.appendChild (skillAwardText);
    }
}
let updateHunterSkills = function (player) {
    let hasLearnedSkill = false;
    if (player.level === 2) {
        player.skillsLearned.push (caffeine ());
        hasLearnedSkill = true;
    }
    if (player.level === 3) {
        player.skillsLearned.push (boostDefense ());
        hasLearnedSkill = true;
    }
    if (player.level === 4) {
        player.skillsLearned.push (resistIce());
        hasLearnedSkill = true;
    }
    if (player.level === 5) {
        player.skillsLearned.push (resistHoly());
        hasLearnedSkill = true;
    }
    if (hasLearnedSkill) {
        let skillAwardText = document.createElement ("p");
        skillAwardText.innerHTML = player.name + " has learned a new skill!";
        document.body.appendChild (skillAwardText);
    }
}
let updateAbbySkills = function (player) {
    let hasLearnedSkill = false;
    if (player.level === 2) {
        player.skillsLearned.push (fire ());
        hasLearnedSkill = true;
    }
    if (player.level === 3) {
        player.skillsLearned.push (decharm ());
        hasLearnedSkill = true;
    }
    if (player.level === 4) {
        player.skillsLearned.push (resistLightning());
        hasLearnedSkill = true;
    }
    if (player.level === 5) {
        player.skillsLearned.push (slowDown());
        hasLearnedSkill = true;
    }
    if (player.level === 6) {
        player.skillsLearned.push (holy());
        hasLearnedSkill = true;
    }
    if (hasLearnedSkill) {
        let skillAwardText = document.createElement ("p");
        skillAwardText.innerHTML = player.name + " has learned a new skill!";
        document.body.appendChild (skillAwardText); 
    }
}
let updateJoeSkills = function (player) {
    let hasLearnedSkill = false;
    if (player.level === 2) {
        player.skillsLearned.push (lightning ());
        hasLearnedSkill = true;
    }
    if (player.level === 3) {
        player.skillsLearned.push (boostDefense ());
        hasLearnedSkill = true;
    }
    if (player.level === 4) {
        player.skillsLearned.push (barrage());
        hasLearnedSkill = true;
    }
    if (player.level === 5) {
        player.skillsLearned.push (resistLightning());
        hasLearnedSkill = true;
    }
    if (player.level === 6) {
        player.skillsLearned.push (resistHoly());
        hasLearnedSkill = true;
    }
    if (hasLearnedSkill) {
        let skillAwardText = document.createElement ("p");
        skillAwardText.innerHTML = player.name + " has learned a new skill!";
        document.body.appendChild (skillAwardText); 
    }
}
let updateJustinSkills = function (player) {
    let hasLearnedSkill = false;
    if (player.level === 2) {
        player.skillsLearned.push (charm ());
        hasLearnedSkill = true;
    }
    if (player.level === 3) {
        player.skillsLearned.push (boostAttack ());
        hasLearnedSkill = true;
    }
    if (player.level === 4) {
        player.skillsLearned.push (resistFire());
        hasLearnedSkill = true;
    }
    if (player.level === 5) {
        player.skillsLearned.push (resistIce());
        hasLearnedSkill = true;
    }
    if (player.level === 6) {
        player.skillsLearned.push (resistHoly());
        hasLearnedSkill = true;
    }
    if (hasLearnedSkill) {
        let skillAwardText = document.createElement ("p");
        skillAwardText.innerHTML = player.name + " has learned a new skill!";
        document.body.appendChild (skillAwardText); 
    }
}

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
    hasResistance: (type) => {
        for (let i = 0; i < entity.resistances.length; i++) {
            if (entity.resistances [i] === type) {
                return true;
            }
        }
        return false;
    },
    updateStatuses: () => {
        let newStatuses = [];
        for (let i = 0; i < entity.statuses.length; i++) {
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
        defense: 1,
        evasion: 20,
        level: 1,
        experience: 0,
        skills: [attack()],
        skillsLearned: [attack()],
        statuses: [],
        weaknesses: ["melee"],
        resistances: ["holy"],
        item: null,
        imagePath: "images/demo-peter-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy",
        bossesDefeated: 0,
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
        skillsLearned: [attack()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["lightning"],
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
        skills: [fire()],
        skillsLearned: [fire()],
        statuses: [],
        weaknesses: ["ice"],
        resistances: ["fire"],
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
        skillsLearned: [attack()],
        statuses: [],
        weaknesses: ["lightning"],
        resistances: ["ice"],
        item: null,
        imagePath: "images/demo-hunter-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy"
    }

    return Object.assign (entity, properties(entity));
}

let playerJoe = () => {
    let entity = {
        name: "Joe",
        health: 16,
        maxHealth: 16,
        attack: 3,
        defense: 3,
        evasion: 12,
        level: 1,
        experience: 0,
        skills: [attack()],
        skillsLearned: [attack()],
        statuses: [],
        weaknesses: ["lightning"],
        resistances: ["ice"],
        item: null,
        imagePath: "images/demo-joe-portrait.png",
        selectedMove: -1,
        selectedTarget: -1,
        targetType: "enemy"
    }

    return Object.assign (entity, properties(entity));
}

let playerAbby = () => {
    let entity = {
        name: "Abby",
        health: 15,
        maxHealth: 15,
        attack: 3,
        defense: 1,
        evasion: 26,
        level: 1,
        experience: 0,
        skills: [ice()],
        skillsLearned: [ice()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["lightning"],
        item: null,
        imagePath: "images/demo-abby-portrait.png",
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

// FLOORS 1 - 4

let bikerGnome = () => {
    let entity = {
        name: "Biker Gnome",
        health: 7,
        maxHealth: 7,
        attack: 3,
        defense: 2,
        evasion: 5,
        level: 1,
        experience: 16,
        skills: [attack(), fire()],
        statuses: [],
        weaknesses: ["ice"],
        resistances: ["fire"],
        imagePath: "images/biker-gnome.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
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
        experience: 16,
        skills: [attack()],
        statuses: [],
        weaknesses: ["melee", "fire"],
        resistances: ["ice"],
        imagePath: "images/bear.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let ATTACK = 0;
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [ATTACK].name + "!"); 
            entity.skills [ATTACK].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let taxCollector = () => {
    let entity = {
        name: "Tax Collector",
        health: 50,
        maxHealth: 50,
        attack: 8,
        defense: 4,
        evasion: 35,
        level: 1,
        experience: 48,
        skills: [fire(), ice(), lightning()],
        statuses: [],
        weaknesses: ["lightning"],
        resistances: ["ice"],
        imagePath: "images/tax-collector.png",
        theme: "encounter_gman.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);            
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}

// FLOORS 5 - 10

let sentry = () => {
    let entity = {
        name: "Sentry",
        health: 33,
        maxHealth: 33,
        attack: 5,
        defense: 4,
        evasion: 10,
        level: 2,
        experience: 18,
        skills: [attack(), lightning(), slowDown()],
        statuses: [],
        weaknesses: ["ice", "gravity"],
        resistances: ["fire", "lightning", "melee"],
        imagePath: "images/sentry.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let shadow = () => {
    let entity = {
        name: "Shadow",
        health: 10,
        maxHealth: 10,
        attack: 7,
        defense: 2,
        evasion: 55,
        level: 2,
        experience: 18,
        skills: [ice(), fire()],
        statuses: [],
        weaknesses: ["lightning"],
        resistances: ["melee"],
        imagePath: "images/shadow.png",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let onion = () => {
    let entity = {
        name: "Onion",
        health: 24,
        maxHealth: 24,
        attack: 6,
        defense: 3,
        evasion: 5,
        level: 2,
        experience: 18,
        skills: [attack(), charm()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["lightning"],
        imagePath: "images/onion.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let mrFunky = () => {
    let entity = {
        name: "Mr. Funky",
        health: 52,
        maxHealth: 52,
        attack: 17,
        defense: 7,
        evasion: 45,
        level: 3,
        experience: 30,
        skills: [barrage(), charm()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["lightning", "holy", "gravity"],
        imagePath: "images/mr-funky.jpg",
        theme: "encounter_funky_enemy.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let backupDancer = () => {
    let entity = {
        name: "Backup Dancer",
        health: 27,
        maxHealth: 27,
        attack: 8,
        defense: 2,
        evasion: 45,
        level: 4,
        experience: 30,
        skills: [barrage(), charm()],
        statuses: [],
        weaknesses: ["fire", "charm"],
        resistances: ["lightning"],
        imagePath: "images/mr-funky.jpg",
        theme: "encounter_funky_enemy.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let guardian = () => {
    let entity = {
        name: "Guardian",
        health: 100,
        maxHealth: 100,
        attack: 16,
        defense: 5,
        evasion: 14,
        level: 3,
        experience: 56,
        skills: [boostAttack(), barrage(), lightning2()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "lightning", "charm"],
        imagePath: "images/guardian.jpg",
        theme: "encounter_ancient_being.mp3",
        ai: (targets) => { 
            let BOOST_ATTACK = 0;
            let selectedMove = Math.floor(Math.random() * (entity.skills.length - 1)) + 1;

            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
            updateBattleLog (entity.name + " is becoming stronger!");            
            entity.skills [BOOST_ATTACK].use (entity, entity);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}

// FLOORS 11 - 13

let sparkWizard = () => {
    let entity = {
        name: "Spark Wizard",
        health: 37,
        maxHealth: 37,
        attack: 14,
        defense: 4,
        evasion: 5,
        level: 4,
        experience: 22,
        skills: [lightning2()],
        statuses: [],
        weaknesses: ["ice"],
        resistances: ["lightning"],
        imagePath: "images/wizard.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let frostWizard = () => {
    let entity = {
        name: "Frost Wizard",
        health: 37,
        maxHealth: 37,
        attack: 14,
        defense: 4,
        evasion: 5,
        level: 4,
        experience: 22,
        skills: [ice2()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["ice"],
        imagePath: "images/wizard.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let fireWizard = () => {
    let entity = {
        name: "Fire Wizard",
        health: 37,
        maxHealth: 37,
        attack: 14,
        defense: 4,
        evasion: 5,
        level: 4,
        experience: 22,
        skills: [fire2()],
        statuses: [],
        weaknesses: ["lightning"],
        resistances: ["fire"],
        imagePath: "images/wizard.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let enforcer = () => {
    let entity = {
        name: "Enforcer",
        health: 144,
        maxHealth: 144,
        attack: 16,
        defense: 5,
        evasion: 20,
        level: 3,
        experience: 56,
        turn: 1,
        skills: [caffeine(), barrage(), ice2()],
        statuses: [],
        weaknesses: ["ice"],
        resistances: ["gravity", "lightning", "charm"],
        imagePath: "images/enforcer.jpg",
        theme: "encounter_gman.mp3",
        ai: (targets) => { 
            let CAFFEINE = 0;

            if (turn < 3) {
                updateBattleLog (entity.name + " used Caffeine!");            
                entity.skills [CAFFEINE].use (entity, entity);
            } else {
                let selectedMove = Math.floor(Math.random() * (entity.skills.length - 1)) + 1;
                let target = Math.floor(Math.random() * targets.length);
                updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
                entity.skills [selectedMove].use (entity, targets [target]);
            }

            turn++;
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}

// FLOORS 14 - 16

let manFace = () => {
    let entity = {
        name: "Man Face",
        health: 66,
        maxHealth: 66,
        attack: 18,
        defense: 11,
        evasion: 20,
        level: 4,
        experience: 60,
        skills: [barrage(), charm()],
        statuses: [],
        weaknesses: ["holy", "fire"],
        resistances: ["ice"],
        imagePath: "images/manface.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let chadHeretic = () => {
    let entity = {
        name: "Chad Heretic",
        health: 90,
        maxHealth: 90,
        attack: 15,
        defense: 14,
        evasion: 5,
        level: 5,
        experience: 80,
        skills: [barrage(), slowDown()],
        statuses: [],
        weaknesses: ["holy"],
        resistances: ["melee"],
        imagePath: "images/chad-heretic.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let selectedMove = Math.floor(Math.random() * 2);
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}
let policeOfficer = () => {
    let entity = {
        name: "Police Officer",
        health: 50,
        maxHealth: 50,
        attack: 19,
        defense: 4,
        evasion: 20,
        level: 5,
        experience: 99,
        skills: [barrage(), holy(), factsAndLogic()],
        statuses: [],
        weaknesses: ["lightning"],
        resistances: ["ice"],
        imagePath: "images/demo-peter-portrait.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let selectedMove = Math.floor(Math.random() * 2);
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}
let theFather = () => {
    let entity = {
        name: "The Father",
        health: 80,
        maxHealth: 80,
        attack: 16,
        defense: 11,
        evasion: 20,
        level: 5,
        experience: 99,
        skills: [holy(), fire2()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "holy", "charm", "ice"],
        imagePath: "images/trinity-the-father.jpg",
        theme: "encounter_ancient_being.mp3",
        ai: (targets) => { 
            let selectedMove = Math.floor(Math.random() * 2);
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}
let theSon = () => {
    let entity = {
        name: "The Son",
        health: 99,
        maxHealth: 99,
        attack: 19,
        defense: 7,
        evasion: 20,
        level: 5,
        experience: 99,
        skills: [holy(), barrage(), ice2()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "lightning", "holy", "charm"],
        imagePath: "images/trinity-the-son.jpg",
        theme: "encounter_ancient_being.mp3",
        ai: (targets) => { 
            let selectedMove = Math.floor(Math.random() * 3);
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}
let theSpirit = () => {
    let entity = {
        name: "The Holy Spirit",
        health: 84,
        maxHealth: 84,
        attack: 16,
        defense: 15,
        evasion: 30,
        level: 3,
        experience: 56,
        skills: [holy(), bustaMove()],
        statuses: [],
        weaknesses: ["charm"],
        resistances: ["gravity", "lightning"],
        imagePath: "images/trinity-the-holy-spirit.jpg",
        theme: "encounter_ancient_being.mp3",
        ai: (targets) => { 
            let selectedMove = Math.floor(Math.random() * 2);
            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}

// FLOORS 17 - 20

let goose = () => {
    let entity = {
        name: "Goose",
        health: 77,
        maxHealth: 77,
        attack: 20,
        defense: 11,
        evasion: 60,
        level: 9,
        experience: 100,
        skills: [backstab(), guitarSolo()],
        statuses: [],
        weaknesses: ["melee"],
        resistances: ["charm"],
        imagePath: "images/goose.jpg",
        theme: "encounter_get_funky.mp3",
        ai: (targets) => { 
            let target = Math.floor(Math.random() * targets.length);
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
        },
        isBoss: false
    }

    return Object.assign (entity, properties(entity));
}
let jefferey = () => {
    let entity = {
        name: "Jefferey Gnome, the Ancient One",
        health: 260,
        maxHealth: 260,
        attack: 32,
        defense: 5,
        evasion: 25,
        level: 9,
        experience: 160,
        skills: [boostAttack(), barrage(), guitarSolo()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "holy", "charm"],
        imagePath: "images/jefferey.jpg",
        theme: "encounter_ancient_being.mp3",
        ai: (targets) => { 
            let BOOST_ATTACK = 0;
            let selectedMove = Math.floor(Math.random() * (entity.skills.length - 1)) + 1;

            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
            updateBattleLog (entity.name + " is becoming stronger!");            
            entity.skills [BOOST_ATTACK].use (entity, entity);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}
let dylanP = () => {
    let entity = {
        name: "Dylan P",
        health: 128,
        maxHealth: 128,
        attack: 32,
        defense: 18,
        evasion: 45,
        level: 10,
        experience: 0,
        skills: [boostAttack(), barrage(), lightning2()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "lightning", "charm"],
        imagePath: "images/dylan-p.jpg",
        theme: "encounter_devil_incarnate.mp3",
        ai: (targets) => { 
            let BOOST_ATTACK = 0;
            let selectedMove = Math.floor(Math.random() * (entity.skills.length - 1)) + 1;

            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
            updateBattleLog (entity.name + " is becoming stronger!");            
            entity.skills [BOOST_ATTACK].use (entity, entity);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}
let dylanG = () => {
    let entity = {
        name: "Dylan G",
        health: 128,
        maxHealth: 128,
        attack: 32,
        defense: 18,
        evasion: 45,
        level: 10,
        experience: 0,
        skills: [boostAttack(), barrage(), lightning2()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "lightning", "charm"],
        imagePath: "images/dylan-g.jpg",
        theme: "encounter_devil_incarnate.mp3",
        ai: (targets) => { 
            let BOOST_ATTACK = 0;
            let selectedMove = Math.floor(Math.random() * (entity.skills.length - 1)) + 1;

            let target = Math.floor(Math.random() * targets.length);
            updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
            entity.skills [selectedMove].use (entity, targets [target]);
            updateBattleLog (entity.name + " is becoming stronger!");            
            entity.skills [BOOST_ATTACK].use (entity, entity);
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}

let dungeonEnemies = [bikerGnome, bear, taxCollector, sentry, shadow, onion, guardian,
                        sparkWizard, frostWizard, fireWizard, mrFunky, backupDancer, enforcer,
                        manFace, chadHeretic, policeOfficer, theFather, theSon, theSpirit,
                        goose, jefferey, dylanG, dylanP];
