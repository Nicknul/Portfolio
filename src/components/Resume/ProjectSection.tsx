import React from 'react';
import { projects } from '../../data/projectsData';

const ProjectSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-500 mb-1">
            {project.type} | {project.period}
          </p>
          <p className="text-sm mb-1">{project.description}</p>
          {project.githubLink && (
            <p className="text-sm mb-1">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {project.githubLink}
              </a>
            </p>
          )}
          {project.notionLink && (
            <p className="text-sm mb-1">
              <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {project.notionLink}
              </a>
            </p>
          )}
          {project.tools && <p className="text-sm mb-1">사용 기술: {project.tools}</p>}
          {project.teamSize && <p className="text-sm mb-1">개발 인원: {project.teamSize}</p>}
          {project.completedTasks && project.completedTasks.length > 0 && (
            <p className="text-sm mb-1">
              [진행 완료]
              <ul className="list-disc list-inside">
                {project.completedTasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </p>
          )}
          {project.ongoingTasks && project.ongoingTasks.length > 0 && (
            <p className="text-sm mb-1">
              [진행 중인 작업]
              <ul className="list-disc list-inside">
                {project.ongoingTasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </p>
          )}
          {project.tasks && project.tasks.length > 0 && (
            <p className="text-sm mb-1">
              [담당 파트]
              <ul className="list-disc list-inside">
                {project.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ProjectSection;
