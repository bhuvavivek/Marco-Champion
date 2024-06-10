import React from "react";
import styles from "../style/review.module.css";

const review = [
  {
    name: "John Doe",
    title: "Great Podcast!",
    msg: "This podcast has changed my life. The content is amazing, and I look forward to each new episode. Keep up the fantastic work!",
  },
  {
    name: "John Doe",
    title: "Great Podcast!",
    msg: "This podcast has changed my life. The content is amazing, and I look forward to each new episode. Keep up the fantastic work!",
  },
  {
    name: "John Doe",
    title: "Great Podcast!",
    msg: "This podcast has changed my life. The content is amazing, and I look forward to each new episode. Keep up the fantastic work!",
  },
  {
    name: "John Doe",
    title: "Great Podcast!",
    msg: "This podcast has changed my life. The content is amazing, and I look forward to each new episode. Keep up the fantastic work!",
  },
  {
    name: "John Doe",
    title: "Great Podcast!",
    msg: "This podcast has changed my life. The content is amazing, and I look forward to each new episode. Keep up the fantastic work!",
  },
  {
    name: "John Doe",
    title: "Great Podcast!",
    msg: "This podcast has changed my life. The content is amazing, and I look forward to each new episode. Keep up the fantastic work!",
  },
];

const Review = () => {
  return (
    <div className={styles.main}>
      <h1>Over 10,400+ Reviews on iTunes</h1>

      <div className={styles.reviews}>
        {review.map((data, index) => (
          <div className={styles.reviewBox} key={index}>
            <div className={styles.leftContent}>
              <div>
                <span className={styles.name}>{data.name}</span>
                <img
                  src="https://www.edmylett.com/icons/itunesReviews/stars.svg"
                  alt="Stars"
                  className={styles.starImage}
                />
              </div>
              <img
                src="https://www.edmylett.com/img/itunesReviews/apos.svg"
                alt="Apostrophe"
                className={styles.aposImage}
              />
            </div>

            <div className={styles.reviewDetails}>
              <h2>{data.title}</h2>
              <p>{data.msg}</p>
            </div>
          </div>
        ))}

        {/* Add more review boxes as needed */}
      </div>
    </div>
  );
};

export default Review;
