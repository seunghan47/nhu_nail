import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
import Work from "../components/Work";

const works = [
  { id: 1, image: "works/work1.jpeg", alt: "hi" },
  { id: 2, image: "works/work2.jpeg", alt: "hi" },
  { id: 3, image: "works/work3.jpeg", alt: "hi" },
  { id: 4, image: "works/work4.jpeg", alt: "hi" },
  { id: 5, image: "works/work5.jpeg", alt: "hi" },
  { id: 6, image: "works/work6.jpeg", alt: "hi" },
  { id: 7, image: "works/work7.jpeg", alt: "hi" },
  { id: 8, image: "works/work8.jpeg", alt: "hi" },
  { id: 9, image: "works/work9.jpeg", alt: "hi" },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        className={styles.background}
        // src='background.png'
        alt='someone doing nail'
      />
      <h1>Hi I'm Nhu! </h1>

      <h1>Some of my works!</h1>
      <div className={styles.grid_container}>
        {works.map((work) => (
          <Work
            image={work.image}
            alt={work.alt}
          />
        ))}
      </div>
      <Button>Book now!</Button>
    </div>
  );
};

export default Home;
