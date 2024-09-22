import React from 'react';

interface ProjectTasksProps {
  completedTasks: string[];
  ongoingTasks: string[];
}

const ProjectTasks: React.FC<ProjectTasksProps> = ({ completedTasks, ongoingTasks }) => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">담당했던 기능</h2>
        <ul className="list-disc list-inside text-gray-700">
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">주요 기능</h2>
        <ul className="list-disc list-inside text-gray-700">
          {ongoingTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectTasks;
