import React from 'react';
import ProfileSection from './ProfileSection';
import ContactSection from './ContactSection';
import AboutMeSection from './AboutMeSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import ProjectSection from './ProjectSection';
import CareerSection from './CareerSection';

const ResumeContent: React.FC = () => {
  return (
    <>
      <ProfileSection />
      <ContactSection />
      <AboutMeSection />
      <hr className="border-gray-300 my-8" />
      <EducationSection />
      <hr className="border-gray-300 my-8" />
      <SkillsSection />
      <hr className="border-gray-300 my-8" />
      <ProjectSection />
      <hr className="border-gray-300 my-8" />
      <CareerSection />
      <hr className="border-gray-300 my-8" />
    </>
  );
};

export default ResumeContent;
