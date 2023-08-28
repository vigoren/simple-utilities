import React from "react";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

import { Collapse } from "@simple-web-utilities/simple-animation";

class AnimationExample extends React.Component {
    expandExample;
    collapseExample;
    constructor(props) {
        super(props);
        const animation = props.animation || "";
        const text = props.text || "";
        this.expandExample = props.expandExample || false;
        this.collapseExample = props.collapseExample || false;

        this.state = { animation: animation, text: text, duration: "", repeat: "", delay: "" };
    }

    onDurationChange(e) {
        const select = e.target;
        if (select) {
            const value = select.options[select.selectedIndex].value;
            if (value) {
                this.setState({ duration: value });
            } else {
                this.setState({ duration: "" });
            }
        }
    }

    onRepeatChange(e) {
        const select = e.target;
        if (select) {
            const value = select.options[select.selectedIndex].value;
            if (value) {
                this.setState({ repeat: value });
            } else {
                this.setState({ repeat: "" });
            }
        }
    }

    onDelayChange(e) {
        const checkbox = e.target;
        if (checkbox) {
            const value = checkbox.checked;
            if (value) {
                this.setState({ delay: "sa-delay" });
            } else {
                this.setState({ delay: "" });
            }
        }
    }

    runAnimation(e) {
        Collapse.initialize();
        const button = e.target;
        if (button) {
            const animation = button.dataset.animation;
            const preview = button.previousSibling.firstChild;
            if (animation && preview) {
                preview.classList.remove(animation);
                preview.offsetWidth;
                preview.classList.add(animation);
            }
        }
    }

    render() {
        let finalClass = [this.state.duration, this.state.repeat, this.state.delay]
            .filter((e) => {
                return e;
            })
            .join(" ");
        if (finalClass) {
            finalClass = " " + finalClass;
        }
        return (
            <>
                <div className={styles.exampleContainer}>
                    <div className={styles.animation}>
                        <div className={styles.previewWrapper}>
                            <div
                                data-preview="true"
                                className={`${styles.preview} simple-animation ${finalClass} ${
                                    this.expandExample ? styles.expandExample : this.collapseExample ? styles.collapseExample : ""
                                }`}
                            >
                                {this.expandExample || this.collapseExample ? (
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                        <li>Item 5</li>
                                    </ul>
                                ) : (
                                    this.state.text
                                )}
                            </div>
                        </div>
                        <button
                            type="button"
                            data-animation={this.state.animation}
                            onClick={this.runAnimation}
                            data-sa-collapse={
                                this.expandExample ? `.${styles.expandExample}` : this.collapseExample ? `.${styles.collapseExample}` : ""
                            }
                        >
                            Run Animation
                        </button>
                    </div>
                    <div className={styles.options}>
                        <strong className={styles.title}>Options</strong>
                        <div className={styles.group}>
                            <select onChange={this.onRepeatChange.bind(this)}>
                                <option value="">No Repeat</option>
                                <option value="sa-infinite">Infinite Repeat</option>
                            </select>
                            <label>Repeat Animation</label>
                        </div>
                        <div className={styles.group}>
                            <select defaultValue="" onChange={this.onDurationChange.bind(this)}>
                                <option value="sa-duration-quadruple">Quadruple Duration</option>
                                <option value="sa-duration-triple">Triple Duration</option>
                                <option value="sa-duration-double">Double Duration</option>
                                <option value="">Normal Duration</option>
                                <option value="sa-duration-half">Half Duration</option>
                                <option value="sa-duration-third">Third Duration</option>
                                <option value="sa-duration-quarter">Quarter Duration</option>
                            </select>
                            <label>Animation Duration</label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" onChange={this.onDelayChange.bind(this)} /> Delay Animation
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.code}>
                    <CodeBlock
                        language="html"
                        showLineNumbers
                    >{`<div className="simple-animation ${this.state.animation}${finalClass}">${this.state.text}</div>`}</CodeBlock>
                </div>
            </>
        );
    }
}
export default AnimationExample;
