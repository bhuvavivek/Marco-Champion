import { lazy, Suspense } from "react";
import styles2 from "../style/hire.module.css";
import styles from "../style/home.module.css";

import Loading from "../components/Loading";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';



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
          <Navigation />


{/* ......................................................... Header poster code (1) ......................................................... */}
          <div className={`${styles.mainHero} ${styles2.mainHero}`}>
            {/* bg image is here in style2 Hero  and this is whole nevigataion section*/}
            <div className={styles2.hero} style={{ marginTop: "40px" }}>

              <div className={`${styles.heroMainPosition}  ${styles2.mainBody}`}>
                <div className={styles2.heroMainFlex}>
                  {/* this is a image  */}
                  <img src="/images/Reprogram.svg" alt="" />

                  {/* this div is for button */}
                  <div className={styles2.heroMain}>
                    <a href="#">JOIN WAITLIST</a>
                  </div>
                </div>

                {/* this is reprogram svg image */}
                <div className={`${styles.heroImage}`}>
                  <img src="/images/Reprogram-Hero.svg" alt="" />
                </div>
              </div>

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
          <Card className="border-0 text-center rounded-0 text-light responsive_thistext" style={{ backgroundColor: "black" }}>
            <div style={{margin:"5%",fontSize:'20vh'}} className={styles.boxmain}>
              <h1 className={styles.headerEotion}>THOUGHT X EMOTION = REALITY </h1>
              <hr style={{borderColor:"black"}}/>
              <h3 className={styles.headerEotionDesc}>
                THOUGHT DISCONNECTED FROM EMOTION HAS NO <br /> EFFECT, EMOTION NOT
                GUIDED BY THOUGHT IS <br />CHAOS.
              </h3>
            </div>
          </Card>
          


{/* ......................................................... Bootcamp code code (3)......................................................... */}
          <div className={styles2.bootcamWapper} 
          // style={{background: "blue"}}
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
