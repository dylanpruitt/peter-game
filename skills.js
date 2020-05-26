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

let barrage = () => {
    let skill = {
        name: "Barrage",
        description: "A medium damage melee attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 5;
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

let fire2 = () => {
    let skill = {
        name: "Fire2",
        description: "A medium damage fire attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 5;
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

let ice2 = () => {
    let skill = {
        name: "Ice2",
        description: "A medium damage ice attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 5;
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

let lightning2 = () => {
    let skill = {
        name: "Lightning2",
        description: "A medium damage lightning attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 5;
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
            entTarget.attack += 2; entTarget.defense -= 2;
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
            let enemyHit = false;
            if (entTarget.hasWeakness("charm")) {
                updateBattleLog (entTarget.name + "'s weakness was hit!");
                enemyHit = true;
            } else if (entTarget.hasResistance("charm")) {
                updateBattleLog (entTarget.name + " is resistant to charm!");
            } else {
                let HIT_CHANCE = 60;
                let randomNumber = Math.floor (Math.random() * 101);
            
                if (randomNumber <= HIT_CHANCE) {
                    enemyHit = true;
                } else {
                    updateBattleLog ("D'oh! Missed!!");
                } 
            }
            if (enemyHit) {
                entTarget.statuses.push (Charm ());
                updateBattleLog (entTarget.name + " was charmed!");
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
            let BASE_DAMAGE = 14;
            updateBattleLog (entUser.name + " starts a gnarly guitar solo!!");
            damageTarget(entUser, entTarget, BASE_DAMAGE, "fire");    
        }
    }
    return skill;
}

let backstab = () => {
    let skill = {
        name: "Backstab",
        description: "An INTENSE melee attack.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 14;
            updateBattleLog (entUser.name + " starts a gnarly guitar solo!!");
            damageTarget(entUser, entTarget, BASE_DAMAGE, "melee");    
        }
    }
    return skill;
}

let factsAndLogic = () => {
    let skill = {
        name: "Facts and Logic",
        description: "An INTENSE rational argument that deals emotional damage.",
        use: (entUser, entTarget) => {
            let BASE_DAMAGE = 14;
            updateBattleLog (entUser.name + " uses Facts and Logic!!");
            damageTarget(entUser, entTarget, BASE_DAMAGE, "emotional");    
        }
    }
    return skill;
}

let gravity = () => {
    let skill = {
        name: "Gravity",
        description: "Halves an enemy's HP (20% base chance).",
        use: (entUser, entTarget) => {
            let enemyHit = false;
            if (entTarget.hasWeakness("gravity")) {
                updateBattleLog (entTarget.name + "'s weakness was hit!");
                enemyHit = true;
            } else if (entTarget.hasResistance("gravity")) {
                updateBattleLog (entTarget.name + " is resistant to gravity!");
            } else {
                let BASE_HIT_CHANCE = 20;
                let HIT_CHANCE = BASE_HIT_CHANCE + (entUser.level * 3);
                let randomNumber = Math.floor (Math.random() * 101);
            
                if (randomNumber <= HIT_CHANCE) {
                    enemyHit = true;
                } else {
                    updateBattleLog ("D'oh! Missed!!");
                } 
            }
            if (enemyHit) {
                entTarget.health = Math.floor (entTarget.health / 2);
                updateBattleLog (entTarget.name + "'s health was halved!");
            }
        }
    }
    return skill;
}

let boostAttack = () => {
    let skill = {
        name: "Boost Attack",
        description: "The target's attack goes up.",
        use: (entUser, entTarget) => {
            let BOOST_AMOUNT = 2;
            if (entTarget.attack + BOOST_AMOUNT > 32) { BOOST_AMOUNT = 32 - entTarget.attack; }
            entTarget.attack += BOOST_AMOUNT;
        }
    }
    return skill;
}

let boostDefense = () => {
    let skill = {
        name: "Boost Defense",
        description: "The target's defense goes up.",
        use: (entUser, entTarget) => {
            let BOOST_AMOUNT = 1;
            if (entTarget.attack + BOOST_AMOUNT > 32) { BOOST_AMOUNT = 32 - entTarget.attack; }
            entTarget.attack += BOOST_AMOUNT;
        }
    }
    return skill;
}

let slowDown = () => {
    let skill = {
        name: "Slow Down",
        description: "Slow down a target, reducing their evasion.",
        use: (entUser, entTarget) => {
            let DEBUFF_AMOUNT = 7;
            if (entTarget.evasion - DEBUFF_AMOUNT < 5) { DEBUFF_AMOUNT = entTarget.evasion - 5; }
            entTarget.evasion -= DEBUFF_AMOUNT;
        }
    }
    return skill;
}

let decharm = () => {
    let skill = {
        name: "Decharm",
        description: "If the target is charmed, remove their charm status.",
        use: (entUser, entTarget) => {
            if (entTarget.hasStatus("Charm")) {
                let index = 0;
                for (let i = 0; i < entTarget.statuses.length; i++) { if (entTarget.statuses [i].name === "Charm") { index = i; }}
                entTarget.statuses.splice(index, 1);
                updateBattleLog (entTarget.name + " was de-charmed!!");
            } else {
                updateBattleLog ("Silly " + entUser.name + "! " + entTarget.name + " isn't charmed!!");
            }
        }
    }
    return skill;
}

let trickCard = () => {
    let skill = {
        name: "Trick Card",
        description: "Swaps weaknesses with the target.",
        use: (entUser, entTarget) => {
            let tempWeaknesses = entTarget.weaknesses;
            entTarget.weaknesses = entUser.weaknesses;
            entUser.weaknesses = tempWeaknesses;
        }
    }
    return skill;
}

let resistIce = () => {
    let skill = {
        name: "Resist Ice",
        description: "Makes the user resistant to ice attacks, but weak to fire attacks.",
        use: (entUser, entTarget) => {
            entTarget.resistances = ["ice"];
            entTarget.weaknesses = ["fire"];
        }
    }
    return skill;
}

let resistFire = () => {
    let skill = {
        name: "Resist Fire",
        description: "Makes the user resistant to fire attacks, but weak to lightning attacks.",
        use: (entUser, entTarget) => {
            entTarget.resistances = ["fire"];
            entTarget.weaknesses = ["lightning"];
        }
    }
    return skill;
}

let resistLightning = () => {
    let skill = {
        name: "Resist Lightning",
        description: "Makes the user resistant to lightning attacks, but weak to ice attacks.",
        use: (entUser, entTarget) => {
            entTarget.resistances = ["lightning"];
            entTarget.weaknesses = ["ice"];
        }
    }
    return skill;
}

let resistHoly = () => {
    let skill = {
        name: "Resist Holy",
        description: "Makes the user resistant to holy attacks, but weak to melee attacks.",
        use: (entUser, entTarget) => {
            entTarget.resistances = ["holy"];
            entTarget.weaknesses = ["melee"];
        }
    }
    return skill;
}

let holy = () => {
    let skill = {
        name: "Holy",
        description: "Instant death spell (30% hit chance).",
        use: (entUser, entTarget) => {
            let enemyHit = false;
            if (entTarget.hasWeakness("holy")) {
                updateBattleLog (entTarget.name + "'s weakness was hit!");
                enemyHit = true;
            } else if (entTarget.hasResistance("holy")) {
                updateBattleLog (entTarget.name + " is resistant to holy death spells!");
            } else {
                let HIT_CHANCE = 30;
                let randomNumber = Math.floor (Math.random() * 101);
            
                if (randomNumber <= HIT_CHANCE) {
                    enemyHit = true;
                } else {
                    updateBattleLog ("D'oh! Missed!!");
                } 
            }
            if (enemyHit) {
                entTarget.health = 0;
                updateBattleLog (entTarget.name + " was killed!");
            }
        }
    }
    return skill;
}

let bustaMove = () => {
    let skill = {
        name: "Bust a Move",
        description: "Target heals some health from the power of funky dancing.",
        use: (entUser, entTarget) => {
            let healthAmount = Math.floor(entTarget.maxHealth / 6);
            entTarget.health += healthAmount;
            if (entTarget.health > entTarget.maxHealth) { entTarget.health = entTarget.maxHealth; }
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
        if (entTarget.hasResistance (type)) {
            damage = Math.round (damage / 3);
            updateBattleLog (entTarget.name + " resists the attack!!");
        }
        if (damage <= 0) { damage = 0; }
        entTarget.health -= damage;

        if (entTarget.health < 0) { entTarget.health = 0; }

        updateBattleLog (entTarget.name + " took " + damage + " damage!!");
    }
}

let skills = [attack(), fire(), ice(), lightning(), caffeine(), heal(), useItem(), provoke(), charm(), guitarSolo(),
                gravity(), holy(), boostAttack(), slowDown(), decharm(), barrage(), lightning2(), boostDefense(),
                trickCard(), resistFire(), resistIce(), resistLightning(), ice2(), fire2(), backstab(), resistHoly(),
                holy(), factsAndLogic()];

let getSkillIndexFromName = function (name) {
    let NOT_FOUND = -1;
    for (let i = 0; i < skills.length; i++) {
        if (skills [i].name === name) {
            return i;
        }
    }
    return NOT_FOUND;
}