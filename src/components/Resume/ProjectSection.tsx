import React from 'react';
import { projects } from '../../data/projectsData';

const ProjectSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
    <ul className="divide-y divide-gray-200">
      {projects.map((project, index) => (
        <li key={index} className="py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <span className="text-sm text-gray-500">{project.period}</span>
          </div>
          <p className="text-sm text-gray-500">{project.type}</p>
          <p className="text-sm mb-2">{project.description}</p>

          <div className="flex space-x-2 mb-2">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
                GitHub
              </a>
            )}
            {project.notionLink && (
              <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
                Notion
              </a>
            )}
          </div>

          {project.tools && <p className="text-sm mb-1">사용 기술: {project.tools}</p>}
          {project.teamSize && <p className="text-sm mb-1">개발 인원: {project.teamSize}</p>}

          {project.completedTasks && project.completedTasks.length > 0 && (
            <details className="mb-2">
              <summary className="text-sm font-semibold cursor-pointer">진행 완료</summary>
              <ul className="list-disc list-inside ml-4 text-sm">
                {project.completedTasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </details>
          )}

          {project.ongoingTasks && project.ongoingTasks.length > 0 && (
            <details className="mb-2">
              <summary className="text-sm font-semibold cursor-pointer">진행 중인 작업</summary>
              <ul className="list-disc list-inside ml-4 text-sm">
                {project.ongoingTasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </details>
          )}

          {project.tasks && project.tasks.length > 0 && (
            <details className="mb-2">
              <summary className="text-sm font-semibold cursor-pointer">담당 파트</summary>
              <ul className="list-disc list-inside ml-4 text-sm">
                {project.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </details>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectSection;
