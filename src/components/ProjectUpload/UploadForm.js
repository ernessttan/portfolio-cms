/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import Url from "./Url";
import CodeUrl from "./CodeUrl";
import Tags from "./Tags";

function UploadForm({ isNavOpen }) {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", projectData.title);
      formData.append("description", projectData.description);
      formData.append("codeUrl", projectData.projectUrl);
      formData.append("projectUrl", projectData.projectUrl);
      formData.append("image", projectData.image);
      formData.append("tags", JSON.stringify(projectData.tags));
      await fetch("http://localhost:3000/api/projects", {
        method: "POST",
        body: formData,
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${isNavOpen ? "col-start-2 col-span-full" : "col-span-full"} row-start-2 row-span-full bg-grey-500`}>
      <div className="container mx-auto py-16 px-10">
        <form onSubmit={handleSubmit} className="upload-grid">
          <h1 className="text-4xl font-bold row-end-2">Add New Project</h1>
          <div className="mt-5 flex flex-col gap-3">
            <Title handleChange={handleChange} />
            <Description handleChange={handleChange} />
            <Url handleChange={handleChange} />
            <CodeUrl handleChange={handleChange} />
            <Image setProjectData={setProjectData} />
            <Tags setProjectData={setProjectData} />
          </div>
          <button className="col-start-2 row-end-2 bg-blue-500 text-white font-semibold rounded-full" type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}

UploadForm.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default UploadForm;
