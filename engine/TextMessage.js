export default class TextMessage {
    constructor({text, speaker, onComplete}) {
        this.text = text;
        this.speaker = speaker;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("text-message");

        this.element.innerHTML = (`
            <h5 class="text-message-speaker">${this.speaker}</h5>
            <p class="text-message-p">${this.text}</p>
            <button class="text-message-button">Next</button>
        `)

        this.element.querySelector("button").addEventListener("click", () => {
            this.done();
        })
    }

    done() {
        this.element.remove();
        this.onComplete();
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}