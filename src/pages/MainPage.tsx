import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomePage from './Home';
import ResumePage from './Resume';
import PortfolioPage from './Portfolio';
import ProjectTemplate from './Portfolio/ProjectTemplate';

const MainPage: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<ProjectTemplate />} />
      </Routes>
    </Router>
  );
};

export default MainPage;
