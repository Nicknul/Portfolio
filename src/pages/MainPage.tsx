import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <section id="home" className="h-screen bg-gray-100">
        <h1 className="text-3xl text-center p-20">Home Section</h1>
      </section>
      <section id="resume" className="h-screen bg-gray-200">
        <h1 className="text-3xl text-center p-20">Resume Section</h1>
      </section>
      <section id="portfolio" className="h-screen bg-gray-300">
        <h1 className="text-3xl text-center p-20">Portfolio Section</h1>
      </section>
    </div>
  );
};

export default App;
