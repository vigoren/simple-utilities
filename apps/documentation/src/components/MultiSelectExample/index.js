import React from "react";
import styles from "./styles.module.css";

class MultiSelectExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, helpText: props.helpText };
    }

    componentDidMount() {
        const { MultiSelect, InitializeAllMultiSelects } = require("@simple-web-utilities/simple-multi-select");
        InitializeAllMultiSelects();
    }

    render() {
        const helpText = this.state.helpText || "";
        return (
            <div>
                <select id={this.state.id} multiple data-none-selected-text="Nothing Selected" data-help-text={helpText} defaultValue={["1"]}>
                    <option value="all" data-make-others-match="">
                        All
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3" disabled>
                        Option 3
                    </option>
                    <option value="4">Option 4</option>
                </select>
                <label htmlFor={this.state.id}>This is an Example Simple Multi-Select</label>
            </div>
        );
    }
}

export default MultiSelectExample;
