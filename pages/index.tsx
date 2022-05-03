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
      {/* <h1 className={styles.heading}>National Service Scheme <br /></h1> <h2>DCRUST</h2> */}
      {/* <h3 className={styles.tag_line}>&quot;Not Me But You &quot;</h3> */}

      {/*  */}
        {/* <div className={styles.logos} >
          <img src={"assets/images/log.png"} alt={"no"} />
        </div> */}
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

      {/*  */}

      <br />  <br />  <br />

      
       
        <h1 className={styles.heading}>OUR MOTTO</h1>
        <div className={styles.home}>
        
        {/* <h1>"NOT ME BUT YOU"</h1> */}
        
        <div className={styles.home_right}>
          <div className={`${styles.content}`}>
              The Motto of NSS "Not Me But You", reflects the essence of democratic living and upholds the need for self-less service. NSS helps the students development & appreciation to other person's point of view and also show consideration towards other living beings. The philosophy of the NSS is a good doctrine in this motto, which underlines on the belief that the welfare of an individual is ultimately dependent on the welfare of the society as a whole and therefore, the NSS volunteers shall strive for the well-being of the society.
          </div>
        </div>
        </div>
        <br /><br /><br />

        {/*  */}
        <div className={styles.home}>
              <div className={styles.slider_container}>
                <Slider/>
              </div>
              <div className={styles.home_right}>
                <h1 className={`${styles.heading} ${styles.about_us}`}>What are We</h1>
                <div className={`${styles.content}`}>
                National Service Scheme, abbreviated as NSS is a community-service oriented organisation launched in Gandhiji’s Centenary Year (1969) which has annexed its territory overseas as well now. NSS provides a platform for the students to build their character through community service, a wonderful chance to connect them with the soil and even an amazing opportunity to become a better human being. It also helps in cultivating a sense of responsibility and belongingness among the society.
                </div>
              </div>
            </div>
        {/*  */}

      <br />    <br />   <br />

      {/*  */}

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

      {/*  */}

      <br />    <br />    <br />

      {/*  */}
      <Poster/>
      {/*  */}

      <br />
      <br />
      <br />
      <h1 className={`${styles.heading} ${styles.about_us}`}>Past Activities</h1>
      <div className={styles.video_container}> 
          <iframe width="380" height="200" src="https://www.youtube-nocookie.com/embed/MoJCRdmVEw0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="380" height="200" src="https://www.youtube-nocookie.com/embed/MoJCRdmVEw0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          <iframe width="380" height="200" src="https://www.youtube-nocookie.com/embed/MoJCRdmVEw0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          
          <iframe width="380" height="200" src="https://www.youtube-nocookie.com/embed/mLOexDPTa8c" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
      </div>

      <div className={styles.footer}>

      </div>
    </div>
  )
}

export default Home
