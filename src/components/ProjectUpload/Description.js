import PropTypes from 'prop-types';

function Description({ handleChange }) {
  return (
    <div>
      <h2 className="font-semibold">Description</h2>
      <textarea onChange={handleChange} className="w-full h-40 rounded p-2" type="text" name="description" />
    </div>
  );
}

Description.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Description;
