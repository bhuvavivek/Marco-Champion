import React from "react";
import styles from "../style/edStory.module.css";

const data = [
  {
    img: "/images/story1.png",
    h1: "  As a young man, he attended the University of the Pacific in Stockton, California, where he was a three-time academic All-American before an untimely injury ended his dream of playing in the major leagues. ",
    h2: "At his father&#39;s urging, Ed became a counselor for disadvantaged children in what turned out to be one of the pivotal turning points of his life. It was there he first started to appreciate the importance of serving others and laying the foundation for success principles he would put into practice later in life.",
  },
  {
    isHeading: true,
    heading: (
      <span>
        “The instant you accept responsibility for everything in your life
        <br />
        is the moment you acquire the power to change it.”
      </span>
    ),
  },

  {
    img: "/images/story2.png",
    h1: "  As a young man, he attended the University of the Pacific in Stockton, California, where he was a three-time academic All-American before an untimely injury ended his dream of playing in the major leagues. ",
    h2: "At his father&#39;s urging, Ed became a counselor for disadvantaged children in what turned out to be one of the pivotal turning points of his life. It was there he first started to appreciate the importance of serving others and laying the foundation for success principles he would put into practice later in life.",
    isFlex: true,
  },

  {
    isHeading: true,
    heading: (
      <span>
        “The instant you accept responsibility for everything in your life
        <br />
        is the moment you acquire the power to change it.”
      </span>
    ),
  },

  {
    img: "/images/story3.png",
    h1: "  As a young man, he attended the University of the Pacific in Stockton, California, where he was a three-time academic All-American before an untimely injury ended his dream of playing in the major leagues. ",
    h2: "At his father&#39;s urging, Ed became a counselor for disadvantaged children in what turned out to be one of the pivotal turning points of his life. It was there he first started to appreciate the importance of serving others and laying the foundation for success principles he would put into practice later in life.",
  },
];

const EdStory = () => {
  return (
    <>
      <div className={styles.containerMain}>
        <div className={styles.main}>
          <h1>ed&#39;s zero to hero story</h1>

          {data.map((story, index) =>
            story.isHeading ? (
              <h1 className={styles.heading} key={index}>
                {story.heading}
              </h1>
            ) : (
              <div
                key={index}
                className={`${styles.ed} ${story.isFlex && styles.edFlex}`}
              >
                <div className={styles.edBox}>
                  <img src={story.img} alt="" />
                </div>

                <div className={styles.edBox}>
                  <h3>{story.h1}</h3>
                  <br />
                  <h3>{story.h2}</h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default EdStory;
