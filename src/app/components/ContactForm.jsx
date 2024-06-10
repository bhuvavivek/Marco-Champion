import React from 'react'
import styles from "../style/contactForm.module.css";


const ContactForm = ( {isContactPage}) => {
  return (
    <div>

      <div className={`${styles.hero} ${isContactPage && styles.Cpage}`}>

          <div className={`${styles.contactForm} `}>

            <h2 className={isContactPage && styles.hide}>Hire Me to Speak</h2>
            <h2 className={!isContactPage && styles.hide}>Connect with Edward Burns</h2>

            <form action="">
              <input type="text" placeholder="Your Name" className={isContactPage && styles.inputs}/>
              <input type="email" placeholder="Your Email" className={isContactPage && styles.inputs} />
              <input type="text" placeholder="Company Name" className={isContactPage && styles.inputHide} />
              <input type="text" placeholder="Subject of inquiry" className={isContactPage && styles.inputHide} />
              <textarea name="request" id="" cols="30" rows="5" placeholder='Request' className={isContactPage && styles.inputs}></textarea>
              <button className={isContactPage && styles.hide}>Send A Booking Request</button>
              <button className={!isContactPage && styles.hide}>Submit</button>
            </form>

          </div>

      </div>


    </div>
  )
}

export default ContactForm