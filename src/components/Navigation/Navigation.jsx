import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          clsx(styles.link, { [styles.active]: isActive })
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/movies'
        className={({ isActive }) =>
          clsx(styles.link, { [styles.active]: isActive })
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

