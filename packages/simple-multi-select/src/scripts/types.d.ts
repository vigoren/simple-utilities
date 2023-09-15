export interface MultiSelectOption {
    value: string;
    text: string;
    selected: boolean;
    disabled: boolean;
    makeOthersMatch: boolean;
}

/**
 * The expected function to call when an option is changed
 * @param {string} multiSelectId The id of the multi select that was changed
 * @param {string[]} values The selected values
 */
export type onChangeCallback = (multiSelectId: string, values: string[]) => void;
