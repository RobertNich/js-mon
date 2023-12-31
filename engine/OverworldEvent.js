import TextMessage from "./TextMessage.js";

export default class OverworldEvent {
  constructor({ map, event }) {
    this.map = map;
    this.event = event;
  }

  stand(resolve) {
    const actor = this.map.gameObjects[this.event.actor];
    actor.startBehaviour(
      { map: this.map },
      {
        type: "stand",
        direction: this.event.direction,
        duration: this.event.duration,
      }
    );

    const completeHandler = (e) => {
      if (e.detail.actorId === this.event.actor) {
        document.removeEventListener("PersonStandingComplete", completeHandler);
        resolve();
      }
    };

    document.addEventListener("PersonStandingComplete", completeHandler);
  }

  walk(resolve) {
    const actor = this.map.gameObjects[this.event.actor];
    actor.startBehaviour(
      { map: this.map },
      {
        type: "walk",
        direction: this.event.direction,
      }
    );

    const completeHandler = (e) => {
      if (e.detail.actorId === this.event.actor) {
        document.removeEventListener("PersonWalkingComplete", completeHandler);
        resolve();
      }
    };

    document.addEventListener("PersonWalkingComplete", completeHandler);
  }

  textMessage(resolve) {
    const message = new TextMessage({
      speaker: this.event.speaker,
      text: this.event.text,
      onComplete: () => resolve()
    })
    message.init(document.querySelector(".game-container"))
  }

  init() {
    return new Promise((resolve) => {
      this[this.event.type](resolve);
    });
  }
}
