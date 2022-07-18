/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
