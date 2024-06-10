import styles from "../style/home.module.css";

const socialDetail = [
  {
    image: "/images/instagram.svg",
    socialName: "Instagram",
    followers: "2.6M",
  },
  { image: "/images/youtube.svg", socialName: "Youtube", followers: "2.6M" },
  { image: "/images/tiktok.svg", socialName: "Tiktok", followers: "2.6M" },
  { image: "/images/facebook.svg", socialName: "Facebook", followers: "2.6M" },
  { image: "/images/twitter.svg", socialName: "Twitter", followers: "2.6M" },
];
const SocialBox = () => {
  return (
    <div className={styles.growMain}>
      <div className={styles.grow}>
        {/* <div className={styles.growHead}>
          <h1>
            JOIN THE GROWING <span>NO LIMIT</span> COMMUNITY
          </h1>
        </div> */}

        <div className={styles.growSocial}>
          {socialDetail.map((social, index) => (
            <div className={styles.SocialBox} key={index}>
              <img src={social.image} alt="" />
              <div className={styles.socialName}>
                <h4>{social.socialName}</h4>
                {/* <h6>{social.followers} Follwers</h6> */}
              </div>
            </div>
          ))}

          {/* <div className={styles.SocialBox}>
                  <img src="/images/youtube.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Youtube</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/tiktok.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Tiktok</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/facebook.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Facebook</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/twitter.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>twitter</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default SocialBox;
