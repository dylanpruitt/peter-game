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
    console.log (entTarget.name + " healed " + healAmount + " HP!!");
});

let useItem = new Skill("Use item", "Use a held item.", (entUser, entTarget) => {
    entUser.item.use (entTarget);
    console.log (entUser.name + " used " + entUser.item.name + "!!");
});

let provoke = new Skill("Provoke", "Provoke a target, making them gain attack but lose defense.", (entUser, entTarget) => {
    entTarget.attack += 3; entTarget.defense -= 4;
    console.log (entTarget.name + " provoked the enemy!!");
});

let guitarSolo = new Skill("Guitar Solo", "Peter's guitar solo. Does INTENSE fire damage.", (entUser, entTarget) => {
    let BASE_DAMAGE = 36;
    console.log (entTarget.name + " starts a gnarly guitar solo!!");
    damageTarget(entUser, entTarget, BASE_DAMAGE, "fire");
});

let damageTarget = function (entUser, entTarget, amount, type) {
    let randomNumber = Math.floor (Math.random() * 101);
    if (randomNumber <= entTarget.evasion) {
        console.log (entTarget.name + " evaded the attack!!");
    } else {
        let damage = amount + entUser.attack - entTarget.defense;

        if (entTarget.hasWeakness (type)) {
            damage = Math.round (damage * 1.5);
            console.log (entTarget.name + "'s weakness was hit!!");
        }
        if (damage <= 0) { damage = 0; }
        entTarget.health -= damage;

        console.log (entTarget.name + " took " + damage + " damage!!");
    }
}