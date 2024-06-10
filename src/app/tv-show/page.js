import React from 'react'
import styles from "../style/tv-show.module.css"
import Navigation  from "../components/Navigation";
import PodacastBox from '../components/PodacastBox';
import Streming from '../components/Streming';
import Follow from '../components/Follow';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div className={styles.main}>

      <div className={styles.container}>

            <div className={styles.hero} style={{ backgroundImage: 'url(https://www.edmylett.com/img/heroImage/tvShows-bg.png)' }} >
            <Navigation/>
              <div className={styles.tvShow}>


              <div className={styles.mainHero}>

                <div className={styles.left}>
                      <img src="https://www.edmylett.com/img/heroImage/tvShows.png" alt="" />
                </div>
                <div className={styles.right}>
                  <img src="https://www.edmylett.com/img/heroImage/tvShows_text.svg" alt="" />
                  <div className={styles.watch}>
                  <button>Watch Now</button>
                  </div>
                </div>
                </div>


              </div>

            </div>
            <PodacastBox isOnTvPage={true}/>
            </div>

            <Streming/>
            <Follow/>
            <Footer/>








    </div>
  )
}

export default page