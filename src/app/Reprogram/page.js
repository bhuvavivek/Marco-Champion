import { lazy, Suspense } from "react";
import styles2 from "../style/hire.module.css";
import styles from "../style/home.module.css";


import Loading from "../components/Loading";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import SocialBox from "../components/SocialBox";


const Navigation = lazy(() => import("../components/Navigation"));
const Bootcamp = lazy(() => import("../components/bootcamp"));
const Form = lazy(() => import("../components/bootcampForm"));
const Faq = lazy(() => import("../components/Faq"));

const Footer = lazy(() => import("../components/Footer"));
const page = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div
        style={{
          height: "100vh",
        }}
      >
        <div className={styles2.MainWrapper}>


          <div className={styles.mainHero} style={{
            marginTop: "60px",
          }} >
            <div
              style={{
                background: "black",
              }}
            >
              <Navigation />
            </div>
            <div className={styles.hero} style={{
              paddingBottom: '60px'
            }}>
              <div className={styles.heroMain}>
                <img src="/images/HomePage2.png" alt="" />
              </div>
              <SocialBox />
            </div>
          </div>
          {/* ......................................................... after poster card code (2)......................................................... */}
          {/* <div className={styles2.sec_2}>
            <h1>THOUGHT X EMOTION = REALITY </h1>
            <h3>
              THOUGHT DISCONNECTED FROM EMOTION HAS NO EFFECT, EMOTION NOT
              GUIDED BY THOUGHT IS CHAOS.
            </h3>
          </div> */}
          <Card className="border-0 text-center rounded-0 text-light responsive_thistext" style={{ backgroundColor: "black", paddingTop: '70px' }}>
            <div style={{ margin: "5%", fontSize: '20vh', marginBottom: '80px' }} className={styles.boxmain}>
              <div className={styles.headerEotion} style={{
                textTransform: 'uppercase',
                fontSize: '40px',
                fontFamily: 'Blanka !important'
              }}>Change your thoughts</div>
              <hr style={{ borderColor: "black" }} />
              <h3 className={styles.headerEotionDesc} style={{
                fontSize: "28px",

              }}>
                THOUGHT DISCONNECTED FROM EMOTION HAS NO <br /> EFFECT, EMOTION NOT
                GUIDED BY THOUGHT IS <br />CHAOS.
              </h3>
            </div>
          </Card>



          {/* ......................................................... Bootcamp code code (3)......................................................... */}
          <div className={styles2.bootcamWapper}
            // style={{background: "blue"}}
            style={{
              padding: '30px 0'
            }}
          >
            <Bootcamp />
          </div>

          {/* ......................................................... Form code code (4)......................................................... */}
          <Form />

          <div className={`${styles2.sec_2} ${styles2.sec_3} text-center text_h1_thoughts`}>
            <h1>&quot;CHANGE YOUR THOUGHTS CHANGE YOUR LIFE&quot; </h1>
          </div>

          {/* ......................................................... FREQUENTLY ASKED QUESTIONS part code (5)......................................................... */}
          <Faq />

          {/* ......................................................... footer code code (6)......................................................... */}
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default page;
