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

let damageTarget = function (entUser, entTarget, amount, type) {
    let damage = amount + entUser.attack - entTarget.defense;
    if (damage <= 0) { damage = 0; }
    entTarget.health -= damage;
    console.log (entTarget.name + " took " + damage + " damage!!");
}