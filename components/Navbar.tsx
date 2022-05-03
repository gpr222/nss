import React, { useState } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const toogleMenu = () => {
        const menu = document.querySelectorAll(`.${styles.menu_list}`);
        menu.forEach(item => {
            item.classList.toggle(styles.menu_open);
        })
    }

    const menu = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/events",
            name: "Events"
        },
        {
            path: "/resources",
            name: "Resources"
        }
    ]

    return (
        <nav className={styles.navbar}>
            <div className={styles.menu} onClick={toogleMenu}>
                <h1 className={""}>Menu</h1>
            </div>
            <div className={styles.menu_list}>
                {
                    menu.map(({name, path}) => 
                        <Link href={path} key={name}>
                            <a className={styles.nav_link} onClick={toogleMenu}>{name}</a>
                        </Link>
                    )
                }
                
            </div>
        </nav>
    )
}

export default Navbar;