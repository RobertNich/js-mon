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
      "idle-up": [[1, 0]],
      "walk-up": [
        [6, 0],
        [1, 0],
        [7, 0],
        [1, 0],
      ],
      "idle-down": [[0, 0]],
      "walk-down": [
        [4, 0],
        [0, 0],
        [5, 0],
        [0, 0],
      ],
      "idle-left": [[2, 0]],
      "walk-left": [
        [9, 0],
        [2, 0],
        [8, 0],
        [2, 0],
      ],
      "idle-right": [[3, 0]],
      "walk-right": [
        [10, 0],
        [3, 0],
        [11, 0],
        [3, 0],
      ],
    };
    this.currentAnimation = "walk-down"; // config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimi || 10;
    this.animationFrameProgress = this.animationFrameLimit;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx) {
    const x = this.gameObject.x - 17;
    const y = this.gameObject.y - 20;
    const xOffset = this.gameObject.xOffset;
    const yOffset = this.gameObject.yOffset;

    const [frameX, frameY, flip] = this.frame;

    if (this.isLoaded) {
      ctx.drawImage(
        this.image, // which image to load.
        xOffset + 16 * frameX, // sprite sheet x position
        yOffset + 14 * frameY, // sprite sheet y position
        16, // sprite width
        20, // sprite height
        x, // sprites x pos in the world
        y, // sprites y pos in the world
        16, // sprites width resolution
        20 // sprites height resolution
      );

      this.updateAnimationProgress();
    }
  }
}
