"use client";

import { useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Landing() {
    const containerRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const phrase = "The Quick brown fox jumps over the lazy dog";

    useGSAP(() => {
        const split = new SplitText(headingRef.current, {
            type: "lines",
            linesClass: "lineChildren"
        });

        gsap.from(split.lines, {
            y: 110,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    return (
        <section className={styles.landing} ref={containerRef}>
            <div className={styles.heading}>
                <h1 ref={headingRef}>
                    {phrase}
                </h1>
            </div>
        </section>
    )
}