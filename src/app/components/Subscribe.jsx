import React from "react";
import styles from "../style/subscribe.module.css";

const socialData = [
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
  {
    img: "https://www.edmylett.com/icons/players/apple-podcasts.svg",
  },
];

const Subscribe = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.box}>
          <div className={styles.boxLeft}>
            <div className={styles.epBox}>
              <h1>Latest episode</h1>
              <h4>Ep.271</h4>
              <h3 className="colorPrimary">Edward Burns</h3>
              <h2>12 Steps To Become A Master Listener</h2>
              <div className={styles.boxButton}>
                <button>
                  <img
                    src="https://www.edmylett.com/icons/latestSubscribe/listen.svg"
                    alt=""
                  />
                  Listen
                </button>
                <button>
                  <img
                    src="https://www.edmylett.com/icons/latestSubscribe/watch.svg"
                    alt=""
                  />
                  Watch
                </button>
              </div>
            </div>
          </div>

          <div className={styles.boxRight}>
            <h1>Subscribe</h1>
            <h3>Don&#39;t miss any episode</h3>
            <div className={styles.social}>
              {socialData.map((social, index) => (
                <div className={styles.socialBox} key={index}>
                  <img src={social.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
