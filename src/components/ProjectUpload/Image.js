import { PhotographIcon } from "@heroicons/react/outline";
import { useState } from "react";
import PropTypes from "prop-types";

function Image({ setProjectData }) {
  const [fileName, setFileName] = useState("");

  const handleChange = (event) => {
    setFileName(event.target.files[0].name);
    setProjectData((prevData) => ({
      ...prevData,
      image: event.target.files[0],
    }));
  };

  return (
    <div>
      <h2>Image</h2>
      <div className="p-3 w-full bg-white flex items-center rounded">
        <label className="flex items-center gap-3" htmlFor="projectImage">
          <PhotographIcon className="w-6 h-6" />
          <p>{fileName || "Upload a Image"}</p>
          <input onChange={handleChange} className="hidden" type="file" accept=".jpg, .jpeg, .png" id="projectImage" />
        </label>

      </div>

    </div>
  );
}

Image.propTypes = {
  setProjectData: PropTypes.func.isRequired,
};
export default Image;
