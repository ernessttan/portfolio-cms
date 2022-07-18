/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Header from '../components/common/Header';
import ProjectBoard from '../components/Projects/ProjectBoard';

function Projects() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="">
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Navbar isNavOpen={isNavOpen} />
      <ProjectBoard isNavOpen={isNavOpen} />
    </main>
  );
}

export default Projects;
