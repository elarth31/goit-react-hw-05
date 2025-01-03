import { NavLink } from 'react-router-dom';
import styles from './SubNavigation.module.css';
import clsx from 'clsx';

const SubNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink 
        to="cast" 
        className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
      >
        Cast
      </NavLink>
      <NavLink 
        to="reviews" 
        className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default SubNavigation;