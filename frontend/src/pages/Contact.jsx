import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.flex_container}>
        <img
          src=''
          alt='calming room'
        />
        <form>
          <h2>Have Questions ? </h2>
          <h4>Don't hesitate to Reach out!</h4>

          <div className='control-row'>
            <div className='control'>
              <label htmlFor='first-name'>First Name</label>
              <input
                type='text'
                id='first-name'
                name='first-name'
              />
            </div>

            <div className='control'>
              <label htmlFor='last-name'>Last Name</label>
              <input
                type='text'
                id='last-name'
                name='last-name'
              />
            </div>
          </div>

          <div className='control'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
            />
          </div>

          <div className={styles.control}>
            <label htmlFor='number'></label>
            <input
              id='number'
              type='text'
              name='number'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
