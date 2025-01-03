import styles from './NoFoundMessage.module.css';

const NoFoundMessage = ({ text = 'No results found' }) => {
  return <div className={styles.noResult}>{text}</div>;
};

export default NoFoundMessage;
