"use client";

import styles from "./style.module.scss";

export default function Button() {
    return (
        <div className={styles.button}>
            <div className={styles.el}>
                <p>Menu</p>
            </div>
            <div className={styles.el}>
                <p>Close</p>
            </div>
        </div>
    )
}