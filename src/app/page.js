"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, useEffect, useState } from "react";
import styles from "./style/home.module.css";
import styles2 from "./style/shopPage.module.css";

import WinnerCirlce from "./components/WinnerCircle";

import AboutEd from "./components/AboutEd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Show from "./components/Show";

const Media = lazy(() => import("./components/Media"));
const Work = lazy(() => import("./components/Work"));

import Navigation from "./components/Navigation";
import Popup1 from "./components/popup/Popup1";
import SocialBox2 from './components/SocialBox2';


export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [popupOpen]);


  useEffect(() => {
    setPopupOpen(false)
  }, [])

  const popUpHandler = () => {
    setPopupOpen(true)
  }
  return (
    <>
      <div className={styles.mainHero}>
        <Header onClick={() => popUpHandler()} />
        <div
          style={{
            background: "black",
          }}
        >
          <Navigation />
        </div>
        <div className={styles.hero}>
          <div className={styles.heroMain}>
            <img src="/images/HomePage3.png" alt="" width="100%" style={{
              height: '100%',
              maxHeight: '733px'
            }} />
          </div>
        </div>

      </div>

      <Show />
      <AboutEd />
      {/* <Books /> */}
      <div className={styles2.community}>
        <h2>MARCO CHAMPION</h2>
        <h1>TEXT COMMUNITY </h1>
        <h3>TEXT ME FOR 1 ON 1 CONVERSATIONS</h3>
        <input type="text" placeholder="PHONE #" width='100%' />
        <button>JOIN COMMUNITY NUMBER</button>
      </div>
      {/* <Media /> */}
      <WinnerCirlce />
      {/* <Work /> */}
      <SocialBox2 />
      {popupOpen && <Popup1 setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}

      <Footer />
    </>
  );
}
