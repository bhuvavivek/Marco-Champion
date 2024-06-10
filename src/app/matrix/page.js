"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";
import PopUp2 from "../components/popup/Popup2";
import styles2 from "../style/matrix.module.css";

const footerSocial = [
  {
    link: "https://www.instagram.com/dr.edwardburnsjr?igsh=ODA1NTc5OTg5Nw==",
    img: "/images/instagram2.svg",
    name: "Instagram",
    followers: 2.25,
  },
  {
    link: "https://www.tiktok.com/@dr.edwardburns?_t=8iavjpZ8fPi&_r=1",
    img: "	https://www.edmylett.com/icons/footer/tiktok.svg",
    name: "TikTok",
    followers: 2.25,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100084015300138&mibextid=LQQJ4d",
    img: "		https://www.edmylett.com/icons/footer/facebook.svg",
    name: "Facebook",
    followers: 2.25,
  },
  {
    link: "https://www.linkedin.com/in/edwardburnsjr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img: "	/images/linkdin.svg",
    name: "linkedin",
    followers: 2.25,
  },
  {
    link: "https://x.com/edwardburnsjr27/",
    img: "	/images/twitter.svg",
    name: "Twitter",
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
              <ul className={styles2.socialLinks}>
                {footerSocial?.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>
                      <img src={item.img} alt="" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* right part */}
            <div className={styles2.right}>
              <a href="/Reprogram" style={{
                textDecoration: "none",
                color: "white"
              }}>
                <h1 className="blanka">REPROGRAM</h1>
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {popup && <PopUp2 closePopup={handleClosePopup} popupOpen={popup} />}
    </>
  );
};

export default Matrix;
