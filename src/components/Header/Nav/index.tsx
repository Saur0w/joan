"use client";

import styles from "./style.module.scss";
import { Links } from "./data";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from"react";

gsap.registerPlugin(useGSAP);

export default function Nav() {
    const navRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(textRef.current, {
            opacity: 0
        })
    }, { scope: navRef });
    return (
        <div className={styles.nav} ref={navRef}>
            <div className={styles.body}>
                {
                    Links.map((link, i) => {
                        return (
                            <div key={i}>
                                <Link href={link.href}>{link.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}