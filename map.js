let MAP_SIZE = 5;
let CLIFF_TILE = 0, FLOOR_TILE = 1;
let SPECIAL_FLOORS = [4, 9, 12, 16, 20, 24, 25];

let cliffTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = true;
  this.image = "images/test_cliff.png";
};
let caveFloorTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.image = "images/test_cave.png";
};

let presetMaps = [
    [ // 0
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 1, 1, 1, 1,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0,
    ],
    [ // 1
        0, 0, 0, 0, 0,
        0, 1, 1, 1, 0,
        1, 1, 0, 1, 0,
        0, 1, 1, 1, 1,
        0, 0, 0, 0, 0,
    ],
    [ // 2
        0, 1, 1, 1, 1,
        0, 1, 0, 0, 1,
        0, 0, 0, 1, 1,
        0, 0, 0, 0, 1,
        0, 0, 0, 0, 0,
    ],
    [ // 3
        0, 1, 1, 0, 0,
        0, 1, 0, 1, 0,
        0, 1, 1, 1, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0,
    ],
    [ // 4
        0, 0, 0, 0, 1,
        0, 1, 0, 0, 1,
        0, 1, 1, 1, 1,
        0, 1, 0, 0, 0,
        0, 0, 0, 0, 0,
    ],
    [ // 5
        1, 1, 1, 1, 1,
        1, 0, 1, 0, 1,
        1, 1, 1, 1, 1,
        1, 0, 1, 0, 1,
        1, 1, 1, 1, 1,
    ],
    [ // 6
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0,
    ],
];

let dungeon = {
  /// none -1, cliff 0, floor 1
  map: [
    -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1,
  ],
  treasureChests: [],
  stairs: {x: 0, y: 0},
  bossEncounter: {x: -1, y: -1, indices: -1},
  fillMap : function () {
    let tiles = [cliffTile, caveFloorTile];
    let temporaryMap = [];
    let NO_TILE = -1;

    for (let i = 0; i < MAP_SIZE * MAP_SIZE; i++) {
        let tileIndex = this.map[i];
        if (tileIndex !== NO_TILE) {
          let tilePosition = getPositionFromIndex (i);
          temporaryMap.push (new tiles[tileIndex](tilePosition.x, tilePosition.y));
        }
    }
    this.map = temporaryMap;
  },
  floorIsSpecial (floor) {
    for (let i = 0; i < SPECIAL_FLOORS.length; i++) {
        if (floor === SPECIAL_FLOORS [i]) { return true; }
    }
    return false;
  },
  spawnInPlayer () {
    let spawnIsInvalid = true;
    let x = -1, y = -1;
    while (spawnIsInvalid) {
        x = Math.floor(Math.random() * MAP_SIZE);
        y = Math.floor(Math.random() * MAP_SIZE);
        if (this.map[x + (MAP_SIZE * y)] === FLOOR_TILE) {
            spawnIsInvalid = false;
            player.x = x; player.y = y;
        }
    } 
  },
  spawnInStairs () {
    let spawnIsInvalid = true;
    let x = -1, y = -1;
    while (spawnIsInvalid) {
        x = Math.floor(Math.random() * MAP_SIZE);
        y = Math.floor(Math.random() * MAP_SIZE);
        if (this.map[x + (MAP_SIZE * y)] === FLOOR_TILE && !(x === player.x && y === player.y)) {
            spawnIsInvalid = false;
            this.stairs.x = x; this.stairs.y = y;
        }
    } 
  },
  generateFloor : function () {
    if (this.floorIsSpecial (player.floor)) {
        let BOSS_MAP = 6;
        this.map = presetMaps [BOSS_MAP];
        player.x = 2, player.y = 3;
        this.stairs.x = 2, this.stairs.y = 1;
        if (player.floor === 4) {
          if (party [0].bossesDefeated < 1) {
            this.bossEncounter.x = 2, this.bossEncounter.y = 2;
            this.bossEncounter.indices = [2];
          }
        } else if (player.floor === 9) {
          if (party [0].bossesDefeated < 2) {
            this.bossEncounter.x = 2, this.bossEncounter.y = 2;
            this.bossEncounter.indices = [6];
          }
        }
    } else {
        let preset = Math.floor(Math.random() * 6);
        this.map = presetMaps [preset];
        this.spawnInPlayer();
        this.spawnInStairs();
    }
    this.fillMap();
  }
};

function getIndexFromPosition(x, y) {
  for (var i = 0; i < dungeon.map.length; i++) {
    if (x === dungeon.map[i].x && y === dungeon.map[i].y) {
      return i;
    }
  }
}

function getPositionFromIndex(i) {
  let position = {
    x: i % MAP_SIZE,
    y: Math.floor(i / MAP_SIZE)
  };
  return position;
}

function getTreasureChestIndexFromPosition(x, y) {
  let NONE_FOUND = -1;
  for (let i = 0; i < dungeon.treasureChests.length; i++) {
    if (x === dungeon.treasureChests[i].x && y === dungeon.treasureChests[i].y) {
      return i;
    }
  }

  return NONE_FOUND;
}