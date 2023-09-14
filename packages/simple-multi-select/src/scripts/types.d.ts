interface MultiSelectOptions {
    /** The ID of the HTML element being added */
    id: string;
    /** The options of the select that can be chosen by a user */
    options: MultiSelectOption[];
}

interface MultiSelectOption {
    value: string;
    text: string;
    selected: boolean;
    disabled: boolean;
    makeOthersMatch: boolean;
}
