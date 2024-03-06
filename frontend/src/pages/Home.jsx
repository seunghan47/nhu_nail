import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
import { Link, NavLink } from "react-router-dom";
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
          Discover the art of beautiful nails with my expert services, including pedicures, manicures, nail extensions,
          and stunning nail art. I have also been doing lots of leashes and you can call and apply for that separately
          if you would like !
          <br />
          <br />
          <span className={styles.service_span}>
            <Link to='/Services'>Services I Offer</Link>
          </span>
        </p>
      </div>
      <div className={styles.expertise}>
        <h1>My Expertise</h1>
        <span className={styles.span_offer}>
          <span className={styles.service_span}>
            <h3>
              <Link to='/Services'>What I Can Do</Link>
            </h3>
          </span>
        </span>
        <div className={styles.expertise_container}>
          <div className={styles.expertise_item}>
            <img
              src='lashservice.png'
              alt='lady getting her lashes done'
              className={styles.image}
            />
            <h3>Lash Services</h3>
            <p>
              Lash Styling, Attcachment, Extensions, and More! <br /> Enjoy a Relaxing Lash Service
            </p>
          </div>
          <div className={styles.expertise_item}>
            <img
              className={styles.image}
              src='nailservice.webp'
              alt='lady getting her nails done'
            />
            <h3>Nail Services</h3>
            <p>
              Manicure, Pedicure, Nail Art, and More! <br /> Enjoy a Relaxing Nail Service
            </p>
          </div>
        </div>
      </div>
      <div className={styles.book}>
        <h1>
          <span className={styles.wait}>What are you waiting for ! </span>
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
