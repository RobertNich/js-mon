class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraFocus) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(14) - cameraFocus.x,
      utils.withGrid(8) - cameraFocus.y
    );
  }

  drawUpperImage(ctx, cameraFocus) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(13) - cameraFocus.x,
      utils.withGrid(8) - cameraFocus.y
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.values(this.gameObjects).forEach((object) => {
      object.mount(this);
    });
  }

  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x, y) {
    delete this.walls[`${x},${y}`];
  }

  moveWall(previousX, previousY, direction) {
    this.removeWall(previousX, previousY);
    const { x, y } = utils.nextPosition(previousX, previousY, direction);
    this.addWall(x, y);
  }
}

window.OverworldMaps = {
  TestLevel: {
    lowerSrc: "/images/maps/test-bg.png",
    upperSrc: "",
    walls: {
      [utils.asGridCoord(4, 5)]: true,
      [utils.asGridCoord(5, 5)]: true,
      [utils.asGridCoord(6, 5)]: true,
      [utils.asGridCoord(7, 5)]: true,
      [utils.asGridCoord(8, 5)]: true,
      [utils.asGridCoord(9, 5)]: true,
      [utils.asGridCoord(10, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(11, 7)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(3, 7)]: true,
      [utils.asGridCoord(3, 8)]: true,
      [utils.asGridCoord(3, 9)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(3, 11)]: true,
      [utils.asGridCoord(3, 12)]: true,
      [utils.asGridCoord(3, 13)]: true,
      [utils.asGridCoord(3, 14)]: true,
      [utils.asGridCoord(3, 15)]: true,
      [utils.asGridCoord(3, 16)]: true,
      [utils.asGridCoord(3, 17)]: true,
      [utils.asGridCoord(3, 18)]: true,
      [utils.asGridCoord(3, 19)]: true,
      [utils.asGridCoord(3, 20)]: true,
      [utils.asGridCoord(3, 21)]: true,
      [utils.asGridCoord(3, 22)]: true,
      [utils.asGridCoord(3, 23)]: true,

      [utils.asGridCoord(4, 24)]: true,
      [utils.asGridCoord(5, 24)]: true,
      [utils.asGridCoord(6, 24)]: true,
      [utils.asGridCoord(7, 24)]: true,
      [utils.asGridCoord(8, 24)]: true,
      [utils.asGridCoord(9, 24)]: true,
      [utils.asGridCoord(10, 24)]: true,
      [utils.asGridCoord(11, 24)]: true,
      [utils.asGridCoord(12, 24)]: true,
      [utils.asGridCoord(13, 24)]: true,
      [utils.asGridCoord(14, 24)]: true,
      [utils.asGridCoord(15, 24)]: true,
      [utils.asGridCoord(16, 24)]: true,
      [utils.asGridCoord(16, 25)]: true,
      [utils.asGridCoord(16, 26)]: true,
      [utils.asGridCoord(16, 27)]: true,
      [utils.asGridCoord(15, 27)]: true,
      [utils.asGridCoord(14, 27)]: true,
      [utils.asGridCoord(13, 27)]: true,
      [utils.asGridCoord(12, 27)]: true,
      [utils.asGridCoord(11, 27)]: true,
      [utils.asGridCoord(10, 27)]: true,
      [utils.asGridCoord(9, 27)]: true,
      [utils.asGridCoord(8, 27)]: true,
      [utils.asGridCoord(7, 27)]: true,
      [utils.asGridCoord(6, 27)]: true,
      [utils.asGridCoord(5, 27)]: true,
      [utils.asGridCoord(4, 27)]: true,

      [utils.asGridCoord(3, 28)]: true,
      [utils.asGridCoord(3, 29)]: true,
      [utils.asGridCoord(3, 30)]: true,
      [utils.asGridCoord(4, 31)]: true,
      [utils.asGridCoord(5, 31)]: true,
      [utils.asGridCoord(6, 31)]: true,
      [utils.asGridCoord(7, 31)]: true,
      [utils.asGridCoord(8, 31)]: true,
      [utils.asGridCoord(8, 32)]: true,
      [utils.asGridCoord(8, 33)]: true,
      [utils.asGridCoord(8, 34)]: true,
      [utils.asGridCoord(9, 35)]: true,
      [utils.asGridCoord(10, 35)]: true,
      [utils.asGridCoord(11, 35)]: true,
      [utils.asGridCoord(11, 36)]: true,
      [utils.asGridCoord(11, 37)]: true,
      [utils.asGridCoord(11, 38)]: true,
      [utils.asGridCoord(11, 39)]: true,
      [utils.asGridCoord(11, 40)]: true,
      [utils.asGridCoord(12, 41)]: true,
      [utils.asGridCoord(13, 41)]: true,
      [utils.asGridCoord(14, 41)]: true,
      [utils.asGridCoord(15, 40)]: true,
      [utils.asGridCoord(15, 39)]: true,
      [utils.asGridCoord(15, 38)]: true,
      [utils.asGridCoord(15, 37)]: true,
      [utils.asGridCoord(15, 36)]: true,
      [utils.asGridCoord(15, 35)]: true,
      [utils.asGridCoord(16, 35)]: true,
      [utils.asGridCoord(17, 35)]: true,
      [utils.asGridCoord(18, 35)]: true,
      [utils.asGridCoord(19, 34)]: true,
      [utils.asGridCoord(19, 33)]: true,
      [utils.asGridCoord(19, 32)]: true,
      [utils.asGridCoord(19, 31)]: true,
      [utils.asGridCoord(20, 31)]: true,
      [utils.asGridCoord(21, 31)]: true,
      [utils.asGridCoord(22, 31)]: true,
      [utils.asGridCoord(23, 31)]: true,
      [utils.asGridCoord(24, 30)]: true,
      [utils.asGridCoord(24, 29)]: true,
      [utils.asGridCoord(24, 28)]: true,
      [utils.asGridCoord(24, 27)]: true,
      [utils.asGridCoord(24, 26)]: true,
      [utils.asGridCoord(24, 25)]: true,
      [utils.asGridCoord(24, 24)]: true,
      [utils.asGridCoord(24, 23)]: true,
      [utils.asGridCoord(24, 22)]: true,
      [utils.asGridCoord(24, 21)]: true,
      [utils.asGridCoord(24, 20)]: true,
      [utils.asGridCoord(24, 19)]: true,
      [utils.asGridCoord(24, 18)]: true,
      [utils.asGridCoord(24, 17)]: true,
      [utils.asGridCoord(24, 16)]: true,
      [utils.asGridCoord(24, 15)]: true,
      [utils.asGridCoord(23, 14)]: true,
      [utils.asGridCoord(22, 14)]: true,
      [utils.asGridCoord(21, 13)]: true,
      [utils.asGridCoord(20, 14)]: true,
      [utils.asGridCoord(20, 13)]: true,
      [utils.asGridCoord(20, 12)]: true,
      [utils.asGridCoord(20, 11)]: true,
      [utils.asGridCoord(20, 11)]: true,
      [utils.asGridCoord(21, 11)]: true,
      [utils.asGridCoord(22, 11)]: true,
      [utils.asGridCoord(23, 11)]: true,
      [utils.asGridCoord(24, 11)]: true,
      [utils.asGridCoord(24, 10)]: true,
      [utils.asGridCoord(24, 9)]: true,
      [utils.asGridCoord(24, 8)]: true,
      [utils.asGridCoord(24, 7)]: true,
      [utils.asGridCoord(24, 6)]: true,
      [utils.asGridCoord(23, 5)]: true,
      [utils.asGridCoord(22, 5)]: true,
      [utils.asGridCoord(21, 5)]: true,
      [utils.asGridCoord(20, 5)]: true,
      [utils.asGridCoord(19, 5)]: true,
      [utils.asGridCoord(18, 6)]: true,
      [utils.asGridCoord(18, 7)]: true,
      [utils.asGridCoord(17, 6)]: true,
      [utils.asGridCoord(17, 5)]: true,
      [utils.asGridCoord(16, 5)]: true,
      [utils.asGridCoord(15, 5)]: true,
      [utils.asGridCoord(14, 5)]: true,
      [utils.asGridCoord(13, 6)]: true,
      [utils.asGridCoord(12, 6)]: true,
    },
    gameObjects: {
      player: new Person({
        x: utils.withGrid(14),
        y: utils.withGrid(22),
        xOffset: 0,
        yOffset: 1,
        isPlayerControlled: true,
      }),
      /* policeMan: new Person({
        x: utils.withGrid(2),
        y: utils.withGrid(5),
        xOffset: 176,
        yOffset: 1,
      }), */
    },
  },
  // any other rooms with npcs that you'd like to load.
};
