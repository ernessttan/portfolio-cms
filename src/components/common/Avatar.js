import PropTypes from 'prop-types';

function Avatar({ height, width }) {
  return (
    <img className={`object-cover rounded-full ${width} ${height}`} src="/images/ernest.jpeg" alt="user avatar" />
  );
}

Avatar.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Avatar;
