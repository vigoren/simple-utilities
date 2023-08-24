export class Collapse {
    constructor() {}

    static initialize() {
        const collapses = this.#findAllCollapses();
        collapses.forEach((collapse) => {
            collapse.addEventListener("click", this.#toggleCollapse.bind(this));
            const target = <HTMLElement>document.querySelector((<HTMLElement>collapse).dataset.saCollapse || "");
            if (target) {
                target.style.setProperty("--simple-animation-collapse-max-height", this.#getTargetHeight(target));
            }
        });
    }

    static #findAllCollapses() {
        return document.querySelectorAll("*[data-sa-collapse]");
    }

    static #getTargetHeight(target: HTMLElement) {
        return `${Math.max(target.offsetHeight, target.scrollHeight, target.clientHeight)}px`;
    }

    static #toggleCollapse(event: Event) {
        const collapse = <HTMLElement>event.target;
        if (collapse) {
            const parent = <HTMLElement>collapse.closest("*[data-sa-collapse]");
            if (parent) {
                const target = <HTMLElement>document.querySelector(parent.dataset.saCollapse || "");
                if (target) {
                    target.classList.toggle("sa-collapse");
                    target.classList.toggle("sa-expand");
                }
            }
        }
    }
}
