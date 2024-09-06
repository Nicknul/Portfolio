import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <h1 className="text-3xl font-normal text-gray-900">
        개발자 <span className="font-bold">정호연</span>입니다.
      </h1>
    </div>
  );
};

export default Title;
