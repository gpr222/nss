import Link from "next/link";
import React from "react";
import styles from '../styles/EventCard.module.css';

type EventCardProps = {
    name: string,
    path: string,
    thumbnail: string
}

export default ({ name, path, thumbnail }: EventCardProps) => {

    return (
        <Link href={path}>
            <a>
                <div className={styles.card}>
                    <div className={styles["card_top"]}>
                        <img src={thumbnail} />
                    </div>
                    <div className={styles["card_bottom"]}>
                        {name}
                    </div>
                </div>
            </a>
        </Link>
    )
}