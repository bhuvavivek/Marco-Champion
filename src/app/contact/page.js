import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import styles from "../style/contactPage.module.css";

const subjectOptions = [
  "General contact",
  "Press / media inquiry",
  "Learn more",
  "Looking for Job opportunities",
  "Book Mac Champion for an event",
  "Other",
];

const page = () => {
  return (
    <div className={`${styles.mainHero}`}>
      <Navigation />
      <div className={styles.ContaintWrapper}>

        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'

        }}>
          <div style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Blanka '
          }}>
            contact
          </div>
        </div>


        {/* contact form div */}
        <form className={styles.contactForm}>
          {/* Name And Name Inputs*/}
          <div className={styles.FieldWraper}>
            <h1>
              NAME <span>(REQUIRED)</span>
            </h1>
            <div className={styles.NameInputs}>

              {/* first Name */}
              <div>
                <input
                  type="text"
                  name="first"
                  className={styles.InputTextFields}
                />
                <h1 className={styles.formFontStyle}>FIRST</h1>
              </div>

              {/* last Name */}
              <div>
                <input
                  type="text"
                  name="last"
                  className={styles.InputTextFields}
                />
                <h1 className={styles.formFontStyle}>LAST</h1>
              </div>
            </div>
          </div>

          {/* Email and Emil Input  */}
          <div className={styles.FieldWraper}>
            <h1>
              EMAIL <span>(REQUIRED)</span>
            </h1>
            <input
              type="text"
              name="email"
              className={styles.InputTextFields}
            />
          </div>

          {/* Phone and phone Input */}
          <div className={styles.FieldWraper}>
            <h1>
              PHONE <span>(REQUIRED)</span>
            </h1>
            <input
              type="text"
              name="phone"
              className={styles.InputTextFields}
            />
          </div>

          {/* Subject and OPTIONS  */}
          <div style={{ width: "100%" }}>
            <h1
              style={{
                marginBottom: "8px",
              }}
            >
              SUBJECT <span>(REQUIRED)</span>
            </h1>
            {subjectOptions.map((option, index) => {
              return (
                <div key={option} className={styles.subjectOptions}>
                  <input type="radio" name="subject" />
                  <h1 className={styles.formFontStyle}>{option}</h1>
                </div>
              );
            })}

            {/* show below field conditionaly if the other is selected show this else hide this  */}
            <input
              type="text"
              placeholder="Other"
              className={styles.InputTextFields}
              style={{ marginTop: "12px" }}
            />
          </div>

          {/* Message and Message Input */}
          <div className={styles.FieldWraper}>
            <h1>
              MESSAGE <span>(REQUIRED)</span>
            </h1>
            <textarea type="text" className={styles.textarea} />
          </div>
        </form>

        {/* submit button */}
        <div className={styles.SubmitButtonWrapper}>
          <button type="submit" className={styles.submitButton}>
            SUBMIT
          </button>
        </div>

        {/*CHAMP WEEK*/}
        <div className={styles.champWeekWrapper}>
          <div className={styles.champweek}>
            <img src="/images/CHAMP_WEEKLY.svg" alt="" width='100%' />
            <h1 style={{
              fontSize: '30px'
            }}>SIGN UP FOR MY WEEKLY NEWSLETTER</h1>
            <input type="text" placeholder="Your Email" width="100%" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
