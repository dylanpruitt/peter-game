let warheadGnome = () => {
    let item = {
        name: "Warhead Gnome",
        description: "A nuclear warhead gnome. Deals 256 damage to an enemy.",
        use: (entTarget) => {
            entTarget.health -= 256;
            updateBattleLog (entTarget.name + " took 256 damage!!");
        }
    }
    return item;
}