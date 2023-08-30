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

    const x = 5;
    const y = 6;

    const offsetX = 1;
    const offsetY = 1;

    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        offsetX + 113, //left cut
        offsetY, //top cut,
        14, //width of cut
        20, //height of cut
        x * 29, // x pos offset
        y * 28, // y pos offset
        14, // image x resolution
        20 // image y resolution
      );
    };
    hero.src = "/images/characters/character-sheet.png";
  }
}
