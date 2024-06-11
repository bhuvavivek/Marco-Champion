import Image from "next/image";
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
const SocialBox2 = () => {
    return (
        <div
            style={{
                background: 'url(/images/Background-Special.png) !important'
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
                            <div className={styles.SocialBox} key={index}>
                                <Image src={social.image} alt={social?.name || 'description of the image'} />
                                <div className={styles.socialName}>
                                    <h4>{social.socialName}</h4>
                                    {/* <h6>{social.followers} Follwers</h6> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialBox2;
