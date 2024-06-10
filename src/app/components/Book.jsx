import React from "react";
import styles from "../style/book.module.css"; // Assuming you have a separate CSS module file

const Book = () => {
  const listItems = [
    "Learn why you&#39;re closer to your dreams and goals than you think and why using The Power of One More strategies will help you cross the finish line in whatever race you&#39;re running",
    "Understand the psychology and science of how to use The Power of One More in every part of your life will help you solve problems and achieve levels of success you never thought possible",
    "Discover time-tested and unique solutions to challenges that will remove the mental roadblocks you&#39;ve been battling for years.",
  ];

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <h1 className={styles.heading}>the power of one more</h1>
          <p className={styles.paragraph}>
            In The Power of One More, renowned keynote speaker and performance
            expert Edward Burns draws on 30 years of experience as an
            entrepreneur and coach to top athletes, entertainers, and business
            executives to reveal powerful strategies to help you live an
            extraordinary “one more” life.
          </p>
          <h2 className={styles.subHeading}>In This Book, You&#39;ll:</h2>
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <li key={index}>
                <img
                  src="https://www.edmylett.com/_next/static/media/check.be2ace8b.svg"
                  alt="Check Icon"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightDiv}>
          <img
            src="	https://www.edmylett.com/img/books/ThePowerOfOneMore.png"
            alt="Your Image Alt"
            className={styles.image}
          />
          <div className={styles.buttonRow}>
            <button className={styles.button}>Button 1</button>
            <button className={styles.button}>Button 2</button>
          </div>
        </div>
      </div>

      <div className={`${styles.mainDiv2}`}>
        <div className={styles.leftDiv}>
          <h1 className={styles.heading}>the power of one more</h1>
          <p className={styles.paragraph}>
            In The Power of One More, renowned keynote speaker and performance
            expert Edward Burns draws on 30 years of experience as an
            entrepreneur and coach to top athletes, entertainers, and business
            executives to reveal powerful strategies to help you live an
            extraordinary “one more” life.
          </p>
          <h2 className={styles.subHeading}>In This Book, You&#39;ll:</h2>
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <li key={index}>
                <img
                  src="https://www.edmylett.com/_next/static/media/check.be2ace8b.svg"
                  alt="Check Icon"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightDiv}>
          <img
            src="	https://www.edmylett.com/img/books/ThePowerOfOneMore.png"
            alt="Your Image Alt"
            className={styles.image}
          />
          <div className={styles.buttonRow}>
            <button className={styles.button}>Button 1</button>
            <button className={styles.button}>Button 2</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
