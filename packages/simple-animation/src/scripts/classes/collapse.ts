export class Collapse {
    constructor() {}

    static initialize() {
        const collapses = Collapse.#findAllCollapses();
        collapses.forEach((collapse) => {
            collapse.removeEventListener("click", Collapse.#toggleCollapse);
            collapse.addEventListener("click", Collapse.#toggleCollapse);
            if ((<HTMLElement>collapse).dataset.saCollapse) {
                const target = <HTMLElement>document.querySelector((<HTMLElement>collapse).dataset.saCollapse || "");
                if (target) {
                    target.style.setProperty("--simple-animation-collapse-max-height", Collapse.#getTargetHeight(target));
                }
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
            if (parent && parent.dataset.saCollapse) {
                const target = <HTMLElement>document.querySelector(parent.dataset.saCollapse);
                if (target) {
                    if (target.classList.contains("sa-collapsed")) {
                        target.classList.remove("sa-collapsed", "sa-collapse-up");
                        target.classList.add("sa-expand-down");
                    } else {
                        target.classList.remove("sa-expand-down");
                        target.classList.add("sa-collapsed", "sa-collapse-up");
                    }
                }
            }
        }
    }
}
