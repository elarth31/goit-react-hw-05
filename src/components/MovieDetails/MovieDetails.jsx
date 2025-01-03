import { IMG_URL, DEFAULT_IMG_URL } from 'constants/api';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movieDetail, genres = [], score = 0 }) => {
  const { backdrop_path, title, overview } = movieDetail;

  const genreList = Array.isArray(genres) ? genres.join(', ') : 'No genres available';
  const overviewText = overview || 'No overview available';

  return (
    <div className={styles.contentWrapper}>
      <img
        className={styles.posterImg}
        src={backdrop_path ? IMG_URL + backdrop_path : DEFAULT_IMG_URL}
        alt={`Backdrop for ${title}`}
      />
      <div className={styles.content}>
        <p className={styles.contentTitle}>{title}</p>
        <span className={styles.score}>User Score: {score}%</span>
        <span className={styles.overviewTitle}>Overview</span>
        <p className={styles.overviewText}>{overviewText}</p>
        <span className={styles.genresTitle}>Genres</span>
        <p className={styles.genresText}>{genreList}</p>
      </div>
    </div>
  );
};

export default MovieDetails;