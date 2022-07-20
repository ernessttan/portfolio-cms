import PropTypes from 'prop-types';

function Title({ handleChange }) {
  return (
    <div>
      <h2 className="font-semibold">Title</h2>
      <input onChange={handleChange} className="w-full p-3 rounded" type="text" name="title" />
    </div>
  );
}

Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Title;
