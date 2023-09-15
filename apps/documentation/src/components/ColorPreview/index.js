import React from "react";
import styles from "./styles.module.css";

export default function ColorPreview(props) {
    return (
        <div className={styles.colorPreviewWrapper}>
            <div className={styles.colorPreview} style={{ backgroundColor: props.color }}></div>
            {props.color}
        </div>
    );
}
