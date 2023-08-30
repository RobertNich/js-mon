class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "/images/maps/test-bg.png";

    // current sprite sheet has a 1px border, might remove in the future.
    const xOffset = 1;
    const yOffset = 1;

    // Place some Game Objects
    const player = new GameObject({
      x: 5,
      y: 6,
      xOffset: xOffset + 113,
      yOffset: yOffset,
    });

    const policeMan = new GameObject({
      x: 10,
      y: 10,
      xOffset: xOffset,
      yOffset: yOffset,
    });

    setTimeout(() => {
      player.sprite.draw(this.ctx);
      policeMan.sprite.draw(this.ctx);
    }, 200);
  }
}
