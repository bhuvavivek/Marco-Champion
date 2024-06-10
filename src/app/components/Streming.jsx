import React from "react";
import styles from "../style/streming.module.css";

const data = [
  {
    heading: "Watch on tv",
    para: "SELECT YOUR DEVICE FOR STREAMING INSTRUCTIONS",
    buttons: [
      {
        name: "Cancel",
      },

      {
        name: "remove",
      },
    ],
  },
  {
    heading: "Watch on tv",
    para: "SELECT YOUR DEVICE FOR STREAMING INSTRUCTIONS",
    buttons: [
      {
        name: "Cancel",
      },

      {
        name: "remove",
      },
    ],
  },
  {
    heading: "Watch on tv",
    para: "SELECT YOUR DEVICE FOR STREAMING INSTRUCTIONS",
    buttons: [
      {
        name: "Cancel",
      },

      {
        name: "remove",
      },
    ],
  },
];

const Streming = () => {
  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url('https://www.edmylett.com/_next/static/media/background.535c7a60.png')`,
      }}
    >
      <div className={styles.hero}>
        <h1 className={styles.heading}>now streaming all episodes!</h1>
        <h2 className={`${styles.subHeading} colorPrimary`}>CHOOSE YOUR PLATFORM BELOW</h2>

        <div className={styles.columnContainer}>
          {data.map((data, index) => (
            <div className={styles.column} key={index}>
              <h3 className={styles.smallHeading}>{data.heading}</h3>
              <p className={styles.smallPara}>{data.para}</p>
              <div className={styles.box}>
              {
                data?.buttons?.map((button, index) => (
                    <button className={styles.button} key={index}>{button.name}</button>
                ))
              }
            </div>

            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Streming;
