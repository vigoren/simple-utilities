import React from "react";
import styles from "./styles.module.css";

export default function FeatureBlock(props) {
    return (
        <div className={`${styles.featureBlock} simple-animation sa-fade-in`}>
            <h3>
                <a className={styles.stretchLink} href={props.link}>
                    {props.title}
                </a>
            </h3>
            {props.children}
        </div>
    );
}
