import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Oops! Page not found</p>
        <Link to="/" className={styles.link}>
           Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;