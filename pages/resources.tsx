import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

const Resources: NextPage = () => {
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
      <h1 className={styles.heading}>Resources</h1>
      <div className={styles.home}>
        
      </div>
    </div>
  )
}

export default Resources;
