import GameObject from "./GameObject.js";
import { utils } from "./utils.js";

export default class Person extends GameObject {
  constructor(config) {
    super(config);

    this.movingProgressRemaining = 0;
    this.isStanding = false;
    this.isPlayerControlled = config.isPlayerControlled || false;
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
      this.updatePosition();
    } else {
      if (!state.map.isCutscenePlaying && this.isPlayerControlled && state.vector) {
        this.startBehaviour(state, {
          type: "walk",
          direction: state.vector,
        });
      }
      this.updateSprite(state);
    }
  }

  startBehaviour(state, behaviour) {
    this.direction = behaviour.direction;
    if (behaviour.type === "walk") {
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        return;
      }
      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemaining = 16;
      this.updateSprite(state);
    }

    if (behaviour.type === "stand") {
      this.isStanding = true;
      setTimeout(() => {
        utils.emitEvent("PersonStandingComplete", {
          actorId: this.id,
        });
        this.isStanding = false;
      }, behaviour.duration);
    }
  }

  updatePosition() {
    const [property, change] = this.directionUpdate[this.direction];
    this[property] += change;
    this.movingProgressRemaining -= 1;

    if (this.movingProgressRemaining === 0) {
      utils.emitEvent("PersonWalkingComplete", {
        actorId: this.id,
      });
    }
  }

  updateSprite() {
    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
      return;
    }
    this.sprite.setAnimation("idle-" + this.direction);
  }
}
