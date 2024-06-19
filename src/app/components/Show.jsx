import styles from "../style/show.module.css";

const episodes = [
  {
    epNo: "THE MARCO CHAMPION SHOW",
    guestName: "Coming Soon",
    epTitle: "Running w/ David Goggins",
  },
  {
    epNo: "THE MARCO CHAMPION SHOW",
    guestName: "Coming Soon",
    epTitle: "Elon Musk Smokes with....",
  },
  {
    epNo: "THE MARCO CHAMPION SHOW",
    guestName: "Coming Soon",
    epTitle: "Sparring with Andrew Tate",
  },
];

const Show = () => {
  return (
    <>
      <div style={{
        background: 'url(/images/Background-Special.png)',
        marginTop: '-100px'
      }}>
        <div className={styles.lastPodcast} style={{
          display: 'flex',
          justifyContent: 'center',
          background: 'white',
          width: '100%',
          paddingTop: '5px',
        }}>
          <h4 className="colorPrimary">
            Become the Best Version of You with
          </h4>
        </div>
        <div className={styles.showMain} >
          <div className={styles.container}>
            <div className={styles.lastPodcast}>
              <h1 style={{
                fontSize: '48px',
                marginTop: '40px'
              }}>The Marco Champion show</h1>
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
                <br />
                <p style={{
                  fontSize: '25px'
                }}>WEEKLY BTS FOOTAGE - WEEKLY WISDOM & MOTIVATION</p>
              </h3>
              <div className={styles.newslater} style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center'
              }}>
                <input type="text" placeholder="Your Email" />
                <button>Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
