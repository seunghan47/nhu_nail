import React from "react";
import styles from "./Contact.module.css";
import Button from "../components/Button";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <form>
        <h3>
          <span className={styles.title}>Have Questions ? </span>
        </h3>
        <h3>{/* <span className={styles.sub_title}>Don't hesitate to Reach out! </span> */}</h3>

        <div className='control'>
          <label htmlFor='name'>Name</label>
          <input
            placeholder='Jane Doe'
            type='text'
            id='name'
            name='name'
          />
        </div>

        <div className='control'>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='Janedoe@gmail.com'
            id='email'
            type='email'
            name='email'
          />
        </div>

        <div className={styles.control}>
          <label htmlFor='number'>Phone Number</label>
          <input
            placeholder='111-111-1111'
            id='number'
            type='text'
            name='number'
          />
        </div>

        <div className={styles.control}>
          <label htmlFor='subject'>Subject</label>
          <input
            placeholder='Pricing / Specific style'
            id='subject'
            type='text'
            name='subject'
          />
        </div>

        <div className={styles.control}>
          <label htmlFor='message'>Message</label>
          <textarea
            className={styles.message}
            placeholder='Is [name of style] something you can do? '
            id='message'
            type='text'
            name='message'
          />
        </div>
        <Button>Contact me!</Button>
      </form>
    </div>
  );
};

export default Contact;

/**
 *
 * logic that connects backend.
 */
