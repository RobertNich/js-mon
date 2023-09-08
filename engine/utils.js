export const utils = {
  withGrid(n) {
    return n * 16;
  },

  asGridCoord(x, y) {
    return `${x * 16},${y * 16}`;
  },

  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    const tileSize = 16;
    switch (direction) {
      case "up": {
        y -= tileSize;
        break;
      }
      case "down": {
        y += tileSize;
        break;
      }
      case "left": {
        x -= tileSize;
        break;
      }
      case "right": {
        x += tileSize;
        break;
      }
      default:
        break;
    }
    return { x, y };
  },

  emitEvent(name, detail) {
    const event = new CustomEvent(name, {
      detail,
    });
    document.dispatchEvent(event);
  },
};
