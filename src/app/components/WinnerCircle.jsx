import Link from "next/link";
import styles from "../style/winner.module.css";

import { FaLock } from "react-icons/fa";

const WinnerCirlce = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerMain}>
          <h1 className="colorPrimary blanka">Winners Circle</h1>

          <div className={styles.circle}>
            <div className={styles.circles}>
              <Link href="/Reprogram" className={styles.lavel1}>
                <div className={styles.circleInner}>
                  {/* <p className={`${styles.text} ${styles.round}`}>Reprogram</p> */}
                </div>
              </Link>

              <Link href="/contact" className={styles.lavel2}>
                <div className={styles.circleInner}>
                  {/* <p className={styles.text}>Mentorship</p> */}
                </div>
              </Link>

              <div className={styles.lavel3}>
                <div className={styles.circleInner}>
                  <p style={{ color: "white" }} className={styles.text}>
                    Exclusive inner circle
                  </p>
                </div>

                <div className={styles.lock}>
                  <FaLock />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.BottomImg}>
            <Link href="/matrix">
              <img src="/images/WinnerCircleButton.png" alt="" />
            </Link>
          </div>
        </div>


      </div>
    </>
  );
};

export default WinnerCirlce;
