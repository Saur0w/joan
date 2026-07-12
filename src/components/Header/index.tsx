"use client";

import styles from "./style.module.scss";
import Button from "./Button";
import {useState} from "react";

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <header className={styles.header}>
            <Button isActive={isActive} setIsActive={setIsActive} />
        </header>
    )
}