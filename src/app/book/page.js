import React from "react";
import styles from "../style/book.module.css";
import styles4 from "../style/hire.module.css";
import styles5 from "../style/home.module.css";

import styles3 from "../style/podcastPage.module.css";
import Navigation from "../components/Navigation";
import Book from "../components/Book";
import AboutEd from "../components/AboutEd";
import Work from "../components/Work";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className={` ${styles3.mainHero} ${styles.mainHero}`}>
        <div className={` ${styles3.hero} ${styles.hero}`}>
          <Navigation />
          <div
            className={`${styles5.heroMain} ${styles4.heroMain} ${styles3.heroMain} ${styles.heroMain}`}
          >
            <h1>
              Edward Burns is the{" "}
              <span className="colorPrimary">bestselling author</span> of{" "}
              <span className="colorPrimary">#MaxOut Your Life</span> and{" "}
              <span className="colorPrimary"> The Power of One More</span>
            </h1>
          </div>
        </div>
      </div>

      <Book />
      <AboutEd />
      <Work />
      <Footer />
    </>
  );
};

export default page;
