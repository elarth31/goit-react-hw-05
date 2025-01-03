import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types'; 
import styles from './Loader.module.css';

const Loader = ({ color = '#646cff', height = 80, width = 80, radius = 9, style = {}, className = '' }) => {
  return (
    <div className={`${styles.loader} ${className}`} style={style}>
      <ThreeDots
        height={height}
        width={width}
        color={color}
        radius={radius}
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Loader;
