import styles from "../style/aboutEd.module.css";
import styles2 from "../style/aboutPage.module.css";


const AboutBio = ({ isWhiteBG, isHeadingColor }) => {
  return (
    <div className={`${styles.about} ${styles2.aboutBg}`}>
      <div className={styles.aboutMain}>
        <div className={styles.Ed}>
          <h1
            className={` ${styles2.AboutHeader} ${styles2.aboutHead}`}
          >
            WHO IS MARCO CHAMPION?
          </h1>
          <p className={styles2.aboutHead}>
            Getting run over by a car was just the start—after beating the odds
            physically, I had to face the mental obstacles that came next. Up
            until then, I knew all about pushing through with grit and
            determination, but mindfulness? That was new territory for me.
            Battling PTSD and slipping into depression wasn&apos;t easy, especially
            when I realized my dream of going pro in skateboarding was drifting
            away.
            <br /> <br />
            During all those moments in the hospital, and throughout my
            recovery, my prayers were pretty straightforward: I just wanted to
            get back on my skateboard, to feel that rush again, pro or not. I
            made peace with how things were turning out and got curious about
            the power of the mind. It amazed me, you know? How I could challenge
            what the doctors said about being wheelchair-bound for life, and
            actually get back to walking and skating. It was like unlocking a
            new level of belief in what I could do.
            <br />
            <br />
            That belief led me down the path of exploring mental powers and
            mindfulness, way before it was a hashtag or something you saw all
            over Instagram. It took me a while to battle through depression and
            find my way out of a dark place, but I found guided light
            meditations that cured me of my negative thinking and healed me in
            so many ways.
            <br />
            <br />
            I was all in, dedicating hours each day to meditation, and it
            transformed me. I wasn&apos;t just escaping my mental prison I was
            rebuilding myself. It was through this I had my moment of
            enlightenment, I felt the presence of God within me and my mission
            to serve humanity began. It made me realize my accident was no
            accident. It was a wake-up call to do something more. This divine
            redirection had to happen, to steer me towards a higher version of
            myself. That shift in perspective? It was everything.
            <br />
            <br />
            From this state, I created MOTIV - an Action Sports brand that&apos;s all
            about giving back. Every dime we make goes right back into the
            community. It&apos;s about lighting that spark in others, helping
            everyone discover their own power to make a positive impact.
            <br />
            <br />
            I started and scaled [Champion.Social] a digital agency worth over
            $5M. This was my first big success as an entrepreneur. And it didn&apos;t
            stop there. I&apos;ve been building and scaling businesses like the Cure
            and ContentOnDemand to name a few.
            <br />
            <br />
            I AM creating new streams of income but more importantly new outlets
            for impact and expression. Every endeavor I embark on is powered by
            my mission to elevate others.
            <br />
            <br />
            Keep this in mind: The tougher the challenges we face on our
            journey, the more we grow through conquering them, and the deeper we
            dive into understanding our true selves beyond the facade of the
            MATRIX
          </p>

          <br />
          <br />

          <div className={styles2.MarcoStoryImage}>
            <img src="/images/StoryBio.png" alt="" />
          </div>
        </div>

        <div className={styles2.Marcoimg}>
          <img src="/images/StoryBio.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
