import React, { useState, useEffect } from 'react';

const texts = ['개발자', '도전자', '유쾌한'];

const Title: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <h1 className="text-3xl font-normal text-gray-900 relative flex items-center">
        <div className="overflow-hidden relative mr-2 ">
          <span
            className={`block transition-transform duration-500 ${
              isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            {texts[currentText]}
          </span>
        </div>
        <span className="font-bold ml-2">정호연</span>
        <span className="ml-2">입니다.</span>
      </h1>
    </div>
  );
};

export default Title;
