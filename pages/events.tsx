import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Gallery from 'react-photo-gallery'
import styles from '../styles/Home.module.css'
import event_styles from '../styles/Event.module.css'
import PhotoGallery from '../components/PhotoGallery'
import EventCard from '../components/EventCard'

const events = [
    {
        year: "2022",
        events: [
            {
                name: "Blood Donation Camp",
                path: "/events/2022/blood_donation_camp",
                thumbnail: "https://images.shiksha.com/mediadata/images/1532934986phpVgWnJk.jpeg"
            },
            {
                name: "Blood Donation Camp",
                path: "/events/2022/blood_donation_camp",
                thumbnail: "https://www.dcrustedp.in/img_rr_06.JPG"
            }
        ]
    },
    {
        year: "2021",
        events: [
            {
                name: "Blood Donation Camp",
                path: "/events/2022/blood_donation_camp",
                thumbnail: "https://www.dcrustedp.in/img_rr_06.JPG"
            }
        ]
    }
]

const Events: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NSS DCRUST</title>
                <meta name="description" content="NSS DCRUST Events Page" />
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            {/* <h1 className={styles.heading}>National Service Scheme</h1>
            <h2 className={styles.tag_line}>"Not Me But You"</h2> */}
            <h1 className={styles.heading}>Events</h1>
            <div className={styles.container}>
                {
                    events.map(({ year, events }) => (
                        <>
                            <h1 key={year}>{year}</h1>
                            <div className={styles.home}>
                                {
                                    events.map((event) => (
                                        <EventCard {...event} key={event.name}/>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Events;
