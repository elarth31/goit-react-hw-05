import { BiSolidErrorAlt } from 'react-icons/bi';
import styles from './ErrorMessage.module.css';
import PropTypes from 'prop-types'; 

const ErrorMessage = ({ message = 'Something went wrong, please reload your page!' }) => {
  return (
    <div className={styles.errorContainer} role="alert" aria-live="assertive">
      <BiSolidErrorAlt className={styles.errorIcon} />
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;