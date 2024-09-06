import React, { useState, useEffect } from 'react';

const texts = ['개발자', '도전자', '유쾌한'];

const Title: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <h1 className="text-3xl font-normal text-gray-900 relative">
        <span className="absolute overflow-hidden text-3xl whitespace-nowrap">{texts[currentText]}</span>
        <span className="font-bold inline-block ml-24">정호연</span>
        <span className="inline-block ml-4">입니다.</span>
      </h1>
    </div>
  );
};

export default Title;
