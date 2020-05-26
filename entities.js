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

// FLOORS 5 - 9

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

// FLOORS 10 - 14

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
let mrFunky = () => {
    let entity = {
        name: "Mr. Funky",
        health: 56,
        maxHealth: 56,
        attack: 6,
        defense: 6,
        evasion: 45,
        level: 4,
        experience: 30,
        skills: [barrage(), charm()],
        statuses: [],
        weaknesses: ["fire"],
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

// FLOORS 15 - 20

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
let antiPeterClone = () => {
    let entity = {
        name: "Anti Peter Clone",
        health: 50,
        maxHealth: 80,
        attack: 16,
        defense: 11,
        evasion: 20,
        level: 5,
        experience: 99,
        skills: [guitarSolo(), backstab(), factsAndLogic()],
        statuses: [],
        weaknesses: ["fire"],
        resistances: ["gravity", "holy", "lightning"],
        imagePath: "images/demo-peter-portrait.jpg",
        theme: "encounter_gman.mp3",
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

// FLOORS 19 - 20

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
        name: "Jefferey Gnome",
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
                        sparkWizard, frostWizard, fireWizard, mrFunky, enforcer,
                        manFace, antiPeterClone, theFather, theSon, theSpirit,
                        goose, jefferey, dylanG, dylanP];
