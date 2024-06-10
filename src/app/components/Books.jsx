import { useEffect, useState } from "react";
import styles from "../style/books.module.css";
import PopUp3 from "./popup/PopUp3";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Books = () => {

  const [popupOpen, setPopupOpen] = useState(false)
  const openPopup = () => setPopupOpen(true)
  const closePopup = () => setPopupOpen(false)

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    closePopup()

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
      <div className={styles.container}>

        {!isSmallScreen ? (<div className={styles.books}>
          <div className={styles.Sbooks}>
            <div className={styles.book}>
              <img src="/images/book1.png" alt="......" />
            </div>
            <div className={styles.book}>
              <img src="/images/book2.png" alt="......" />
            </div>
            <div className={styles.book}>
              <img src="/images/book3.png" alt="......" />
            </div>
            <div className={styles.book}>
              <img src="/images/book4.png" alt="......" />
            </div>
          </div>
        </div>) : (


          <Carousel>
            <Carousel.Item interval={3000}>
              <img src="/images/book1.png" alt="......" />
              <br /><br />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/images/book2.png" alt="......" />
              <br /><br />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/images/book3.png" alt="......" />
              <br /><br />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/images/book4.png" alt="......" />
              <br /><br />
            </Carousel.Item>
          </Carousel>)}




        <h1>Best selling books</h1>
        <h3 className={styles.text}>
          BE THE <span className="colorPrimary"> FIRST TO KNOW </span> WHEN I
          RELEASE MY BOOKS
        </h3>

        <button className={styles.button} onClick={setPopupOpen}>TAP IN</button>

        {popupOpen && <PopUp3 openPopup={openPopup} closePopup={closePopup} popupOpen={popupOpen} />}
      </div>
    </>
  );
};


export default Books;
