import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./popup.module.css";

const Popup1 = ({ setPopupOpen, popupOpen }) => {
  const [submited, setSubmited] = useState(false);

  const [inputs, setInputs] = useState({
    firstname: "",
    email: "",
    checkbox: false
  })

  const [errors, setErrors] = useState({ email: '', checkbox: "" });


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    const inputValue = name === 'checkbox' ? checked : value;
    setInputs({ ...inputs, [name]: inputValue });

    if (name === 'email') {
      if (value && !emailRegex.test(value)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }

    if (name === "checkbox") {
      if (!checked) {
        setErrors({ ...errors, checkbox: 'Please check the box' });
      } else {
        setErrors({ ...errors, checkbox: '' });
      }
    }

  };


  const handlePopUpSubumit = (e) => {
    e.preventDefault();

    if (!inputs.firstname || !inputs.email) return alert('Please fill all fields')
    if (errors.checkbox) return alert(errors.checkbox)

    if (errors.email) {
      // Handle invalid email
      return;
    }
    setSubmited(true)

  }

  return (
    <div className={`${styles.container} ${popupOpen ? styles.open : styles.close}`}>
      <div className={styles.overlay} ></div>

      {submited ? (
        <div className={styles.card2}>
          <div className={styles.close} onClick={() => setPopupOpen(false)}>
            <IoMdClose />
          </div>

          <div className={styles.textBox2}>
            <h1>
              Text me for 1 on 1 <br /> Conversation
            </h1>
            <div>
              <button>Join community number</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <div
            className={styles.close}
            onClick={() => {
              setPopupOpen(false);
              window.sessionStorage.setItem("close", "TRUE");
            }}
          >
            <IoMdClose />
          </div>
          <div className={styles.textBox}>
            <h1>
              JOIN THE WORLD’S <br /> BIGGEST MOVEMENT <br /> TO ESCAPE THE
              MATRIX
            </h1>
            <h2>
              GET OUR LATEST UPDATES ON HOW TO <br /> REPROGRAM YOUR MIND FOR
              SUCCESS
            </h2>

            <div>
              <div>
                <input
                  className={`${styles.input} ${styles.input1}`}
                  type="text"
                  name="firstname"
                  placeholder="Your Full Name..."
                  value={inputs.firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className={styles.input}
                  name="email"
                  type="text"
                  placeholder="Your Email Address..."
                  value={inputs.email}
                  onChange={handleChange}
                />
                {errors.email && <span style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "1px"
                }}>{errors.email}</span>}
              </div>

              <div>
                <button onClick={handlePopUpSubumit}>
                  Upgrade Your Mind
                </button>
              </div>
              <div>

                <div className={styles.checkBox}>
                  <input name="checkbox" type="checkbox" value={inputs.checkbox} onChange={handleChange} />{" "}
                  <span>
                    Yes, I want to recive latest episodes and inspiring content
                    emails from Marco Champion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup1;
