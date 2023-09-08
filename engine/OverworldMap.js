import { TestLevel } from "../src/levels/TestLevel.js";
import { utils } from "./utils.js";

export default class OverworldMap {
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
  TestLevel,
  // any other rooms with npcs that you'd like to load.
};