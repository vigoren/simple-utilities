export type DarkModeConfig = {
    attribute: "class" | "data-theme" | string;
    iconProvider: "fontawesome" | "material" | "none";
    elementId: string;
};
