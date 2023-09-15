import React from "react";
import styles from "./styles.module.css";

export default function Row(props) {
    return <div className={styles.row}>{props.children}</div>;
}
