import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav_container}>
        <img
          className={styles.logo}
          src='logoNoBg.png'
          alt='logo'
        />
        <ul className={styles.item_container}>
          <li className={styles.header_item}>
            <Link to='./'>Book a reservation</Link>
          </li>
          <li className={styles.header_item}>
            <Link to='./'>1 more element</Link>
          </li>
          <li className={styles.header_item}>
            <Link to='./'>Services</Link>
          </li>
          <li className={styles.header_item}>
            <Link to='./Contact'>Contact</Link>
          </li>
          <li className={styles.header_item}>
            <Link to='./About'>About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
