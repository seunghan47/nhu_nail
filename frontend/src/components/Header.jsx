import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav_container}>
        <Link to='/'>
          <img
            className={styles.logo}
            src='logoNoBg.png'
            alt='logo'
          />
        </Link>
        <ul className={styles.item_container}>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : undefined)}
              to='Appointment'
              end
            >
              Book an appointment
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : undefined)}
              to='Services'
              end
            >
              Services
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : undefined)}
              to='Contact'
              end
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : undefined)}
              to='About'
              end
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
