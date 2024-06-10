// Follow.js

import React from 'react';
import styles from "../style/follow.module.css";

const images = [
    {
        img:"https://www.edmylett.com/img/tvShowsEpisodes/instagram.png"
        ,link:"#"
    },
    {
        img:"https://www.edmylett.com/img/tvShowsEpisodes/instagram.png"
        ,link:"#"
    },
    {
        img:"https://www.edmylett.com/img/tvShowsEpisodes/instagram.png"
        ,link:"#"
    }
]

const Follow = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerContent}>
        <h1>follow Edward Burns change on instagram</h1>
        <h2 className="colorPrimary">@EDMYLETTCHANGE</h2>
      </div>
      <div className={styles.flexContainer}>
        {images.map((image, index) =>(

          <div className={styles.imageContainer} key={index}>
                <a href={image.link} className={styles.imageLink} key={index}>
            <img src={image.img} alt="Description" /></a>
          </div>

        ))}
        {/* Add more image containers as needed */}
      </div>
    </div>
  );
};

export default Follow;
