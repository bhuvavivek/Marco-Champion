"use client"
import { useEffect, useState } from 'react';
// import { PhoneInput } from "react-contact-number-input";
import styles from "../style/bootcampForm.module.css";

const BootcampForm = () => {
  const [cellphone, setCellphone] = useState('');

  useEffect(() => {
    // Find the special-label element and set its background to none
    const specialLabel = document.querySelector('.react-tel-input .special-label');
    if (specialLabel) {
      specialLabel.style.background = 'none';
    }
  }, []);

  const handleCellphoneChange = value => {
    setCellphone(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerFix}>

        <div className={styles.heading}>
          <h1>REPROGRAM</h1>
          <h1>BOOTCAMP</h1>
          <div style={{ marginTop: "15px" }}>
            <h3>Join the Waitlist below </h3>
            <h3>to be notified when we open</h3>
          </div>
        </div>


        <div className={styles.card}>
          <form>
            <div className={styles.inputBorder}>
              <input placeholder='First Name *' required className={styles.inputBorderplacholder} />
            </div>
            <div className={styles.inputBorder}>
              <input placeholder='Email *' type="email" required className={styles.inputBorderplacholder2} />
            </div>
            <div className={styles.inputBorder}>
              <input placeholder='cell phone *' type="number" required className={styles.inputBorderplacholder3} />
            </div>

            <label>
              <input type="checkbox" required />
              By submitting a phone number you are opting into SMS messaging for reminders from the Winners Circle
            </label>
            {/* <div className={styles.cellphoneInput}>
              <PhoneInput
                onlyCountries
                value={cellphone}
                onChange={handleCellphoneChange}
                containerClass={styles.customPhoneInput}
                inputClass={styles.customPhoneInputField}
                dropdownClass={styles.customPhoneDropdown}
                placeholder="Enter phone number"
              />
            </div> */}
            <button type="submit">join waitlist</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BootcampForm;
