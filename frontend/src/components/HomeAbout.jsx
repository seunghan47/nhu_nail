import React from "react";
import styles from "./HomeAbout.module.css";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className={styles.home_about}>
      <div className={styles.home_header}>
        <h5> About Me </h5>
        <span className={styles.home_header_sub}>
          <h3>
            <Link to='/Services'>What I Provide</Link>
          </h3>
        </span>
      </div>
      <div className={styles.home_about_container}>
        <div className={styles.home_about_item}>
          <h1>
            <span style={{ textDecoration: "underline", color: "#ec9131" }}>Nhu's Nails</span> ~Nail~ Your Look, And
            Flutter Your Lashes
          </h1>
          <p>
            Welcome to Nhu's Nails, where your beauty dreams come true. I create any nails/lash designs of your choice
            or give a personalized recommendation if you can't decide !
          </p>
          <span className={styles.about_link}>
            <h5>
              <span style={{ textDecoration: "underline" }}>
                <Link to='/about'>About Me</Link>
              </span>
            </h5>
          </span>
        </div>
        <div className={styles.home_about_item}>
          <img
            src='home_about.jpg'
            alt='hands'
          />
        </div>
        <div className={styles.home_about_item}>
          <p>
            A lot of people struggle trying to do their own lashes and nails without the proper equipment or knowledge
            to apply them correctly. Look no further, at this place, I will tailor specifically for your design and make
            sure you get the best look that you deserve!
          </p>
          <br />
          <span style={{ fontStyle: "italic" }}>
            <p>My goal is to provide great service with a fair price to all of us that needs it</p>
          </span>
          <br />
          <p>
            Whether you're looking for a nail service or a lash service, I'm here to help with all! Feel free to reach
            out for more details and pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
