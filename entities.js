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
        statuses: [],
        weaknesses: ["melee"],
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
        statuses: [],
        weaknesses: ["fire"],
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
        statuses: [],
        weaknesses: ["ice"],
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
        weaknesses: ["lightning"],
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
        statuses: [],
        weaknesses: ["lightning"],
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
        statuses: [],
        weaknesses: ["fire"],
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
        experience: 12,
        skills: [attack(), fire()],
        statuses: [],
        weaknesses: ["ice"],
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
        experience: 12,
        skills: [attack()],
        statuses: [],
        weaknesses: ["melee", "fire"],
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
        experience: 32,
        skills: [attack(), lightning(), slowDown()],
        statuses: [],
        weaknesses: ["ice", "gravity"],
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
        attack: 6,
        defense: 2,
        evasion: 55,
        level: 2,
        experience: 32,
        skills: [ice(), fire()],
        statuses: [],
        weaknesses: ["lightning"],
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
        attack: 4,
        defense: 3,
        evasion: 5,
        level: 2,
        experience: 32,
        skills: [attack(), charm()],
        statuses: [],
        weaknesses: ["fire"],
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

let guardian = () => {
    let entity = {
        name: "Guardian",
        health: 80,
        maxHealth: 80,
        attack: 11,
        defense: 5,
        evasion: 14,
        level: 3,
        experience: 56,
        skills: [boostAttack(), gravity(), provoke(), lightning2()],
        statuses: [],
        weaknesses: ["fire"],
        imagePath: "images/guardian.png",
        theme: "encounter_ancient_being.mp3",
        ai: (targets) => { 
            let BOOST_ATTACK = 0;
            let selectedMove = Math.floor(Math.random() * entity.skills.length);
            if (selectedMove === BOOST_ATTACK) {
                updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
                entity.skills [selectedMove].use (entity, entity);
            } else {
                let target = Math.floor(Math.random() * targets.length);
                updateBattleLog (entity.name + " used " + entity.skills [selectedMove].name + "!"); 
                entity.skills [selectedMove].use (entity, targets [target]);
            }           
            
        },
        isBoss: true
    }

    return Object.assign (entity, properties(entity));
}

let dungeonEnemies = [bikerGnome, bear, taxCollector, sentry, shadow, onion];
