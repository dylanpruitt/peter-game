let MAP_SIZE = 7;
let CLIFF_TILE = 0, FLOOR_TILE = 1;
let SPECIAL_FLOORS = [4, 10, 16, 25, 31, 35, 44, 50];

let cliffTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = true;
  this.image = "images/cliff.png";
};
let caveFloorTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.image = "images/cave_tile.png";
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

let player = {x: 0, y: 0};

let world = {
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
  floor: 1,
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
  generateFloor : function () {
    if (this.floorIsSpecial (this.floor)) {
        let BOSS_MAP = 6;
        this.map = presetMaps [BOSS_MAP];
    } else {
        let preset = Math.floor(Math.random() * 6);
        console.log(preset);
        this.map = presetMaps [preset];
    }

    this.fillMap();
  }
};

function getIndexFromPosition(x, y) {
  for (var i = 0; i < world.map.length; i++) {
    if (x === world.map[i].x && y === world.map[i].y) {
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
  for (let i = 0; i < world.treasureChests.length; i++) {
    if (x === world.treasureChests[i].x && y === world.treasureChests[i].y) {
      return i;
    }
  }

  return NONE_FOUND;
}