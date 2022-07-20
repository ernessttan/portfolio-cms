import PropTypes from "prop-types";

function Url({ handleChange }) {
  return (
    <div>
      <h2 className="font-semibold">Project URL</h2>
      <input onChange={handleChange} className="w-full p-3 rounded" type="text" name="projectUrl" />
    </div>
  );
}

Url.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Url;
