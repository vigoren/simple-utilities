import type { MultiSelectOption, onChangeCallback } from "../types.d.ts";

/**
 * A class to convert a native select element into a multi-select that resembles a native select element.
 */
export class MultiSelect {
    /**
     * If the select allows multiple selections.
     * @private
     */
    #isMultiple: boolean = false;
    /**
     * If the main button was clicked to show the options.
     * Used to tell the registered body click event to not hide the just opened options.
     * @private
     */
    #showClicked = false;
    /**
     * The text to display on the main button when no options are selected.
     * @private
     */
    #noneSelectedText = "None Selected";
    /**
     * The wrapper element that contains the multi-select.
     * @private
     */
    readonly #wrapper: HTMLDivElement;
    /**
     * The id of the native select element.
     * @private
     */
    readonly #elementId: string = "";
    /**
     * The native select element.
     * @private
     */
    readonly #element: HTMLSelectElement | null = null;
    /**
     * The label element associated with the native select element.
     * @private
     */
    #label: HTMLLabelElement | null = null;
    /**
     * The element that displays the currently selected options.
     * @private
     */
    #buttonTextElement: HTMLSpanElement | null = null;
    /**
     * The array of options for the multi-select.
     * @private
     */
    #options: MultiSelectOption[] = [];
    /**
     * The callback function to call when the selected values change.
     * @private
     */
    #onChangeCallback: onChangeCallback | null = null;
    /**
     * The help text to display below the multi-select.
     * @private
     */
    #helpText: string = "";
    /**
     * If changing the label should be ignored.
     * @private
     */
    #ignoreLabel: boolean = false;

    /**
     * Creates a new MultiSelect
     * @param selectElement The native select element to convert to a multi-select
     * @param onChangeCallback (Optional) The callback function to call when the selected values change. The function will be passed the multi-select id and an array of selected values
     */
    constructor(selectElement: HTMLSelectElement, onChangeCallback: onChangeCallback | null = null) {
        this.#element = selectElement;
        this.#elementId = selectElement.getAttribute("id") || "";
        this.#isMultiple = this.#element.hasAttribute("multiple");
        this.#ignoreLabel = this.#element.hasAttribute("data-ignore-label");
        this.#wrapper = this.#createWrapper();
        this.#findLabel();
        if (onChangeCallback) {
            this.#onChangeCallback = onChangeCallback;
        }
        this.#process();
    }

