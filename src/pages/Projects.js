import PropTypes from 'prop-types';
import Navbar from '../components/common/Navbar';
import Header from '../components/common/Header';
import ProjectBoard from '../components/Projects/ProjectBoard';

function Projects({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Navbar isNavOpen={isNavOpen} />
      <ProjectBoard isNavOpen={isNavOpen} />
    </>
  );
}

Projects.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Projects;
