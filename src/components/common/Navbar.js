import { BriefcaseIcon, PencilIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navbar({ isNavOpen }) {
  return (
    <nav
      className={`${isNavOpen ? 'col-start-1 row-span-full' : 'hidden'} bg-blue-500 p-8`}
    >
      <h1 className="text-4xl text-white font-bold">
        Welcome,
        <br />
        Ernest
      </h1>
      <div className="mt-10 flex flex-col gap-8">
        <NavLink to="/projects" className="flex items-center gap-3 text-white">
          <BriefcaseIcon className="w-9 h-9" />
          <h2 className="font-semibold text-3xl">Projects</h2>
        </NavLink>
        <NavLink to="/blogposts" className="flex items-center gap-3 text-white">
          <PencilIcon className="w-9 h-9" />
          <h2 className="font-semibold text-3xl">Blog Posts</h2>
        </NavLink>
      </div>

    </nav>

  );
}

Navbar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default Navbar;
