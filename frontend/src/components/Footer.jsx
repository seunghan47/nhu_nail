import React from "react";
import styles from "./Footer.module.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        © Copy Righted 2024 | All rights reserved | Created by{" "}
        <a
          href='https://www.paulim.click'
          target='_blank'
          rel='noreferrer'
        >
          Paul Lim
        </a>
      </div>
      ;
    </footer>
  );
};

export default Footer;
