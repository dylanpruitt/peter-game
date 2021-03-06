let directions = ["north", "east", "south", "west"];
let player = {
    x: 0, 
    y: 0, 
    floor: 1,
    direction: "north",
    directionIndex: function () {
        let NOT_FOUND = -1;
        for (let i = 0; i < directions.length; i++) {
        if (player.direction === directions [i]) { return i; }
        }
        return NOT_FOUND;
    },
    goLeft: function () {
        let newDirectionIndex = player.directionIndex() - 1;
        if (newDirectionIndex < 0) { newDirectionIndex = directions.length - 1; }
        player.direction = directions [newDirectionIndex];
        document.getElementById("description-text").innerHTML = "You turn left.";
        updateImage();
    },
    goRight: function () {
        let newDirectionIndex = player.directionIndex() + 1;
        if (newDirectionIndex >= directions.length) { newDirectionIndex -= directions.length; }
        player.direction = directions [newDirectionIndex];
        document.getElementById("description-text").innerHTML = "You turn right.";
        updateImage();
    },
    goForward: function () {
        if (player.canMoveForward()) {
        if (player.direction === "north") {
            player.y--;
        } else if (player.direction === "east") {
            player.x++;
        } else if (player.direction === "south") {
            player.y++;
        } else if (player.direction === "west") {
            player.x--;
        }
        document.getElementById("description-text").innerHTML =
            "You move forward.";
        } else {
        document.getElementById("description-text").innerHTML =
            "You can't move here.";
        }
        updateImage();

        let chestIndex = getTreasureChestIndexFromPosition(player.x, player.y, player.z);
        if (chestIndex !== -1) {
            document.getElementById("description-text").innerHTML = "There is a treasure chest here. You can use a key to open it.";
        }

        if (player.onStairs ()) {
            document.getElementById("description-text").innerHTML = "You find the stairs, and advance a level.";
            player.floor++;
            if (player.floor === 21) {
                setTimeout(function () { window.location.replace('credits.html'); }, 1000);
            }
            document.getElementById("floor-text").innerHTML = "Floor " + player.floor;
            dungeon.generateFloor();
            updateImage();
        } else {
            if (player.x === dungeon.bossEncounter.x && player.y === dungeon.bossEncounter.y) {
                let enemyIndices = dungeon.bossEncounter.indices;
                saveDungeonState ();
                saveEncounter (enemyIndices);
                document.getElementById("description-text").innerHTML = "You encounter an enemy!";
                setTimeout(function () { window.location.replace('battle.html'); }, 1000);
            }
            checkForEncounter();
        }
    },
    canMoveForward: function () {
        if (player.direction === "west" && player.x > 0) {
        if (!dungeon.map[getIndexFromPosition(player.x - 1, player.y, player.z)].isCollidable) {
            return true;
        }
        } else if (player.direction === "north" && player.y > 0) {
        if (!dungeon.map[getIndexFromPosition(player.x, player.y - 1, player.z)].isCollidable) {
            return true;
        }
        } else if (player.direction === "east" && player.x < MAP_SIZE - 1) {
        if (!dungeon.map[getIndexFromPosition(player.x + 1, player.y, player.z)].isCollidable) {
            return true;
        }
        } else if (player.direction === "south" && player.y < MAP_SIZE - 1) {
        if (!dungeon.map[getIndexFromPosition(player.x, player.y + 1, player.z)].isCollidable) {
            return true;
        }
        }
        return false;
    },
    onStairs: function () {
        if (player.x === dungeon.stairs.x && player.y === dungeon.stairs.y) {
           return true;
        } else {
            return false;
        }
    }
  };