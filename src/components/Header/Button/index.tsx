"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface ButtonProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

export default function Button({isActive, setIsActive}: ButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to(sliderRef.current, {
            top: isActive ? "-100%" : "0%",
            duration: 0.5,
            ease: "power3.inOut",
        });
    }, { scope: buttonRef, dependencies: [isActive]})
    return (
        <div onClick={() => { setIsActive(!isActive)}} className={styles.button} ref={buttonRef}>
            <div className={styles.slider} ref={sliderRef}>
                <div className={styles.el}>
                    <p>Menu</p>
                </div>
                <div className={styles.el}>
                    <p>Close</p>
                </div>
            </div>
        </div>
    )
}