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
    '/images/story/CEO-of-MOTIV-1.png',
    '/images/story/CEO-of-MOTIV-2.png',
    '/images/story/CEO-of-MOTIV-3.png',
  ]

  const EnterPreneurImage = [
    '/images/story/Serial-1.png',
    '/images/story/Serial-2.png',
    '/images/story/Serial-3.png',
  ]

  const MindHackingImage = [
    '/images/story/Mind-1.png',
    '/images/story/Mind-2.png',
    '/images/story/Mind-3.png',
  ]

  const SpeakerImage = [
    '/images/story/speaker-1.png',
    '/images/story/speaker-2.png',
    '/images/story/speaker-3.png',
  ]
  const AthleteImage = [
    '/images/story/Athlete-1.png',
    '/images/story/Athlete-2.png',
    '/images/story/Athlete-3.png',
  ]
  const HumanImage = [
    '/images/story/Human-1.png',
    '/images/story/Human-2.png',
    '/images/story/Human-3.png',
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
