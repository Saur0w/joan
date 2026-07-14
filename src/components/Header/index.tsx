"use client";

import styles from "./style.module.scss";
import Button from "./Button";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Nav from "./Nav";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const headerRef = useRef<HTMLHeadElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(menuRef.current, {
            width: isActive ? "480px" : "100px",
            height: isActive ? "650px" : "40px",
            top: isActive ? "-25px" : "0px",
            left: isActive ? "-25px" : "0px",
            duration: 0.75,
            ease: "power2.inOut",

        });
    }, { scope: headerRef, dependencies: [isActive] });
    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.menu} ref={menuRef}>
                <Nav isActive={isActive} />
            </div>
            <Button isActive={isActive} setIsActive={setIsActive} />
        </header>
    )
}