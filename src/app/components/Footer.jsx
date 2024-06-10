import Link from "next/link";
import styles from "../style/footer.module.css";


const footerSocial = [
  {
    link: "https://www.linkedin.com/in/edwardburnsjr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img: "	/images/Youtube.png",
    name: "youtube",
    followers: 2.25,
  },
  {
    link: "https://www.instagram.com/dr.edwardburnsjr?igsh=ODA1NTc5OTg5Nw==",
    img: "/images/instagram2.png",
    name: "Instagram",
    followers: 2.25,
  },
  {
    link: "https://www.tiktok.com/@dr.edwardburns?_t=8iavjpZ8fPi&_r=1",
    img: "/images/tiktok.png",
    name: "TikTok",
    followers: 2.25,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100084015300138&mibextid=LQQJ4d",
    img: "/images/facebook.png",
    name: "Facebook",
    followers: 2.25,
  },
];

const Footer = () => {
  return (
    <>
      {/* <div className={styles.footerSec}>
        <div className={styles.footerMain}>
          <div className={styles.containerMain}>
            <div className={`${styles.footer} ${styles.footer1} `}>
              <h2>ABOUT Edward Burns</h2>
              <p>
                Edward Burns is one of the top business leaders and peak
                performance experts in the world today. Ed has a passion for
                mentoring and coaching others on what it takes to become a
                champion!
              </p>

              {footerSocial.slice(0, 3).map((social, i) => (
                <Link href={social.link} key={i}>
                  {" "}
                  <div className={styles.social}>
                    <div className={styles.imgSocial}>
                      <img src={social.img} alt="" />
                      <div className={styles.detail}>
                        <h4>{social.name}</h4>
                        <h6>{social.followers} Followers</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className={`${styles.footer} ${styles.footer2} `}>
              <h1 className="colorPrimary">
                JOIN THE WORLD&apos;S BIGGEST
                <br />
                MOVEMENT AND MAXOUT YOUR LIFE
              </h1>
              <h2>
                GET OUR LATEST EPISODES PLUS <br /> INSPIRING CONTENT EMAILED TO
                YOU
              </h2>

              <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <button>Submit</button>
              </form>
            </div>
            <div className={`${styles.footer} ${styles.footer3} `}>
              <h2>ABOUT Edward Burns</h2>
              <p>
                Edward Burns is one of the top business leaders and peak
                performance experts in the world today. Ed has a passion for
                mentoring and coaching others on what it takes to become a
                champion!
              </p>

              {footerSocial.slice(3).map((social, i) => (
                <Link href={social.link} key={i}>
                  {" "}
                  <div className={styles.social}>
                    <div className={styles.imgSocial}>
                      <img src={social.img} alt="" />
                      <div className={styles.detail}>
                        <h4>{social.name}</h4>
                        <h6>{social.followers} Followers</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div> */}


      <div style={{ background: "#000" }}>

        <div className={styles.container} style={{ maxWidth: "1300px", margin: "0px auto" }}>

          <div className={`${styles.left}`}>
            <h1 className="blanka">STAY MOTIVATED</h1>
            <ul className={styles.socialLinks}>
              {footerSocial?.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>
                    <img src={item.img} alt="" height='50px' width='50px' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className={styles.links}>
              <li className="sprite-graffiti">MY STORY</li>
              <li className="sprite-graffiti">REPROGRAM</li>
              <li className="sprite-graffiti">BIZ</li>
              <li className="sprite-graffiti">Contact</li>
            </ul>
          </div>

          <div className={styles.sign}>
            <img src="/images/Signature.png" alt="" />
          </div>

        </div>

      </div>



    </>
  );
};

export default Footer;
