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
              className={({ isActive }) => (isActive ? styles.active_link : undefined)}
              to='./'
              end
            >
              Book a reservation
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active_link : undefined)}
              to='./'
              end
            >
              1 more element
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active_link : undefined)}
              to='./'
              end
            >
              Services
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active_link : undefined)}
              to='./Contact'
              end
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active_link : undefined)}
              to='./About'
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
