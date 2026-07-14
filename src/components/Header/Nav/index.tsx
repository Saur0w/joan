"use client";

import styles from "./style.module.scss";
import { Links, FooterLinks } from "./data";
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
                {
                    rotateX: 90,
                    opacity: 0,
                    translateY: 80,
                    translateX: -20,
                },
                {
                    rotateX: 0,
                    translateY: 0,
                    translateX: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    delay: 0.5,
                    ease: "power3.out",
                }
            );
    }, { scope: navRef });

    useGSAP(() => {
        if (!tl.current) return;

        if (isActive) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isActive]);

    return (
        <div className={styles.nav} ref={navRef}>
            <div className={styles.body}>
                {Links.map((link, i) => (
                    <div className={styles.linkContainer} key={i}>
                        <div ref={(el) => { if (el) linksRef.current[i] = el; }}>
                            <Link href={link.href}>{link.title}</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                {FooterLinks.map((link, i) => (
                    <Link key={`f_${i}`} href={link.href}>{link.title}</Link>
                ))}
            </div>
        </div>
    );
}