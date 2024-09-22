import React from 'react';
import ResumeContent from '../components/Resume/ResumeContent';

const ResumePage: React.FC = () => {
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)] w-full max-w-[90%] xl:max-w-[40%] lg:max-w-[70%] mx-auto">
      <ResumeContent />
    </div>
  );
};

export default ResumePage;
