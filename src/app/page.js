"use client";

import { lazy, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./style/home.module.css";

import WinnerCirlce from "./components/WinnerCircle";

import AboutEd from "./components/AboutEd";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Show from "./components/Show";

import SocialBox from "./components/SocialBox";
const Media = lazy(() => import("./components/Media"));
const Work = lazy(() => import("./components/Work"));

import Motive from "./components/Motive";
import Navigation from "./components/Navigation";
import Popup1 from "./components/popup/Popup1";


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
            <img src="/images/HomePage2.png" alt="" />
          </div>
        </div>
        <SocialBox />
      </div>

      <Show />
      <AboutEd />
      <Books />
      {/* <Media /> */}
      <WinnerCirlce />
      {/* <Work /> */}
      <Motive />
      {popupOpen && <Popup1 setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}

      <Footer />
    </>
  );
}
