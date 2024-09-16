import React from 'react';

const ResumeContent: React.FC = () => {
  return (
    <>
      {/* 프로필 및 CONTACT 섹션 */}
      <section className="lg:flex lg:justify-between lg:items-center text-left">
        <div>
          <h1 className="text-2xl font-bold">정호연 | Nicknul</h1>
          <img
            src="/imgs/Profile/emoji.jpeg"
            alt="Profile"
            className="lg:w-40 w-80 rounded-full mx-auto lg:mx-0 mb-4"
          />
        </div>

        {/* CONTACT 섹션 */}
        <div className="lg:ml-8">
          <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
          <p>
            <span className="font-semibold">Email </span>
            <a href="mailto:jea7730@gmail.com" className="text-sm text-blue-500 ml-1">
              jea7730@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub </span>
            <a
              href="https://github.com/Nicknul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 ml-1"
            >
              github.com/Nicknul
            </a>
          </p>
          <p>
            <span className="font-semibold">Notion </span>
            <a
              href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 ml-1"
            >
              notion.so/정호연의 기록
            </a>
          </p>
        </div>
      </section>

      {/* 자기 소개 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">ABOUT ME | INTRODUCE</h2>
        <p>여기에 자기 소개 내용을 추가하세요.</p>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 교육 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <div className="space-y-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">유성생명과학고등학교</h3>
              <p className="text-sm">고등학교</p>
            </div>
            <div className="text-gray-600">2014.03 - 2017.02</div>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">한국영상대학교</h3>
              <p className="text-sm">광고영상디자인과 (중퇴)</p>
            </div>
            <div className="text-gray-600">2018.03 - 2021.02</div>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">그린컴퓨터아트학원</h3>
              <p className="text-sm">KDT 지역인재 양성을 위한 IaaS기반 웹 서비스 개발자 과정 4기</p>
            </div>
            <div className="text-gray-600">2024.03 - 현재</div>
          </div>
        </div>
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
