
import Link from "next/link";
import styles from "../style/aboutEd.module.css";

const AboutEd = ({ isWhiteBG, isHeadingColor }) => {

  return (
    <div className={`${styles.about}`}>
      <div className={styles.aboutMain}>

        <div className={styles.Ed}>
          <h1
            className={`colorPrimary`}
          ><br />
            WHO IS MARCO CHAMPION?</h1>
          <p >
            Growing up, I fell in love with skateboarding and all the adversity
            that came with it. At 15 Yrs old I had a near death experience being
            ran over by a car and told by the doctors I would never walk again.
            I shattered my pelvis, broke my spine, and damaged nerves. They
            called it a miracle when my nerves repaired themselves and I learned
            how to walk and even skate again.
            <br /> <br />
            This experience drove me to understand the power of the mind and
            tools to use to hack our inner programming. The amazing thing is
            that it’s possible for anyone to rewire their brain to produce
            massive levels of success. Through over 10,000 hours of meditation
            Ive came to a major realization that there&apos;s abundance all around
            us, we just have to get out of our way and tap into correct flow of
            energy.
            <br />
            <br />
            My purpose has been to help others experience their best version the
            way I constantly experience mine. Thats when I embarked on building
            MOTIV a brand that inspires others to STAY MOTIVATED and find their
            most powerful reasons. I also scaled a 7 figure social media agency
            and launched a content creation app.
            <br />
            <br />
            Theres no stopping my commitment to innovation and in the process
            ive helped and mentored many others to do the same. Discovering the
            best version of YOU is the ultimate goal. That&apos;s why Ive developed
            the REPROGRAM course; a character building routine that reprograms
            your entire life to experience more success in just 77 days.
          </p>

          <br />
          <br />

          <p>To Your Success, <br /> Marco Champion</p>

          <Link href="/story">
            <button>
              Discover Full Story
            </button>
          </Link>

          <div className={`${styles.socialmaincontainer}`}>


            {/* <div className={`${styles.Social}`}>
              <img
                src={"/images/Forbes2.svg"}
                alt=""
              />
              <img
                src={"/images/BuzzFeed.svg"}
                alt=""
              />
              <img
                src={"/images/CNBC.svg"}
                alt=""
              />
              <img
                src={
                  "/images/Entrepreneur2.svg"
                }
                alt=""
              />
              <img
                src={"/images/Money.svg"}
                alt=""
              />
            </div> */}

            <div className={styles.socialImage}>
              <img src="/images/about.png" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.Edimg}>
          <img src="/images/about.png" alt="" />
        </div>


      </div>
    </div>
  );
};

export default AboutEd;
