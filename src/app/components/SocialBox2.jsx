import styles from "../style/home.module.css";

const socialDetail = [
    {
        image: "/images/instagram.svg",
        socialName: "Instagram",
        followers: "2.6M",
        link: 'https://www.instagram.com/marcothechampion?igsh=MzRlODBiNWFlZA=='
    },
    { image: "/images/youtube.svg", socialName: "Youtube", followers: "2.6M", link: 'https://youtube.com/@marcothechampion?si=Q9wKW7O1zjUNI-Tf' },
    { image: "/images/tiktok.svg", socialName: "Tiktok", followers: "2.6M", link: 'https://www.tiktok.com/@marcothechampion?_t=8l4fMYzpcVP&_r=1' },
    { image: "/images/facebook.svg", socialName: "Facebook", followers: "2.6M", link: 'https://www.facebook.com/marcochampion777?mibextid=JRoKGi' },
    {
        image: "/images/twitter.svg", socialName: "Twitter", followers: "2.6M", link: 'https://twitter.com/marcochampion_'
    },
];
const SocialBox2 = () => {
    return (
        <div
            style={{
                background: 'url(/images/Background-Special.png) !important',
                padding: '80px 0px'
            }}
        >
            <div className={styles.growMain}
            >
                <div className={styles.grow} style={{
                    position: 'relative',
                    bottom: '0',
                }}>
                    <div className={styles.growSocial}
                        style={{
                            flexWrap: 'nowrap'
                        }}
                    >
                        {socialDetail.map((social, index) => (
                            <a className={styles.SocialBox} key={index} href={social.link} target="_blank" style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}>
                                <img src={social.image} alt={social?.name || 'description of the image'} />
                                <div className={styles.socialName}>
                                    <h4 style={{
                                        margin: '0px',
                                        fontSize: '20px',
                                        fontWeight: '700'
                                    }}>{social.socialName}</h4>
                                    {/* <h6>{social.followers} Follwers</h6> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialBox2;
