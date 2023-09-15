export class MultiSelect {
    static #defaultOptions: MultiSelectOptions = {
        id: "",
        options: []
    };

    #showClicked = false;

    #noneSelectedText = "None Selected";

    #wrapper: HTMLDivElement;
    #elementId: string = "";
    #element: HTMLSelectElement | null = null;
    #label: HTMLLabelElement | null = null;
    #buttonTextElement: HTMLSpanElement | null = null;

    #options: MultiSelectOption[] = [];

    constructor(selectElement: HTMLSelectElement, labelElement: HTMLLabelElement) {
        this.#element = selectElement;
        this.#elementId = selectElement.getAttribute("id") || "";
        this.#label = labelElement;
        this.#wrapper = this.#createWrapper();
        this.#label.id = `${this.#elementId}_label`;
        this.#process();
    }

    #process() {
        if (this.#element) {
            //Read data attributes
            this.#noneSelectedText = this.#element.attributes.getNamedItem("data-none-selected-text")?.value || "None Selected";
            //Create Wrapper
            let elementParent = this.#element.parentElement;
            if (this.#label && this.#label === elementParent) {
                elementParent = this.#label.parentElement;
                elementParent?.insertBefore(this.#wrapper, this.#label);
            } else {
                elementParent?.insertBefore(this.#wrapper, this.#element);
            }
            this.#element.style.display = "none";
            this.#element.setAttribute("aria-hidden", "true");
            this.#wrapper.appendChild(this.#element);
            const options = this.#createOptions();
            this.#wrapper.appendChild(this.#createSelectButton());
            this.#wrapper.appendChild(options);
            if (this.#label) {
                this.#wrapper.appendChild(this.#label);
            }
            document.body.addEventListener("click", this.#bodyClick);
        }
    }

    #createWrapper() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("sms-wrapper");
        return wrapper;
    }

    #createSelectButton() {
        const button = document.createElement("button");
        button.classList.add("sms-button");
        this.#buttonTextElement = document.createElement("span");
        this.#buttonTextElement.classList.add("sms-selected-items");
        this.#buttonTextElement.innerText = this.#buttonText;
        button.appendChild(this.#buttonTextElement);
        const buttonIcon = document.createElement("span");
        buttonIcon.classList.add("sms-icon");
        button.appendChild(buttonIcon);
        button.setAttribute("aria-haspopup", "listbox");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `${this.#elementId}_options`);
        button.addEventListener("click", this.#buttonClick);
        return button;
    }

    get #buttonText() {
        const selectedOptions = this.#options
            .filter((o) => {
                return o.selected && !o.makeOthersMatch;
            })
            .map((o) => {
                return o.text;
            });
        if (selectedOptions.length) {
            return selectedOptions.join(", ");
        } else {
            return this.#noneSelectedText;
        }
    }

    #createOptions() {
        const options = document.createElement("ul");
        options.id = `${this.#elementId}_options`;
        options.classList.add("sms-options");
        options.setAttribute("role", "listbox");
        options.setAttribute("aria-multiselectable", "true");
        options.setAttribute("aria-labelledby", `${this.#elementId}_label`);
        if (this.#element) {
            const origOptions = this.#element.querySelectorAll("option");
            for (let i = 0; i < origOptions.length; i++) {
                const option = origOptions[i];
                const optionElement = this.#createOption(option);
                if (optionElement) {
                    options.appendChild(optionElement);
                }
            }
        }
        return options;
    }

    #createOption(option: HTMLOptionElement) {
        const optionData: MultiSelectOption = {
            value: option.value,
            text: option.text,
            selected: option.selected,
            disabled: option.disabled,
            makeOthersMatch: option.hasAttribute("data-make-others-match")
        };
        const optionElement = document.createElement("li");
        optionElement.classList.add("sms-option");
        optionElement.setAttribute("role", "option");
        optionElement.setAttribute("data-value", option.value);
        optionElement.innerHTML = `<span class="sms-checkbox"></span> ${option.text}`;
        //Check if option is disabled
        if (option.disabled) {
            optionElement.classList.add("sms-disabled");
            optionElement.setAttribute("aria-disabled", "true");
        }
        //Check if option is selected
        this.#updateOption(optionElement, option.selected);
        optionElement.addEventListener("click", this.#optionClick);
        this.#options.push(optionData);
        return optionElement;
    }

    #bodyClick = () => {
        const options = this.#wrapper.querySelector(".sms-options");
        const button = this.#wrapper.querySelector(".sms-button");
        if (options && button) {
            if (options.classList.contains("sms-show") && !this.#showClicked) {
                options.classList.remove("sms-show");
                button.setAttribute("aria-expanded", "false");
            } else {
                this.#showClicked = false;
            }
        }
    };

    #buttonClick = () => {
        const options = this.#wrapper.querySelector(".sms-options");
        const button = this.#wrapper.querySelector(".sms-button");
        if (options && button) {
            if (!options.classList.contains("sms-show")) {
                options.classList.add("sms-show");
                button.setAttribute("aria-expanded", "true");
                this.#showClicked = true;
            }
        }
    };

    #optionClick = (event: Event) => {
        event.stopPropagation();
        const target = (<HTMLElement>event.target)?.closest("li");
        if (target && !(<HTMLElement>target).classList.contains("sms-disabled")) {
            this.#updateOption(target, !(<HTMLElement>target).classList.contains("sms-selected"));
            const value = (<HTMLElement>target).getAttribute("data-value");
            const selected = (<HTMLElement>target).classList.contains("sms-selected");
            const optionIndex = this.#options.findIndex((o: MultiSelectOption) => {
                return o.value === value;
            });
            if (optionIndex > -1) {
                this.#options[optionIndex].selected = selected;
                if (this.#options[optionIndex].makeOthersMatch) {
                    this.#options.forEach((o, index) => {
                        if (index !== optionIndex && !o.disabled) {
                            o.selected = selected;
                            const optionElement = <HTMLElement>this.#wrapper.querySelector(`li[data-value="${o.value}"]`);
                            if (optionElement) {
                                this.#updateOption(optionElement, selected);
                            }
                        }
                    });
                } else {
                    const optionsUnselected = this.#options.filter((o) => {
                        return !o.makeOthersMatch && !o.selected && !o.disabled;
                    });
                    this.#options.forEach((o, index) => {
                        if (index !== optionIndex && o.makeOthersMatch) {
                            if (selected && optionsUnselected.length === 0) {
                                o.selected = true;
                            } else if (!selected) {
                                o.selected = false;
                            }
                            const optionElement = <HTMLElement>this.#wrapper.querySelector(`li[data-value="${o.value}"]`);
                            if (optionElement) {
                                this.#updateOption(optionElement, selected && optionsUnselected.length === 0);
                            }
                        }
                    });
                }
            }
            this.#updateOriginalSelect();
            if (this.#buttonTextElement) {
                this.#buttonTextElement.innerText = this.#buttonText;
            }
        }
    };

    #updateOriginalSelect() {
        if (this.#element) {
            const options = this.#element.querySelectorAll("option");
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                const optionData = this.#options.find((o) => {
                    return o.value === option.value;
                });
                if (optionData) {
                    option.selected = optionData.selected;
                    option.disabled = optionData.disabled;
                }
            }
        }
    }

    #updateOption(option: HTMLElement, selected: boolean) {
        if (selected) {
            option.setAttribute("aria-selected", "true");
            option.classList.add("sms-selected");
        } else {
            option.setAttribute("aria-selected", "false");
            option.classList.remove("sms-selected");
        }
    }
}

export function InitializeAllMultiSelects() {
    const multiSelects = document.querySelectorAll("select[multiple]");
    const initializedMultiSelects: MultiSelect[] = [];
    for (let i = 0; i < multiSelects.length; i++) {
        const multiSelect = multiSelects[i];
        if (multiSelect instanceof HTMLSelectElement) {
            let labelElement: HTMLLabelElement | null = null;

            //Find associated label element
            const multiSelectId = multiSelect.getAttribute("id");
            if (multiSelectId) {
                labelElement = document.querySelector(`label[for="${multiSelectId}"]`);
            }

            //If no label element found, look to see if the parent element is a label
            if (!labelElement) {
                const parentElement = multiSelect.parentElement;
                if (parentElement instanceof HTMLLabelElement) {
                    labelElement = parentElement;
                }
            }

            //If the parent element is not a label, create one
            if (!labelElement) {
                labelElement = document.createElement("label");
                labelElement.innerText = multiSelect.getAttribute("data-label") || "";
            }

            const multiSelectElement = new MultiSelect(multiSelect, labelElement);
            initializedMultiSelects.push(multiSelectElement);
        }
    }
    return initializedMultiSelects;
}
