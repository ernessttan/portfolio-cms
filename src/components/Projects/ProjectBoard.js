import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectGallery from './ProjectGallery';

function ProjectBoard({ isNavOpen }) {
  return (
    <div className={`${isNavOpen ? 'col-start-2 col-span-full' : 'col-span-full'} row-start-2 row-span-full bg-grey-500`}>
      <div className="container mx-auto py-16 px-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Projects</h1>
          <Link to="/project_upload" className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-full">Upload Project</Link>
        </div>
        <ProjectGallery />
      </div>
    </div>
  );
}

ProjectBoard.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default ProjectBoard;
