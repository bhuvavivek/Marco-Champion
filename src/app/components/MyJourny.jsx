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
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
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
