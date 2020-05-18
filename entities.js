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
        this.imagePath = sImagePath;
    }

    ai (targets) { defaultAI (targets); }
}

let playerPeter = new Entity ("Peter", 14, 14, 4, 2, 22, 3, 0, [attack], null, "images/demo-peter-portrait.png");
let playerJustin = new Entity ("Justin", 22, 22, 5, 1, 36, 2, 0, [attack], null, "images/demo-justin-portrait.png");
let playerRaymond = new Entity ("Raymond", 18, 18, 2, 1, 17, 2, 0, [attack], null, "images/demo-raymond-portrait.png");
let playerDrWinder = new Entity ("Dr. Winder", 15, 15, 2, 2, 10, 6, 0, [heal], null, "images/demo-drwinder-portrait.png");

class mrFunky extends Entity {
    constructor () {
        super ("Mr. Funky",
        24, 24,
        6,
        1,
        25,
        4,
        16,
        [attack],
        null,
        "images/mr-funky.jpg");
    }

    ai (targets) { 
        let ATTACK = 0;
        let target = Math.floor(Math.random() * targets.length);
        console.log (this.name + " used " + this.skills [ATTACK].name + "!"); 
        this.skills [ATTACK].use (this, targets [target]);
    }
}

let defaultAI = function (targets) {
    console.log ("needs ai implementation!");
}