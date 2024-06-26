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
      <div className={styles.grow} style={{
        width: '100% !important',
        height: '180px !important',
        bottom: '100px !important'
      }}>



        {/* <div className={styles.growSocial} > */}
        {/* {socialDetail.map((social, index) => ( */}
        {/* <div className={styles.SocialBox} key={index}> */}
        {/* <img src={social.image} alt="" /> */}
        {/* <div className={styles.socialName}> */}
        {/* <h4>{social.socialName}</h4> */}
        {/* <h6>{social.followers} Follwers</h6> */}
        {/* </div> */}
        {/* </div> */}


        {/* </div> */}
      </div>
    </div>
  );
};

export default SocialBox;
