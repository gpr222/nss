import posters_data from './posters_data';
import Poster_card from './poster_card';
import Image from 'next/image'
import Gallery from 'react-photo-gallery'
import styles from '../styles/Home.module.css'
import event_styles from '../styles/Event.module.css'
import PhotoGallery from '../components/PhotoGallery'

const Component=()=>{
    return(
        <div className={styles.container}>
        <h1 className={styles.heading}>Upcoming events</h1>
            <div className={styles.container}>
                {
                   
                        <>
                            
                            <div className={styles.home}>
                                {
                                    posters_data.map((event) => (
                                        <Poster_card {...event} key={event.name}/>
                                    ))
                                }
                            </div>
                        </>
                    
                }
            </div>
        </div>
    );
}
export default Component;