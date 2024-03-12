import styles from "./HomeServices.module.css";
import { Link } from "react-router-dom";
const HomeServices = () => {
  return (
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
            src='home_expertise_lash.jpg'
            alt='lady getting her lashes done'
          />
          <h3>Lash Services</h3>
          <p>
            Lash Styling, Attcachment, Extensions <br /> Enjoy a Relaxing Lash Service
          </p>
        </div>
        <div className={styles.expertise_item}>
          <img
            src='home_expertise_nail.jpg'
            alt='lady getting her nails done'
          />
          <h3>Nail Services</h3>
          <p>
            Enjoy our Manicure, Art, Pedicures <br /> Any Nail Services Of Your Choice Here
          </p>
        </div>

        <div className={styles.expertise_item}>
          <img
            src='home_expertise.jpg'
            alt='beautiful'
          />
          <h3>Cosmetics Service</h3>
          <p>
            Going To a Fancy Event? <br /> Customize Your Beauty Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
