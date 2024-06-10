import React from "react";
import styles from "../style/work.module.css";



const work = [

  {title:"Hire Edward Burns to Speak" ,image:"/images/work2.png" , shortText:"  Edward Burns has spoken at a number of conferences and always enjoy collaborating with like-minded individuals."},
  {title:"Hire Edward Burns to Speak", image:"/images/work1.png" , shortText:"  Edward Burns has spoken at a number of conferences and always enjoy collaborating with like-minded individuals.", isYellowBg:true},
  {title:"Hire Edward Burns to Speak" ,image:"/images/work2.png" ,shortText:"  Edward Burns has spoken at a number of conferences and always enjoy collaborating with like-minded individuals."},
]
const Work = () => {
  return (
    <div className={styles.container}>
      <h1>WORK WITH ED</h1>

      <div className={styles.box}>

          {work.map((workItem,index) =>(

        <div className={`${styles.Sbox} ${ workItem.isYellowBg && styles.Sbox2}` } key ={index}>
          <div className={styles.boxLeft}>
            <h4>{workItem.title}</h4>
            <p>
             {workItem.shortText}
            </p>
            <button>BOOK Edward Burns</button>
          </div>
          <div className={styles.boxRight}>
            <img src={workItem.image} alt="" />
          </div>
        </div>
        ))}
        {/* <div className={`${styles.Sbox} ${styles.Sbox2}`}>
          <div className={styles.boxLeft}>
            <h4>Hire Edward Burns to Speak</h4>
            <p>
              Edward Burns has spoken at a number of conferences and always enjoy
              collaborating with like-minded individuals.
            </p>
            <button>BOOK Edward Burns</button>
          </div>
          <div className={styles.boxRight}>
            <img src="/images/work1.png" alt="" />
          </div>
        </div> */}
        {/* <div className={styles.Sbox}>
          <div className={styles.boxLeft}>
            <h4>Hire Edward Burns to Speak</h4>
            <p>
              Edward Burns has spoken at a number of conferences and always enjoy
              collaborating with like-minded individuals.
            </p>
            <button>BOOK Edward Burns</button>
          </div>
          <div className={styles.boxRight}>
            <img src="/images/work2.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
