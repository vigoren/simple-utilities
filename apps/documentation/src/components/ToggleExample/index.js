import React from "react";

class ToggleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id };
    }

    render() {
        return (
            <div style={{ marginBottom: "1rem" }}>
                <label>
                    <input type="checkbox" id={this.state.id} className="simple-toggle" />
                    <span>Simple Toggle</span>
                </label>
            </div>
        );
    }
}

export default ToggleExample;
