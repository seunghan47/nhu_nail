import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
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
      <HomeAbout />
      <HomeServices />
      <div className={styles.book}>
        <h1 style={{ marginBottom: "2rem" }}>
          <span className={styles.wait}>What Are You Waiting For !!</span>
          <br />
          Book an Appointment Now !
        </h1>
        <Button>
          <NavLink to='/Appointment'>Book Here!</NavLink>
        </Button>
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
