import { TestLevel } from "../src/levels/TestLevel.js";
import { utils } from "./utils.js";
import OverworldEvent from "./OverworldEvent.js";

export default class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.isCutscenePlaying = false;
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
    Object.keys(this.gameObjects).forEach((key) => {
      let object = this.gameObjects[key];
      object.id = key;

      object.mount(this);
    });
  }

  async startCutscene(events) {
    this.isCutscenePlaying = true;
    for (let i=0; i < events.length; i++) {
      const eventHandler = new OverworldEvent({
        event: events[i],
        map: this,
      })
      await eventHandler.init();
    }

    this.isCutscenePlaying = false;
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
  TestLevel,
  // any other rooms with npcs that you'd like to load.
};
