import PropTypes from 'prop-types';
import UploadForm from '../components/ProjectUpload/UploadForm';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';

function ProjectUpload({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <UploadForm isNavOpen={isNavOpen} />
    </>
  );
}

ProjectUpload.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default ProjectUpload;
