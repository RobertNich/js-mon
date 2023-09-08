import Sprite from "./Sprite.js";

export default class GameObject {
  constructor(config) {
    this.id = null;
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.xOffset = config.xOffset || 0;
    this.yOffset = config.yOffset || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "/src/images/characters/character-sheet.png",
    });
  }

  mount(map) {
    this.isMounted = true;
    map.addWall(this.x, this.y);
  }

  update() {}
}