    /**
     * Finds the label element associated with the native select element.
     * Checks if there is a label with a `for` attribute that matches the native select element's id.
     * If no label is found, checks if the parent element is a label.
     * If the parent element is not a label, creates a new label element.
     * @private
     */
    #findLabel() {
        if (!this.#ignoreLabel) {
            //Find associated label element
            this.#label = document.querySelector(`label[for="${this.#elementId}"]`);

            //If no label element found, look to see if the parent element is a label
            if (!this.#label) {
                const parentElement = this.#element?.parentElement;
                if (parentElement instanceof HTMLLabelElement) {
                    this.#label = parentElement;
                }
            }
            //If the parent element is not a label, create one
            if (!this.#label) {
                this.#label = document.createElement("label");
                this.#label.innerText = this.#element?.getAttribute("data-label") || "";
                this.#label.id = `${this.#elementId}_label`;
                this.#label.htmlFor = this.#elementId;
            }
        }
    }

    /**
     * Processes the native select element to create the multi-select.
     * @private
     */
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
            //Add help text
            this.#helpText = this.#element.getAttribute("data-help-text") || "";
            if (this.#helpText) {
                const helpTextElement = document.createElement("div");
                helpTextElement.classList.add("sms-help-text");
                helpTextElement.innerText = this.#helpText;
                this.#wrapper.appendChild(helpTextElement);
            }
            document.body.addEventListener("click", this.#bodyClick);
        }
    }

    /**
     * Creates the wrapper element for the multi-select.
     * @returns {HTMLDivElement} Returns the wrapper element
     * @private
     */
    #createWrapper(): HTMLDivElement {
        const wrapper = document.createElement("div");
        wrapper.classList.add("sms-wrapper");
        if (this.#isMultiple) {
            wrapper.classList.add("sms-multiple");
        }
        if (this.#ignoreLabel) {
            wrapper.classList.add("sms-no-label");
        }
        return wrapper;
    }

    /**
     * Creates the main button for the multi-select.
     * @returns {HTMLButtonElement} Returns the main button element
     * @private
     */
    #createSelectButton(): HTMLButtonElement {
        const button = document.createElement("button");
        button.classList.add("sms-button");
        button.setAttribute("type", "button");
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

    /**
     * Gets the text to display on the main button.
     * @returns {string} Returns the text to display on the main button
     * @private
     */
    get #buttonText(): string {
        const selectedOptions = this.#options
            .filter((o) => {
                return this.#isMultiple ? o.selected && !o.makeOthersMatch : o.selected;
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

    /**
     * Creates the options for the multi-select.
     * @returns {HTMLUListElement} Returns the options element
     * @private
     */
    #createOptions(): HTMLUListElement {
        const options = document.createElement("ul");
        options.id = `${this.#elementId}_options`;
        options.classList.add("sms-options");
        options.setAttribute("role", "listbox");
        options.setAttribute("aria-multiselectable", "true");
        options.setAttribute("aria-labelledby", `${this.#elementId}_label`);
        if (this.#element) {
            const origOptions = this.#element.querySelectorAll("option");
            let selectedCount = 0;
            for (let i = 0; i < origOptions.length; i++) {
                const option = origOptions[i];
                if (option.selected) {
                    selectedCount++;

                    //If this is a single select any subsequent selected items will be set to unselected.
                    if (!this.#isMultiple && selectedCount > 1) {
                        option.selected = false;
                    }
                }
                const optionElement = this.#createOption(option);
                if (optionElement) {
                    options.appendChild(optionElement);
                }
            }
        }
        return options;
    }

    /**
     * Creates an option for the multi-select based on the native select option.
     * @param option
     * @returns {HTMLLIElement} Returns the option element
     * @private
     */
    #createOption(option: HTMLOptionElement): HTMLLIElement {
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
        if (this.#isMultiple) {
            optionElement.innerHTML = `<span class="sms-checkbox"></span> ${option.text}`;
        } else {
            optionElement.innerHTML = option.text;
        }

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

    /**
     * Handles the body click event to hide the options when the user clicks outside of the multi-select.
     * @private
     */
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

    /**
     * Handles the button click event to show the options.
     *
     * @private
     */
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

    /**
     * Handles the option click event to update the selected options.
     * Will call the onChangeCallback function if it is set.
     * @param event The click event
     * @private
     */
    #optionClick = (event: Event) => {
        event.stopPropagation();
        const target = (<HTMLElement>event.target)?.closest("li");
        if (target && !(<HTMLElement>target).classList.contains("sms-disabled")) {
            const value = (<HTMLElement>target).getAttribute("data-value");
            const selected = (<HTMLElement>target).classList.contains("sms-selected");
            const optionIndex = this.#options.findIndex((o: MultiSelectOption) => {
                return o.value === value;
            });
            if (this.#isMultiple) {
                this.#updateOption(target, !(<HTMLElement>target).classList.contains("sms-selected"));
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
            } else {
                //this.#options[optionIndex].selected = true;
                this.#options.forEach((o, index) => {
                    if (!o.disabled) {
                        o.selected = index === optionIndex;
                        const optionElement = <HTMLElement>this.#wrapper.querySelector(`li[data-value="${o.value}"]`);
                        if (optionElement) {
                            this.#updateOption(optionElement, o.selected);
                        }
                    }
                });
                this.#bodyClick();
            }

            this.#updateOriginalSelect();
            if (this.#buttonTextElement) {
                this.#buttonTextElement.innerText = this.#buttonText;
            }
            if (this.#onChangeCallback) {
                this.#onChangeCallback(
                    this.#elementId,
                    this.#options
                        .filter((o) => {
                            return this.#isMultiple ? o.selected && !o.makeOthersMatch : o.selected;
                        })
                        .map((o) => {
                            return o.value;
                        })
                );
            }
        }
    };

    /**
     * Updates the native select element to match the selected options.
     * @private
     */
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

    /**
     * Updates the option element to match the selected state.
     * @param option The option element to update.
     * @param selected If the option should be selected or not.
     * @private
     */
    #updateOption(option: HTMLElement, selected: boolean) {
        if (selected) {
            option.setAttribute("aria-selected", "true");
            option.classList.add("sms-selected");
        } else {
            option.setAttribute("aria-selected", "false");
            option.classList.remove("sms-selected");
        }
    }

    /**
     * Gets the id of the multi-select.
     * @returns {string} Returns the id of the multi-select
     */
    get id(): string {
        return this.#elementId;
    }

    /**
     * Gets the currently selected values.
     * @returns {string[]} Returns an array of selected values
     */
    get selectedValues(): string[] {
        return this.#options
            .filter((o) => {
                return this.#isMultiple ? o.selected && !o.makeOthersMatch : o.selected;
            })
            .map((o) => {
                return o.value;
            });
    }

    /**
     * Registers a callback function to be called when the selected values change
     * @param onChangeCallback The function to call. The function will be passed the multi-select id and an array of selected values
     */
    registerOnChangeCallback(onChangeCallback: onChangeCallback) {
        this.#onChangeCallback = onChangeCallback;
    }
}

/**
 * This function initializes all multi-selects on the page.
 * Searches for all native selects with the `multiple` attribute, insures they have not already been initialized, and initializes them.
 * @param {HTMLElement | Document} root The root element to search for multi-selects. Defaults to the document.
 * @returns {MultiSelect[]} Returns an array of initialized multi-selects.
 */
export function InitializeAllMultiSelects(root: HTMLElement | Document = document): MultiSelect[] {
    const multiSelects = root.querySelectorAll("select");
    const initializedMultiSelects: MultiSelect[] = [];
    for (let i = 0; i < multiSelects.length; i++) {
        const multiSelect = multiSelects[i];
        if (multiSelect instanceof HTMLSelectElement && !multiSelect.parentElement?.classList.contains("sms-wrapper")) {
            const multiSelectElement = new MultiSelect(multiSelect);
            initializedMultiSelects.push(multiSelectElement);
        }
    }
    return initializedMultiSelects;
}
