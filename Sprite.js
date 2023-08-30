class Sprite {
  constructor(config) {
    // Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // Configure Animation & Initial State
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x - 17;
    const y = this.gameObject.y - 20;
    const xOffset = this.gameObject.xOffset;
    const yOffset = this.gameObject.yOffset;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

    this.isLoaded &&
      ctx.drawImage(
        this.image, // which image to load.
        xOffset, // sprite sheet x position
        yOffset, // sprite sheet y position
        14, // sprite width
        20, // sprite height
        x, // sprites x pos in the world
        y, // sprites y pos in the world
        14, // sprites width resolution
        20 // sprites height resolution
      );
  }
}
