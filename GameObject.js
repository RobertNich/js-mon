class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.xOffset = config.xOffset || 0;
    this.yOffset = config.yOffset || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "/images/characters/character-sheet.png",
    });
  }

  update() {}
}
