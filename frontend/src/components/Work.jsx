import React from "react";
import styles from "./Work.module.css";
const Work = ({ image, alt }) => {
  return (
    <img
      className={styles.image}
      src={image}
      alt={alt}
    />
  );
};

export default Work;
