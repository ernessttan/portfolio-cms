import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function Header({ isNavOpen, setIsNavOpen }) {
  return (
    <header className={`${isNavOpen ? 'col-start-2 col-span-full' : 'col-span-full'} flex justify-end items-center gap-3 px-5`}>
      <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
      <Avatar
        width="w-10"
        height="h-10"
      />
    </header>
  );
}

Header.propTypes = {
  setIsNavOpen: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};
export default Header;
