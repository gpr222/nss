import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className="background"></div>
      <Navbar />
      <div className={styles.logos} >
          <img src={"assets/images/log.png"} alt={"no"} />
        </div>
      <Component {...pageProps} />
      <div className={"footer"}>
        <h2>© NSS DCRUST 2022</h2>
      </div>
    </>
  )
}

export default MyApp
