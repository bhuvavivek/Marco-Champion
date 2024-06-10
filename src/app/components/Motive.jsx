import Link from "next/link";
import styles from "../style/motive.module.css";


const Motive = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/images/motivHome.png" alt="" />
        </div>

        <div className={styles.right}>
          <div className={styles.image1}>
            <img src="/images/MotivBackground.png" alt="" />
          </div>
          <div className={styles.image2}>
            <img src="/images/MotivBack.png" alt="" />
          </div>
          <div className={styles.textBox}>
            <div>
              <img src="/images/MotivLogo.svg" alt="" />
            </div>

            <h1>LIFESTYLE BRAND FOR THE HIGHLY MOTIVATED</h1>

            <Link href="https://motiv777.com/" target="_blank" rel="noopener noreferrer">
              <button>MOTIV STORE</button>
              <div className={styles.buttonbox}>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motive;
