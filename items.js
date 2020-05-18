class Item {
    constructor (sName, sDescription, fUse) {
        this.name = sName;
        this.description = sDescription;
        this.use = fUse;
    }
}

class warheadGnome extends Item {
    constructor () {
        super ("Warhead Gnome", "A nuclear warhead gnome. Deals 256 damage to an enemy.", (entTarget) => {
            entTarget.health -= 256;
            console.log (entTarget.name + " took 256 damage!!");
        });
    }
}