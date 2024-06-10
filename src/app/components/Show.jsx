import styles from "../style/show.module.css";

const episodes = [
  {
    epNo: "THE MARCO CHAMPION SHOW",
    guestName: "Coming Soon",
    epTitle: "David Goggins Mentality",
  },
  {
    epNo: "THE MARCO CHAMPION SHOW",
    guestName: "Coming Soon",
    epTitle: "Whats Your Motiv?",
  },
  {
    epNo: "THE MARCO CHAMPION SHOW",
    guestName: "Coming Soon",
    epTitle: "The Andrew Tate Interview",
  },
];

const Show = () => {
  return (
    <>
      <div className={styles.showMain}>
        <div className={styles.container}>
          <div className={styles.lastPodcast}>
            <h4 className="colorPrimary">
              Become the Best Version of You with
            </h4>
            <h1>The Marco Champion show</h1>

            <div className={styles.epBox}>
              {episodes.map((ep, index) => (
                <div className={styles.epMainBox} key={index}>
                  <img src="/images/podcasthome1.png" alt="" />

                  <h2 className={styles.epMainBoxHead}>{ep.epNo}</h2>
                  <div className={styles.epMainBoxDetail}>
                    <h2 className="colorPrimary">{ep.guestName}</h2>
                    <h3>{ep.epTitle}</h3>
                  </div>
                </div>
              ))}
            </div>

            <h3 className={styles.subHeading}>
              BE THE <span className="colorPrimary">FIRST TO KNOW</span> WHEN A
              NEW EPISODE RELEASES
            </h3>

            <div className={styles.newslater}>
              <input type="text" placeholder="Your Email" /> <button>Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
