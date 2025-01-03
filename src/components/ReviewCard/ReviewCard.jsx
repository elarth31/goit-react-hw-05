import { useState } from 'react';
import styles from './ReviewCard.module.css';
import { DEFAULT_IMG_URL, IMG_URL } from 'constants/api';

const ReviewCard = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>; 
  }

  return (
    <>
      {reviews.map(
        ({ id, author, content, author_details: { avatar_path, rating } }) => {

          const [isImageLoaded, setIsImageLoaded] = useState(false); 
          const [isExpanded, setIsExpanded] = useState(false);

          const handleImageLoad = () => {
            setIsImageLoaded(true); 
          };

          const handleReadMoreClick = () => {
            setIsExpanded((prevState) => !prevState);
          };

          const imageUrl = avatar_path ? IMG_URL + avatar_path : DEFAULT_IMG_URL;

          return (
            <article key={id} className={styles.reviewCard}>
              <h3 className={styles.reviewTitle}>{`Author: ${author}`}</h3>
              <div className={styles.reviewContentWrapper}>
                <div className={styles.imageWrapper}>
                  <img
                    className={`${styles.reviewImage} ${isImageLoaded ? styles.loaded : ''}`}
                    src={imageUrl}
                    alt={`${author}'s avatar`}
                    onLoad={handleImageLoad} 
                    loading="lazy" 
                  />
                </div>
                <div className={styles.reviewContent}>
                  <p className={styles.reviewRating}>
                    Rating: 
                    <span className={styles.reviewRatingValue}>
                      {rating ? rating : 'No rating available'}
                    </span>
                  </p>
                  <p className={styles.reviewDescription}>
                    {isExpanded ? content : content.slice(0, 150) + '...'}
                  </p>

                  {content.length > 150 && (
                    <button
                      className={styles.readMore}
                      onClick={handleReadMoreClick}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        }
      )}
    </>
  );
};

export default ReviewCard;
