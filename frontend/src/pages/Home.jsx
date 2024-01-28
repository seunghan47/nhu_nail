import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
// import Work from "../components/Work";

const Home = () => {
  return (
    <div className={styles.image_container}>
      <div className={styles.flex_container}>
        <img
          className={styles.background}
          src='wallpaper.avif'
          alt=''
        />
        <img
          className={styles.background}
          src='wallpaper2.avif'
          alt=''
        />
        <img
          className={styles.background}
          src='wallpaper3.avif'
          alt=''
        />
      </div>
      <div className={styles.home}>
        <h1>
          Hi, I'm Nhu! Welcome to my <span className={styles.span}>NAIL SHOP!</span>
        </h1>
        <p>
          Discover the art of beautiful nails with our expert services, including pedicures, manicures, nail extensions,
          and stunning nail art
        </p>
        <Button>Book Here!</Button>
      </div>
    </div>
  );
};

export default Home;

/* <div className={styles.grid_container}>
{works.map((work) => (
  <Work
    image={work.image}
    alt={work.alt}
  />
))}
</div> */

// const works = [
//   { id: 1, image: "works/work1.jpeg", alt: "hi" },
//   { id: 2, image: "works/work2.jpeg", alt: "hi" },
//   { id: 3, image: "works/work3.jpeg", alt: "hi" },
//   { id: 4, image: "works/work4.jpeg", alt: "hi" },
//   { id: 5, image: "works/work5.jpeg", alt: "hi" },
//   { id: 6, image: "works/work6.jpeg", alt: "hi" },
//   { id: 7, image: "works/work7.jpeg", alt: "hi" },
//   { id: 8, image: "works/work8.jpeg", alt: "hi" },
//   { id: 9, image: "works/work9.jpeg", alt: "hi" },
// ];
