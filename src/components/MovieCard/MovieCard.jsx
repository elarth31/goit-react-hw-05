import PropTypes from 'prop-types';
import { IMG_URL, DEFAULT_IMG_URL, DEFAULT_TITLE, DEFAULT_DATE } from 'constants/api';
import styles from './MovieCard.module.css';

const MovieCard = ({ data: { poster_path, title, release_date } }) => {
  const displayTitle = title || DEFAULT_TITLE;
  const displayDate = release_date || DEFAULT_DATE;
	const displayImage = poster_path ? IMG_URL + poster_path : DEFAULT_IMG_URL;
	
	 return (
    <div className={styles.card}>
      <img
        className={styles.avatarImg}
        src={displayImage}
        alt={`Poster of movie: ${displayTitle}`}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <hr className={styles.hr} />
        <p className={styles.cardTitle}>{displayTitle}</p>
        <p className={styles.cardDate}>{displayDate}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieCard;