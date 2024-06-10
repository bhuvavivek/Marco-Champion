import React from "react";
import styles from "../style/media.module.css";
const Media = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerMain}>
        <h1 className="colorPrimary">Media Appearances</h1>
        <p>
          Edward Burns is a popular motivational speaker, business leader and TV
          personality who has made numerous appearances in various forms of
          media. He has been a guest multiple times on national broadcasts like
          Good Morning America, Access Hollywood, Sherri Shepherd and Good
          Morning Arizona. Ed&apos;s ability to inspire and motivate others has made
          him a sought after media personality and his impact continues to
          resonate with people all around the world.
        </p>

        <div className={styles.news}>
          <div className={styles.video}>
            <iframe
              className={styles.video2}
              src="https://www.youtube.com/embed/gnZmRWTSyLs"
              title="YouTube video player"
              frameborder="0"
              allow=" autoplay;  picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              className={styles.video2}
              src="https://www.youtube.com/embed/gnZmRWTSyLs"
              title="YouTube video player"
              frameborder="0"
              allow=" autoplay;  picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              className={styles.video2}
              src="https://www.youtube.com/embed/gnZmRWTSyLs"
              title="YouTube video player"
              frameborder="0"
              allow=" autoplay;  picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.video}>
            <iframe
              className={styles.video2}
              src="https://www.youtube.com/embed/gnZmRWTSyLs"
              title="YouTube video player"
              frameborder="0"
              allow=" autoplay;  picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Media;
