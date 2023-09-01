class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  TestLevel: {
    lowerSrc: "/images/maps/test-bg.png",
    upperSrc: "",
    gameObjects: {
      player: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        xOffset: 0,
        yOffset: 1,
        isPlayerControlled: true,
      }),
      /* policeMan: new Person({
        x: utils.withGrid(10),
        y: utils.withGrid(10),
        xOffset: 176,
        yOffset: 1,
      }), */
    },
  },
  // any other rooms with npcs that you'd like to load.
};
