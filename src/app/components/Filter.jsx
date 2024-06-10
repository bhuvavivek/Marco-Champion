"use client";

import React, { useEffect, useState } from "react";
import styles from "../style/filter.module.css";

const buttons = [
  {
    text: "Sport Legends",
    value: "spotLegend",
  },
  {
    text: "Health Experts",
    value: "health",
  },
  {
    text: "Me Speaking to You",
    value: "meSpeaking",
  },
  {
    text: "Entrepreneurs",
    value: "entrepreneurs",
  },
];

const podcast = [
  {
    img: "	/images/podcast1.png",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
    typeof: "spotLegend",
  },
  {
    img: "		/images/podcast1.png",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
    typeof: "health",
  },
  {
    img: "	/images/podcast1.png",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
    typeof: "spotLegend",
  },
  {
    img: "		/images/podcast1.png",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
    typeof: "health",
  },
  {
    img: "	/images/podcast1.png",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
    typeof: "spotLegend",
  },
  {
    img: "		/images/podcast1.png",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
    typeof: "health",
  },
];

const Filter = () => {
  const [activeButtons, setActiveButtons] = useState({
    spotLegend: false,
    entrepreneurs: false,
    meSpeaking: false,
    health: false,
  });

  const [filterData, setFilterData] = useState([...podcast]);

  useEffect(() => {
    const filteredPodcasts = podcast.filter(
      (pod) =>
        activeButtons[pod.typeof] ||
        Object.values(activeButtons).every((value) => !value)
    );

    setFilterData(filteredPodcasts);
  }, [activeButtons]);

  return (
    <div className={styles.main}>
      <div className={styles.filterName}>
        {buttons.map((data, index) => (
          <button key={index}
            onClick={() =>
              setActiveButtons({
                ...activeButtons,
                [data.value]: !activeButtons[data.value],
              })
            }
            className={activeButtons[data.value] && styles.active}
          >
            {data.text}
          </button>
        ))}
      </div>
      <div className={styles.socialBox}>
        {filterData.map((pod, index) => (
          <div className={styles.box} key={index}>
            <img src={pod.img} alt="" />
            <div className={styles.detail}>
              <div className={styles.date}>
                <h2>Ep. {pod.epNO}</h2>
                <h2>{pod.date}</h2>
              </div>
              <h3>{pod.author}</h3>
              <h1>{pod.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
