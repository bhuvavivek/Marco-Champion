import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./popup.module.css";

const PopUp3 = ({ closePopup, popupOpen }) => {

    const [inputs, setInputs] = useState({
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

        if (!inputs.email) return alert('Please fill all fields')
        if (errors.checkbox) return alert(errors.checkbox)

        if (errors.email) {
            // Handle invalid email
            return;
        }
        closePopup();
    }
    return (
        <div>
            <div className={`${styles.container} ${popupOpen ? styles.open : styles.close}`}>
                <div className={styles.overlay} style={{
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                    <div className={styles.card}>
                        <div
                            className={styles.close}
                            onClick={() => {
                                closePopup();
                            }}
                        >
                            <IoMdClose />
                        </div>
                        <div className={styles.textBox}>

                            <div>
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
                                        Get Notify
                                    </button>
                                </div>
                                <div>

                                    <div className={styles.checkBox}>
                                        <input name="checkbox" type="checkbox" value={inputs.checkbox} onChange={handleChange} />
                                        <span style={{
                                            textAlign: "start"
                                        }}>
                                            Yes, I want to get notified. by emails from Marco Champion
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopUp3