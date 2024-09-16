import React from 'react';

const ResumeContent: React.FC = () => {
  return (
    <>
      {/* 프로필 섹션 */}
      <section className="text-center lg:flex items-center">
        <h1 className="text-3xl font-bold">정호연 | Nicknul</h1>
        <img src="/imgs/Profile/emoji.jpeg" alt="Profile" className="w-32 rounded-full mx-auto mb-4" />
      </section>
      {/* 자기 소개 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">ABOUT ME | Introduce</h2>
        <p>여기에 자기 소개 내용을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" /> {/* 구분선 추가 */}
      {/* 교육 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <p>여기에 학력 정보를 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" /> {/* 구분선 추가 */}
      {/* 스킬 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">TOOLS</h2>
        <p>여기에 사용할 수 있는 개발 언어 목록을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" /> {/* 구분선 추가 */}
      {/* 프로젝트 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
        <p>여기에 프로젝트 내용을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" /> {/* 구분선 추가 */}
      {/* 근무 이력 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">CAREER</h2>
        <p>여기에 근무 이력을 추가하세요.</p>
      </section>
    </>
  );
};

export default ResumeContent;
