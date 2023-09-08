import Sprite from "./Sprite.js";
import OverworldEvent from "./OverworldEvent.js";

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
    this.behaviourLoop = config.behaviourLoop || [];
    this.behaviourLoopIndex = 0;
  }

  mount(map) {
    this.isMounted = true;
    map.addWall(this.x, this.y);

    setTimeout(() => {
      this.doBehaviourEvent(map);
    }, 10);
  }

  update() {}

  async doBehaviourEvent(map) {
    if (map.isCutscenePlaying || this.behaviourLoop.length === 0) {
      console.log(this.id);
      console.log("RETURNING ");
      return;
    }

    let eventConfig = this.behaviourLoop[this.behaviourLoopIndex];
    eventConfig.actor = this.id;

    const eventHandler = new OverworldEvent({ map, event: eventConfig });
    await eventHandler.init();

    this.behaviourLoopIndex += 1;
    if (this.behaviourLoopIndex === this.behaviourLoop.length) {
      this.behaviourLoopIndex = 0;
    }
    this.doBehaviourEvent(map);
  }
}
