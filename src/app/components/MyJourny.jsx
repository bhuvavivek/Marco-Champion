import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "../style/myjourny.module.css";

const MyJourny = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>FOLLOW MY JOURNEY ON SOCIAL MEDIA</h2>
          <div className={styles.socialBox}>
            <a href="https://youtube.com/@marcothechampion?si=Q9wKW7O1zjUNI-Tf" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/marcothechampion?igsh=MzRlODBiNWFlZA==" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/marcochampion_" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.tiktok.com/@marcothechampion?_t=8l4fMYzpcVP&_r=1" target="_blank">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/marcochampion777?mibextid=JRoKGi" target="_blank">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.card}>
            <img src="/images/1.png" alt="" />
          </div>
          <div className={styles.card}>
            <img src="/images/2.png" alt="" />
          </div>
          <div className={styles.card}>
            <img src="/images/3.png" alt="" />
          </div>
          <div className={styles.card}>
            <img src="/images/4.png" alt="" />
          </div>
          <div className={styles.card}>
            <img src="/images/5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJourny;
