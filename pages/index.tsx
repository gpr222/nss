import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import Poster from '../components/posters'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NSS DCRUST</title>
        <meta name="description" content="NSS DCRUST HomePage" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>National Service Scheme</h1>
      <h2 className={styles.tag_line}>&quot;Not Me But You &quot;</h2>
      <div className={styles.home}>
        <div className={styles.slider_container}>
          <Slider/>
        </div>
        <div className={styles.home_right}>
          <h1 className={`${styles.heading} ${styles.about_us}`}>About Us</h1>
          <div className={`${styles.content}`}>
          NSS DCRUST is composed of energetic and enthusiastic volunteers, under the guidance of respected teachers, who always keep in mind comprehensive and sustainable models for development. In addition to the main goals of community development, NSS also aims to inculcate service values ​​in students, and ultimately make them responsible citizens dedicated to improving the society and the world.
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.home}>
        
        <div className={styles.home_right}>
          <h1 className={`${styles.heading} ${styles.about_us}`}>What we do</h1>
          <div className={`${styles.content}`}>
          Spreading happiness through community service has been one of the primary objectives of NSS. With innovative activities across the departments catering to all classes of the campus residents, we try to create small, happy and memorable moments in their lives. We aim to bring about a positive change in the society with focus on education and development.
          </div>
        </div>

        <div className={styles.slider_container}>
          <Slider/>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Poster/>

      <div className={styles.container}>
        
      </div>
    </div>
  )
}

export default Home
