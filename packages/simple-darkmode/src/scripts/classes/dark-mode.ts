import type { DarkModeConfig } from "../types.d.ts";

enum Modes {
    LIGHT = "light",
    DARK = "dark",
    SYSTEM = "system"
}

export class DarkMode {
    /**
     * The key used to store the preference in local storage
     * @private
     */
    readonly #localStorageKey = "simple-dark-mode";
    /**
     * The attribute on the html element to update with the theme
     * Options are "class", "data-theme", or any other data attribute
     * @private
     */
    readonly #attribute: "class" | "data-theme" | string;
    /**
     * The icon provider to use for the toggle button
     * Options are "fontawesome", "material", "octicons", or "none"
     * @private
     */
    readonly #iconProvider: "fontawesome" | "material" | "custom" | "none";
    /**
     * The id of the element to use as the toggle button
     * @private
     */
    readonly #elementId: string;
    /**
     * The observer to watch for changes to the html element
     * @private
     */
    #observer: MutationObserver;

    #customIcons: { light: string | HTMLElement; dark: string | HTMLElement } | undefined;
    constructor(config: DarkModeConfig = { elementId: "", attribute: "class", iconProvider: "none" }) {
        this.#attribute = config.attribute;
        this.#iconProvider = config.iconProvider;
        this.#elementId = config.elementId;
        this.#observer = new MutationObserver(this.#mutationCallback);

        if (config.customIcons) {
            this.#customIcons = config.customIcons;
        }

        let theme: Modes;
        if (!(this.#localStorageKey in localStorage)) {
            theme = this.#getSystemPreference();
        } else {
            theme = this.#getPreference();
        }

        this.#setPreference(theme);
        this.#updateAttribute(theme);
        this.#createHTML();
        this.#observer.observe(document.documentElement, { attributes: true });
    }

    /**
     * Checks the system preference for dark mode
     * @private
     * @returns {Modes} The system preference for dark mode
     */
    #getSystemPreference(): Modes {
        let theme = Modes.LIGHT;
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            theme = Modes.DARK;
        }
        return theme;
    }

    /**
     * Saves the preference to local storage
     * @param value The value to save
     * @private
     */
    #setPreference(value: Modes) {
        localStorage.setItem(this.#localStorageKey, value);
    }

    /**
     * Gets the preference from local storage, if the preference is set to system, it will check the system preference
     * @returns {Modes} The preference
     * @private
     */
    #getPreference(): Modes {
        let theme = localStorage.getItem(this.#localStorageKey) as Modes;
        if (theme === Modes.SYSTEM) {
            theme = this.#getSystemPreference();
        }
        return theme;
    }

    /**
     * Updates the attribute on the html element
     * @param value The value to set the attribute to
     * @private
     */
    #updateAttribute(value: Modes) {
        if (this.#attribute === "class") {
            document.documentElement.classList.remove(Modes.LIGHT, Modes.DARK, Modes.SYSTEM);
            document.documentElement.classList.add(value);
        } else {
            document.documentElement.setAttribute(this.#attribute, value);
        }
    }

    /**
     * Updates the element to act as the toggle button for toggling the theme
     * @private
     */
    #createHTML() {
        const element = document.getElementById(this.#elementId);
        if (element) {
            if (!(element instanceof HTMLButtonElement)) {
                element.setAttribute("role", "button");
            }
            element.classList.add("simple-dark-mode-toggle");

            const theme = this.#getPreference();
            this.#setButtonIcon(element, theme);
            element.addEventListener("click", this.#onClick);
        }
    }

    /**
     * Sets the icon on the button, or text if no icon is used
     * @param element The element to add the icon to
     * @param theme The theme to use to determine the icon
     * @private
     */
    #setButtonIcon(element: HTMLElement, theme: Modes) {
        if (this.#iconProvider !== "none") {
            const icon = document.createElement("i");
            icon.classList.add("simple-dark-mode-icon");
            switch (this.#iconProvider) {
                case "custom":
                    if (this.#customIcons) {
                        if (theme === Modes.DARK) {
                            icon.innerHTML =
                                this.#customIcons.light instanceof HTMLElement ? this.#customIcons.light.innerHTML : this.#customIcons.light;
                        } else {
                            icon.innerHTML =
                                this.#customIcons.dark instanceof HTMLElement ? this.#customIcons.dark.innerHTML : this.#customIcons.dark;
                        }
                    }
                    break;
                case "material":
                    icon.classList.add("material-symbols-outlined");
                    if (theme === Modes.DARK) {
                        icon.innerHTML = "light_mode";
                    } else {
                        icon.innerHTML = "dark_mode";
                    }
                    break;
                case "fontawesome":
                default:
                    icon.classList.add("fas");
                    if (theme === Modes.DARK) {
                        icon.classList.add("fa-sun");
                    } else {
                        icon.classList.add("fa-moon");
                    }
                    break;
            }
            element.replaceChildren(icon);
        } else {
            element.innerText = theme === Modes.DARK ? "Light Mode" : "Dark Mode";
        }

        if (theme === Modes.DARK) {
            element.setAttribute("aria-label", "Toggle light mode");
        } else {
            element.setAttribute("aria-label", "Toggle dark mode");
        }
    }

    /**
     * Updates the button to reflect the current theme
     * @param value The theme to use to update the button
     * @private
     */
    #updateHTML(value: Modes) {
        const element = document.getElementById(this.#elementId);
        if (element) {
            this.#setButtonIcon(element, value);
        }
    }

    /**
     * Handles the click event on the button
     * @private
     */
    #onClick = () => {
        let theme = this.#getPreference();
        if (theme === Modes.DARK) {
            theme = Modes.LIGHT;
        } else {
            theme = Modes.DARK;
        }
        this.#setPreference(theme);
        this.#updateAttribute(theme);
        this.#updateHTML(theme);
    };

    /**
     * Watches for attribute changes on the HTML element and updates our button if the theme changes
     * @param mutations
     * @private
     */
    #mutationCallback = (mutations: MutationRecord[]) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes") {
                const theme = this.#getPreference();
                this.#updateHTML(theme);
            }
        });
    };
}
