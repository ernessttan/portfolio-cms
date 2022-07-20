import PropTypes from "prop-types";

function CodeUrl({ handleChange }) {
  return (
    <div>
      <h2 className="font-semibold">Code URL</h2>
      <input onChange={handleChange} className="w-full p-3 rounded" type="text" name="codeUrl" />
    </div>
  );
}

CodeUrl.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CodeUrl;
