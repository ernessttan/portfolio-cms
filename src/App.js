/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Loader from './components/common/Loader';

const Projects = lazy(() => import('./pages/Projects'));
const ProjectUpload = lazy(() => import('./pages/ProjectUpload'));

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Projects isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />} />
            <Route path="/project_upload" element={<ProjectUpload isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>

  );
}

export default App;
