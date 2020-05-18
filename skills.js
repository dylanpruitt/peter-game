let Skill = function (sName, sDescription, fUse) {
    this.name = sName;
    this.description = sDescription;
    this.use = fUse;
};

let attack = new Skill("Attack", "A basic attack.", (entUser, entTarget) => {
    let BASE_DAMAGE = 1;
    damageTarget(entUser, entTarget, BASE_DAMAGE, "melee");
});

let heal = new Skill("Heal", "Heal the target.", (entUser, entTarget) => {
    let BASE_HEAL = 6;
    let healAmount = BASE_HEAL + (2 * entUser.level);

    if (entTarget.health + healAmount > entTarget.maxHealth) { healAmount = entTarget.maxHealth - entTarget.health; }
    entTarget.health += healAmount;
    updateBattleLog (entTarget.name + " healed " + healAmount + " HP!!");
});

let useItem = new Skill("Use item", "Use a held item.", (entUser, entTarget) => {
    updateBattleLog (entUser.name + " used " + entUser.item.name + "!!");
    entUser.item.use (entTarget);
});

let provoke = new Skill("Provoke", "Provoke a target, making them gain attack but lose defense.", (entUser, entTarget) => {
    entTarget.attack += 3; entTarget.defense -= 4;
    updateBattleLog (entUser.name + " provoked the enemy!!");
});

let charm = new Skill("Charm", "Charms an enemy (60% chance).", (entUser, entTarget) => {
    let HIT_CHANCE = 60;
    let randomNumber = Math.floor (Math.random() * 101);

    if (randomNumber <= HIT_CHANCE) {
        updateBattleLog ("Enemy charmed!!");
        entTarget.statuses.push (new Charm ());
    } else {
        updateBattleLog ("D'oh! Missed!!");
    }
});

let guitarSolo = new Skill("Guitar Solo", "Peter's guitar solo. Does INTENSE fire damage.", (entUser, entTarget) => {
    let BASE_DAMAGE = 36;
    updateBattleLog (entUser.name + " starts a gnarly guitar solo!!");
    damageTarget(entUser, entTarget, BASE_DAMAGE, "fire");
});

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