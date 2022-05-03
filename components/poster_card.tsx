import Link from "next/link";
import React from "react";
import styles from '../styles/poster_card.module.css';
import Image from 'next/image'

type cardprops={
    name:string,
    thumbnail: string
}

const Component= ({ name,  thumbnail }: cardprops) => {

    return (
        <Link href={thumbnail} >
            <a target="_blank">
                <div className={styles.card}>
                    <div className={styles["card_top"]}>
                        <img src={thumbnail}  alt={name}/>
                    </div>
                    <div className={styles["card_bottom"]}>
                        {name}
                    </div>
                </div>
            </a>
        </Link>
    )
}


export default Component;