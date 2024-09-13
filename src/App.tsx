import React from 'react';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <MainPage />
      {/* 나중에 추가될 다른 컴포넌트들을 여기에 조립 */}
    </div>
  );
};

export default App;
