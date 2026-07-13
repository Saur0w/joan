"use client";

import styles from "./style.module.scss";
import { Links } from "./data";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface NavProps {
    isActive: boolean;
}

export default function Nav({ isActive }: NavProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement[]>([]);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        tl.current = gsap
          .timeline({ paused: true })
          .fromTo(
            linksRef.current,
            { rotateX: 90, opacity: 0 },
            { rotateX: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.5, ease: "power3.out" }
          );
    }, { scope: navRef });

    useGSAP(() => {
        if (!tl.current) return;
        isActive ? tl.current.play() : tl.current.reverse();
    }, [isActive]);

    return (
        <div className={styles.nav} ref={navRef}>
            <div className={styles.body}>
                {Links.map((link, i) => (
                    <div
                        key={i}
                        ref={(el) => { if (el) linksRef.current[i] = el; }}
                    >
                        <Link href={link.href}>{link.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}