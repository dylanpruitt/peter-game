let attack = () => {
    let skill = {
        name: "Attack",
        description: "A basic attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 1;
            damageTarget(entUser, entTarget, BASE_DAMAGE, "melee");     
        }
    }
    return skill;
}

let fire = () => {
    let skill = {
        name: "Fire",
        description: "A basic fire attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 1;
            damageTarget(entUser, entTarget, BASE_DAMAGE, "fire");     
        }
    }
    return skill;
}

let ice = () => {
    let skill = {
        name: "Ice",
        description: "A basic ice attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 1;
            damageTarget(entUser, entTarget, BASE_DAMAGE, "ice");     
        }
    }
    return skill;
}

let lightning = () => {
    let skill = {
        name: "Lightning",
        description: "A basic lightning attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 1;
            damageTarget(entUser, entTarget, BASE_DAMAGE, "lightning");     
        }
    }
    return skill;
}

let heal = () => {
    let skill = {
        name: "Heal",
        description: "Heal the target.",
        use: (entUser, entTarget) => {
            let BASE_HEAL = 6;
            let healAmount = BASE_HEAL + (2 * entUser.level);
        
            if (entTarget.health + healAmount > entTarget.maxHealth) { healAmount = entTarget.maxHealth - entTarget.health; }
            entTarget.health += healAmount;
            updateBattleLog (entTarget.name + " healed " + healAmount + " HP!!");  
        }
    }
    return skill;
}

let caffeine = () => {
    let skill = {
        name: "Caffeine",
        description: "The target's evasion goes up.",
        use: (entUser, entTarget) => {
            let BASE_EVASION = 5;
            let evadeAmount = BASE_EVASION + (2 * entUser.level);
            if (entTarget.evasion + evadeAmount > 60) { evadeAmount = 60 - entTarget.evasion; }
            entTarget.statuses.push(new EvadeBoost()) 
            entTarget.evasion += evadeAmount;
        }
    }
    return skill;
}

let useItem = () => {
    let skill = {
        name: "Use item",
        description: "Use a held item.",
        use: (entUser, entTarget) => {
            updateBattleLog (entUser.name + " used " + entUser.item.name + "!!");
            entUser.item.use (entTarget);   
        }
    }
    return skill;
}

let provoke = () => {
    let skill = {
        name: "Provoke",
        description: "Provoke a target, making them gain attack but lose defense.",
        use: (entUser, entTarget) => {
            entTarget.attack += 3; entTarget.defense -= 4;
            updateBattleLog (entUser.name + " provoked the enemy!!");  
        }
    }
    return skill;
}

let charm = () => {
    let skill = {
        name: "Charm",
        description: "Charms an enemy (60% chance).",
        use: (entUser, entTarget) => {
            let HIT_CHANCE = 60;
            let randomNumber = Math.floor (Math.random() * 101);
        
            if (randomNumber <= HIT_CHANCE) {
                updateBattleLog ("Enemy charmed!!");
                entTarget.statuses.push (new Charm ());
            } else {
                updateBattleLog ("D'oh! Missed!!");
            } 
        }
    }
    return skill;
}

let guitarSolo = () => {
    let skill = {
        name: "Guitar Solo",
        description: "Peter's guitar solo. Does INTENSE fire damage.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 36;
            updateBattleLog (entUser.name + " starts a gnarly guitar solo!!");
            damageTarget(entUser, entTarget, BASE_DAMAGE, "fire");    
        }
    }
    return skill;
}

let damageTarget = function (entUser, entTarget, amount, type) {
    let randomNumber = Math.floor (Math.random() * 101);
    if (randomNumber <= entTarget.evasion) {
        updateBattleLog (entTarget.name + " evaded the attack!!");
    } else {
        let damage = amount + entUser.attack - entTarget.defense;

        if (entTarget.hasWeakness (type)) {
            damage = Math.round (damage * 1.5);
            updateBattleLog (entTarget.name + "'s weakness was hit!!");
        }
        if (damage <= 0) { damage = 0; }
        entTarget.health -= damage;

        updateBattleLog (entTarget.name + " took " + damage + " damage!!");
    }
}

let skills = [attack(), fire(), ice(), lightning(), caffeine(), heal(), useItem(), provoke(), charm(), guitarSolo()];

let getSkillIndexFromName = function (name) {
    let NOT_FOUND = -1;
    for (let i = 0; i < skills.length; i++) {
        if (skills [i].name === name) {
            return i;
        }
    }
    return NOT_FOUND;
}