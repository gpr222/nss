import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GalleryProps } from 'react-photo-gallery'
import PhotoGallery from '../../../components/PhotoGallery'
import styles from '../../../styles/Home.module.css'
import event_styles from '../../../styles/Event.module.css'

const details = {
    name: "Blood Donation Camp",
    description: "On XX-XXX-XXXX, this event happened"
}
const images = [
    "https://images.shiksha.com/mediadata/images/1532934986phpVgWnJk.jpeg",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://www.dcrustedp.in/img_rr_06.JPG"
]

let photos: {src: string, width: number, height: number}[] = [

]

photos = images.map(source => ({ src: source, width: 4, height: 3 }))



const Component = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NSS DCRUST</title>
                <meta name="description" content="NSS DCRUST Events Page" />
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.heading}>National Service Scheme</h1>
            <h2 className={styles.tag_line}>"Not Me But You"</h2>
            <h1 className={styles.heading}>{details.name}</h1>
            <div className={styles.home}>
                {details.description}
                <div className={event_styles.gallery_container}>
                    <PhotoGallery photos={photos} />
                </div>
            </div>

        </div>
    )
};
export default Component;