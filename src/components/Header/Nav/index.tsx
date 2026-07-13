"use client";

import styles from "./style.module.scss";
import { Links } from "./data";
import Link from "next/link";

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    Links.map((link, i) => {
                        return <div key={i}>
                            <Link href={link.href}>{link.title}</Link>
                            </div>
                    })
                }
            </div>
        </div>
    )
}