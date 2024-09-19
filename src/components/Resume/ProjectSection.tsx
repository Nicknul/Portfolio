import React from 'react';

const ProjectSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
    <div className="space-y-6">
      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold">프로젝트명</h3>
        <p className="text-sm text-gray-500">팀 프로젝트 | 2023.01 - 2023.03</p>
        <p className="text-sm">사용한 툴: React, Node.js, MongoDB</p>
        <p className="text-sm">
          깃허브 링크:
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            github.com/your-repo
          </a>
        </p>
        <p className="text-sm">담당 파트: 프론트엔드 개발, UI 디자인</p>
        <p className="text-sm">프로젝트의 간략한 내용: 사용자 관리 시스템 개발</p>
      </div>

      {/* 추가 프로젝트 */}
      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold">프로젝트명</h3>
        <p className="text-sm text-gray-500">개인 프로젝트 | 2023.04 - 2023.06</p>
        <p className="text-sm">사용한 툴: Next.js, Tailwind CSS</p>
        <p className="text-sm">
          깃허브 링크:
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            github.com/your-repo
          </a>
        </p>
        <p className="text-sm">담당 파트: 전체 개발</p>
        <p className="text-sm">프로젝트의 간략한 내용: 포트폴리오 웹사이트 제작</p>
      </div>
    </div>
  </section>
);

export default ProjectSection;
