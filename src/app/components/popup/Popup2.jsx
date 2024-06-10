import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./popup.module.css";

const PopUp2 = ({ closePopup, popupOpen }) => {

    const [inputs, setInputs] = useState({
        inputcode: "",
    })

    const [errors, setErrors] = useState({ inputcode: '' });



    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs({ ...inputs, [name]: value });

    };


    const handlePopUpSubumit = (e) => {
        e.preventDefault();
        if (!inputs.inputcode) return alert('Input Code is  required')

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
                    <div className={styles.card} >
                        <div
                            className={styles.close}
                            onClick={() => {
                                closePopup();
                            }}
                        >
                            <IoMdClose />
                        </div>
                        <div className={styles.textBox} style={{
                            width: '100%'
                        }}>
                            <div>
                                <div style={{
                                    textAlign: 'start',
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    input code to access rabbit whole
                                </div>

                                <div>
                                    <input
                                        className={styles.input}
                                        name="email"
                                        type="text"
                                        placeholder="Input Code "
                                        value={inputs.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <button onClick={handlePopUpSubumit}>
                                        Access
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopUp2