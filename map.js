let MAP_SIZE = 7;
let CLIFF_TILE = 0, FLOOR_TILE = 1;
let SPECIAL_FLOORS = [4, 10, 16, 25, 31, 35, 44, 50];

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
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0,
        0, 1, 1, 1, 0, 0, 0,
    ],
    [ // 1
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 0, 0,
    ],
    [ // 2
        0, 0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 1, 1, 0, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
    ],
    [ // 3
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
    ],
    [ // 4
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 1, 1, 1,
        0, 1, 0, 0, 1, 0, 1,
        0, 1, 0, 1, 1, 1, 1,
        0, 1, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0,
    ],
    [ // 5
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 1, 1, 1, 0,
        1, 1, 0, 1, 0, 1, 0,
        1, 0, 0, 1, 0, 1, 0,
        1, 0, 0, 1, 1, 1, 0,
        1, 1, 1, 1, 0, 0, 0,
    ],
    [ // 6
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
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
        x = Math.floor(Math.random() * 7);
        y = Math.floor(Math.random() * 7);
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
        x = Math.floor(Math.random() * 7);
        y = Math.floor(Math.random() * 7);
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
    } else {
        let preset = Math.floor(Math.random() * 6);
        this.map = presetMaps [preset];
    }
    this.spawnInPlayer();
    this.spawnInStairs();
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