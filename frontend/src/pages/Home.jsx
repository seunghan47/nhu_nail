import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <img
        src=''
        alt='someone doing nail'
      />
      <h1>Hi I'm Nhu! </h1>

      <h1>Some of my works!</h1>
      <div className={styles.grid_container}>
        <img src='' />
        <img src='' />
        <img src='' />
        <img src='' />
      </div>
      <button type='button'>Book an appointment!</button>
    </div>
  );
};

export default Home;
