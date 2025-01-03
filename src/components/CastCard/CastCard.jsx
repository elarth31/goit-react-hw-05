import PropTypes from 'prop-types'; 
import { IMG_URL, DEFAULT_IMG_URL } from 'constants/api';
import styles from './CastCard.module.css';
import { useState, useEffect } from 'react';

const CastCard = ({ data: { profile_path, name, character } }) => {
  const imageUrl = profile_path ? IMG_URL + profile_path : DEFAULT_IMG_URL;

  // Логика для отслеживания загрузки изображения
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Изображение загружено, меняем состояние
  };

  return (
    <div className={styles.card}>
      <img
        className={`${styles.avatarImg} ${isImageLoaded ? styles.loaded : ''}`} // Добавляем класс при загрузке
        src={imageUrl}
        alt={`Avatar of ${name}`}
        loading="lazy"
        onLoad={handleImageLoad} // Обработчик события загрузки изображения
      />

      <div className={styles.cardContent}>
        <hr className={styles.hr} />
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardDescription}>{character}</p>
      </div>
    </div>
  );
};

CastCard.propTypes = {
  data: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastCard;

