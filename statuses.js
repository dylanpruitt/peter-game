class Status {
    constructor (sName, sDescription, iTurnsLeft, fEffect) {
        this.name = sName;
        this.description = sDescription;
        this.turnsLeft = iTurnsLeft;
        this.effect = fEffect;
    }
}

class Charm extends Status {
    constructor () {
        super ("Charm", "Charms an enemy - they won't attack for a turn.", 1, (entParent) => {});
    }
}