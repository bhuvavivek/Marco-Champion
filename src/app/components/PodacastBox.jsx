"use client";

import React from "react";
import styles from "../style/podcastBox.module.css";
import styles2 from "../style/tv-show.module.css";

const podcastData = [
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "Over 20 milion of Downloads ",
  },
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "#1 Podcast in the world",
  },
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "Listened in over 67 countries ",
  },
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "Over 10,400 5-Star Ratings",
    isBorder: true,
  },
];

const onTvData = [
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "Over 0 milion of Downloads ",
  },
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "#1 Podcast in the world",
  },
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "Listened in over 67 countries ",
  },
  {
    img: "https://www.edmylett.com/icons/ms-download.svg",
    name: "Over 10,400 5-Star Ratings",
    isBorder: true,
  },
];
const PodacastBox = ({ isOnTvPage }) => {
  return (
    <>
      <div className={styles.mainBody}>
        <div className={`${styles.main} ${isOnTvPage && styles2.main2}`}>
          <div className={styles.podcatsMain}>
            {isOnTvPage
              ? onTvData.map((data, index) => (
                  <div className={styles.podcast} key={index}>
                    <img src={data.img} alt="" />
                    <h4>{data.name}</h4>
                    <hr className={data.isBorder ? styles.borderHr : ""} />
                  </div>
                ))
              : podcastData.map((data, index) => (
                  <div className={styles.podcast} key={index}>
                    <img src={data.img} alt="" />
                    <h4>{data.name}</h4>
                    <hr className={data.isBorder ? styles.borderHr : ""} />
                  </div>
                ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default PodacastBox;
