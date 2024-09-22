import React from 'react';
import { useProject } from '../../hooks/useProject';
import { useGallery } from '../../hooks/useGallery';
import Modal from '../../components/Modal/Modal';
import ProjectHeader from '../../components/Project/ProjectHeader';
import ProjectTasks from '../../components/Project/ProjectTasks';
import Gallery from '../../components/Project/Gallery';
import SkillTags from '../../components/Card/SkillTags';

const ProjectTemplate: React.FC = () => {
  const { project } = useProject();
  const { galleryImages, selectedImage, isModalOpen, isButtonVisible, handleImageClick, openModal, closeModal } =
    useGallery(project?.id);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto p-6 pt-20 xl:max-w-[40%] md:max-w-[60%]">
      <ProjectHeader
        title={project.title}
        image={project.image}
        date={project.date}
        github={project.github}
        notion={project.notion}
      />
      <h2 className="text-xl font-semibold mt-6">SKILLS</h2>
      <SkillTags languages={project.languages} />

      <ProjectTasks completedTasks={project.completedTasks} ongoingTasks={project.ongoingTasks} />

      <Gallery
        galleryImages={galleryImages}
        selectedImage={selectedImage}
        isButtonVisible={isButtonVisible}
        handleImageClick={handleImageClick}
        openModal={openModal}
      />
      {isModalOpen && selectedImage !== null && <Modal src={galleryImages[selectedImage]} onClose={closeModal} />}
    </div>
  );
};

export default ProjectTemplate;
