import React from "react";
import styles from "./styles.module.css";

export default function Column(props) {
    const className = styles[props.className] || "";
    return <div className={`${styles.col} ${className}`}>{props.children}</div>;
}
