export type DarkModeConfig = {
    attribute: "class" | "data-theme" | string;
    iconProvider: "fontawesome" | "material" | "custom" | "none";
    elementId: string;
    customIcons?: {
        light: string | HTMLElement;
        dark: string | HTMLElement;
    };
};
