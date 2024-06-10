"use client"

import { useState } from "react";
import styles from "../style/ceo.module.css";

const CEO = () => {

  const [textindex, setTextIndex] = useState(0);

  const titles = [
    'CEO of MOTIV',
    'Serial Entrepreneur',
    'Mind Hacking Coach',
    'Speaker',
    'Athlete',
    'Human-Being'
  ];

  const MotivImages = [
    '/images/Story11.png',
    '/images/Story22.png',
    '/images/Story33.png',
  ]

  const EnterPreneurImage = [
    '/images/Story11.png',
    '/images/Story33.png',
    '/images/Story22.png',
  ]

  const MindHackingImage = [
    '/images/Story22.png',
    '/images/Story11.png',
    '/images/Story33.png',
  ]

  const SpeakerImage = [
    '/images/Story33.png',
    '/images/Story11.png',
    '/images/Story22.png',
  ]
  const AthleteImage = [
    '/images/Story33.png',
    '/images/Story22.png',
    '/images/Story11.png',
  ]
  const HumanImage = [
    '/images/Story33.png',
    '/images/Story11.png',
    '/images/Story22.png',
  ]

  const ImagesList = [
    MotivImages,
    EnterPreneurImage,
    MindHackingImage,
    SpeakerImage,
    AthleteImage,
    HumanImage
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>

          {
            ImagesList[textindex].map((image, index) => {
              return (
                <div key={index} className={styles.imgBox}>
                  <img src={image} alt="" />
                </div>
              )
            })
          }
        </div>
        <div className={styles.right}>

          {
            titles.map((title, index) => {
              return (
                <div key={index} onClick={() => {
                  setTextIndex(index)
                }}>
                  <img src="/images/story_arrow.png" alt="" style={{
                    visibility: textindex === index ? 'visible' : "hidden"
                  }} />
                  <h2>{title}</h2>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default CEO;
