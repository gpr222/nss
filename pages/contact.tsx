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
      {/* <h1 className={styles.heading}>National Service Scheme</h1>
      <h2 className={styles.tag_line}>"Not Me But You"</h2> */}
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.contact}>
        <div>
        <h2>Pranav Garg</h2>
        <p>Student Coordinator</p>
        </div>
        <div>
        <h2>Mobile</h2>
        <p>+9999999999</p>
        </div>
        <div>
        <h2>Mail</h2>
        <p>nsscoordinators@gmail.com</p>
        </div>
        <div>
        <h2>Address</h2>
        <p>CSE Department, DCRUST , Murthal</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.690890478081!2d77.05705661473787!3d29.02613977290873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db10181f597e9%3A0x9640a27a3eeddc64!2sSonipat%2C%20Haryana%20131027!5e0!3m2!1sen!2sin!4v1651611988664!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Resources;
