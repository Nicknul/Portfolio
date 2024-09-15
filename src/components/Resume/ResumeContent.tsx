import React from 'react';

const ResumeContent: React.FC = () => {
  return (
    <>
      {/* 자기 소개 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">자기 소개</h2>
        <p>여기에 자기 소개 내용을 추가하세요.</p>
      </section>

      {/* 스킬 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">스킬</h2>
        <p>여기에 사용할 수 있는 개발 언어 목록을 추가하세요.</p>
      </section>

      {/* 프로젝트 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">프로젝트</h2>
        <p>여기에 프로젝트 내용을 추가하세요.</p>
      </section>

      {/* 학력 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">학력</h2>
        <p>여기에 학력 정보를 추가하세요.</p>
      </section>

      {/* 근무 이력 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">근무 이력</h2>
        <p>여기에 근무 이력을 추가하세요.</p>
      </section>
    </>
  );
};

export default ResumeContent;
