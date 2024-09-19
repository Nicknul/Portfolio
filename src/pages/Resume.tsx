import React from 'react';
import ResumeContent from '../components/Resume/ResumeContent';

const ResumePage: React.FC = () => {
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)] w-full xl:max-w-[40%] lg:max-w-[60%] mx-auto p-6 space-y-12">
      <ResumeContent />
    </div>
  );
};

export default ResumePage;
