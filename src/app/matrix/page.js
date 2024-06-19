"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";
import PopUp2 from "../components/popup/Popup2";
import styles from "../style/footer.module.css";
import styles2 from "../style/matrix.module.css";

const footerSocial = [
  {
    link: "https://youtube.com/@marcothechampion?si=Q9wKW7O1zjUNI-Tf",
    img: "	/images/Youtube.png",
    name: "youtube",
    followers: 2.25,
  },
  {
    link: "https://www.instagram.com/marcothechampion?igsh=MzRlODBiNWFlZA==",
    img: "/images/instagram2.png",
    name: "Instagram",
    followers: 2.25,
  },
  {
    link: "https://www.tiktok.com/@marcothechampion?_t=8l4fMYzpcVP&_r=1",
    img: "/images/tiktok.png",
    name: "TikTok",
    followers: 2.25,
  },
  {
    link: "https://www.facebook.com/marcochampion777?mibextid=JRoKGi",
    img: "/images/facebook.png",
    name: "Facebook",
    followers: 2.25,
  },
];

const Matrix = () => {

  const [popup, setPopup] = useState()
  const handleOpenPopup = () => setPopup(true)
  const handleClosePopup = () => setPopup(false)


  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Navigation />
        <div className={styles2.matrixVideo}>
          <div className={styles2.GIFVideo} onClick={handleOpenPopup} style={{
            cursor: 'pointer'
          }}>
            <img src="/images/Matrix-Thumbnail.gif" alt="" />
          </div>
        </div>


        {/* Footer Code  */}
        <div style={{ background: "#000" }}>
          <div className={styles2.footerContainer}>
            <div className={styles2.y}>
              <h1 className="blanka">STAY MOTIVATED</h1>
              <ul className={styles.socialLinks} style={{
                padding: '0px'
              }}>
                {footerSocial?.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} target="_blank">
                      <img src={item.img} alt="" height='50px' width='50px' />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles2.right}>
              <a href="/Reprogram" style={{
                textDecoration: "none",
                color: "white"
              }}>
                <h1 className="blanka">REPROGRAM</h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      {popup && <PopUp2 closePopup={handleClosePopup} popupOpen={popup} />}
    </>
  );
};

export default Matrix;
