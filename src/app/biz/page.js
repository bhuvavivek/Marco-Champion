"use client"

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import styles from "../style/home.module.css";
import styles2 from "../style/shopPage.module.css";

import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const brandImageList = [
  "/images/brand_1.svg",
  "/images/brand_2.svg",
  "/images/brand_3.svg",
];

const Page = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 600);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className={`${styles.mainHero} ${styles2.mainHero}`}>
        <Navigation />

        {/*------------------------------------------- Header poster ------------------------------------------- */}
        <div className={styles2.ShopHeroSection}>
          {!isSmallScreen && <img src="/images/Shop-Hero.png" alt="" width='100%' />}
          {isSmallScreen && <img src="/images/Shop-Hero-PC.png" style={{
            height: '100vh',
            width: '100%'
          }} />}
          <p className={styles2.heading}>
            SHOP
          </p>

          <div className={`${styles2.textBox} ${styles2.lefttextBox}`}>
            MARCO CHAMPION
            <span>
              <span style={{
                color: '#216023'
              }}>“CHOSEN ONE”</span> COLLECTIONS
            </span>
          </div>

          <div className={`${styles2.textBox} ${styles2.righttextBox}`}>
            SHOP ALL

            <span >
              <span style={{
                color: "#6ef4fb"
              }}>MOTIV</span> COLLECTIONS
            </span>
          </div>
        </div>


        {/*------------------------------------------- my business part ------------------------------------------- */}
        <div className={styles2.brands}>
          <h2>CHAMPION&#39;S  VENTURES</h2>
          {!isSmallScreen ?
            (
              <div style={{ marginTop: "-100px" }}>
                <Carousel controls={false}>
                  <Carousel.Item interval={2000}>
                    <img src="/images/brand_1.svg" alt="......" className="p-3" />
                    <br /><br />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img src="/images/brand_2.svg" alt="......" className="p-3" />
                    <br /><br />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img src="/images/brand_3.svg" alt="......" className="p-3" />
                    <br /><br />
                  </Carousel.Item>
                </Carousel>
              </div>
            ) :
            (<div className={`${styles2.brandImages}`}>
              {brandImageList.map((brand, index) => {
                return (
                  <>
                    <img
                      key={index}
                      src={brand}
                      alt={`${brand.split("/").pop().split(".")[0]} ${index + 1}`}
                    />
                  </>
                );
              })}
            </div>)}
        </div>


        {/*------------------------------------------- JOIN COMMUNITY FORM part ------------------------------------------- */}
        {/* <div className={styles2.community}>
          <h2>MARCO CHAMPION</h2>
          <h1>TEXT COMMUNITY </h1>
          <h3>TEXT ME FOR 1 ON 1 CONVERSATIONS</h3>
          <input type="text" placeholder="PHONE #" width='100%' />
          <button>JOIN COMMUNITY NUMBER</button>
        </div> */}

        <Footer />
      </div>
    </div >
  );
};

export default Page;
