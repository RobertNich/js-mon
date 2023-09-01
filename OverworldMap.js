class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

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
}

window.OverworldMaps = {
  TestLevel: {
    lowerSrc: "/images/maps/test-bg.png",
    upperSrc: "",
    gameObjects: {
      player: new Person({
        x: utils.withGrid(14),
        y: utils.withGrid(24),
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
