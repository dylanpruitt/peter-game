let Entity = function (sName, iHealth, iMaxHealth, iAttack, iDefense, iEvasion, iLevel, iExperience, aSkills, itemItem) {
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
};

let playerPeter = new Entity ("Peter", 7, 7, 2, 2, 15, 1, 0, [attack], null);
let playerJustin = new Entity ("Justin", 9, 9, 1, 1, 30, 1, 0, [attack], null);
let playerRaymond = new Entity ("Raymond", 11, 11, 2, 1, 10, 1, 0, [attack], null);
let playerDrWinder = new Entity ("Dr. Winder", 8, 8, 1, 2, 10, 1, 0, [attack], null);

let mrFunky = new Entity ("Mr. Funky", 24, 24, 6, 1, 25, 4, 16, [attack], null);