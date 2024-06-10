"use client";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import AboutBio from "../components/AboutBio";
import CEO from "../components/CEO";
import MyJourny from "../components/MyJourny";
import styles2 from "../style/aboutPage.module.css";

import { useState } from "react";
import { useEffect } from "react";

const About = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
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

    <div
      style={{
        height: "100vh",
      }}
    >
      <Navigation />
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <div className={`${styles2.heroMain}  `}>
          <div className={styles2.hero}>
           {!isSmallScreen ? <img src="/images/Hero-Story.png" alt="" /> : <img src="/images/SHM.png" alt="..." className={styles2.headimgSHM} />}
          </div>
          <div className={styles2.banner}>
            <h1>“There’s a CHAMPION inside all of us”</h1>
            <div style={{ width: "100%", objectFit: "cover" }}>
              <img src="/images/mystory.png" alt="...."/>
            </div>
          </div>
        </div>
        <div className={styles2.aboutSection}>
          <AboutBio isWhiteBG={true} isHeadingColor={true} />
        </div>
        {/* <EdStory />
          <Work /> */}
        <CEO />
        <div className={styles2.startUp}>
          <img src="/images/StartupPassion.png" />
        </div>
        <MyJourny />
      </div>
      <Footer />
    </div>

  );
};

export default About;
