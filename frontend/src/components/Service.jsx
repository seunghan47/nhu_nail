import React from "react";
import styles from "./Service.module.css";
const Service = ({ title, image, description }) => {
  return (
    <div className={styles.flex_container}>
      <div className={styles.text_flex_container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}> {description}</p>
      </div>
      <img
        className={styles.image}
        src={image}
        alt={title}
      />
    </div>
  );
};

export default Service;
