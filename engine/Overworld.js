import OverworldMap from "./OverworldMap.js";
import DirectionInput from "./DirectionInput.js";

export default class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // camera focus
      const cameraFocus = this.map.gameObjects.player;

      // update all objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({ vector: this.directionInput.direction, map: this.map });
      });

      // draw the bottom layer
      this.map.drawLowerImage(this.ctx, cameraFocus);

      // draw any game objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.sprite.draw(this.ctx, cameraFocus);
      });

      // draw the upper layer
      this.map.drawUpperImage(this.ctx, cameraFocus);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.TestLevel);
    this.map.mountObjects();

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();

    this.map.startCutscene([
      { actor: "player", type: "walk", direction: "up"},
      { actor: "player", type: "walk", direction: "up"},
      { actor: "policeMan", type: "walk", direction: "down"},
      { actor: "policeMan", type: "walk", direction: "down"},
      { actor: "policeMan", type: "walk", direction: "down"},
      { actor: "policeMan", type: "walk", direction: "down"},
      { actor: "policeMan", type: "walk", direction: "right"},
      { actor: "policeMan", type: "walk", direction: "right"},
      { actor: "policeMan", type: "walk", direction: "right"},
      { actor: "may", type: "walk", direction: "left"},
      { actor: "may", type: "walk", direction: "left"},
      { actor: "may", type: "walk", direction: "left"},
      { actor: "may", type: "walk", direction: "left"},
      { actor: "may", type: "walk", direction: "left"},
      { actor: "may", type: "walk", direction: "left"},
    ])
  }
}
