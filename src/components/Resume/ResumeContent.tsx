import React from 'react';

const ResumeContent: React.FC = () => {
  return (
    <>
      {/* 프로필 섹션 */}
      <section className="text-center lg:flex items-center">
        <h1 className="text-3xl font-bold">정호연 | Nicknul</h1>
        <img src="/imgs/Profile/emoji.jpeg" alt="Profile" className="w-32 rounded-full mx-auto mb-4" />
      </section>

      {/* CONTACT 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
        <p>Email : jea7730@gmail.com</p>
        <p>
          GitHub :
          <a href="https://github.com/Nicknul" className="text-blue-500">
            github.com/Nicknul
          </a>
        </p>
        <p>
          Notion :
          <a
            href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
            className="text-blue-500"
          >
            notion.so/정호연의 기록
          </a>
        </p>
      </section>

      {/* 자기 소개 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">ABOUT ME | Introduce</h2>
        <p>여기에 자기 소개 내용을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 교육 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <p>여기에 학력 정보를 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 스킬 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">TOOLS</h2>
        <p>여기에 사용할 수 있는 개발 언어 목록을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 프로젝트 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
        <p>여기에 프로젝트 내용을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 근무 이력 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">CAREER</h2>
        <p>여기에 근무 이력을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" />
    </>
  );
};

export default ResumeContent;
