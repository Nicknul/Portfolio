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
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">2014.03 - 2017.02</p>
              <h3 className="text-lg font-semibold">유성생명과학고등학교</h3>
            </div>
            <div>도시조경학과</div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">2018.03 - 2021.02</p>
              <h3 className="text-lg font-semibold">한국영상대학교</h3>
            </div>
            <div>광고영상디자인과 (중퇴)</div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">2024.03 - 현재</p>
              <h3 className="text-lg font-semibold">그린컴퓨터아트학원</h3>
            </div>
            <div className="w-52 md:w-auto">KDT 지역인재 양성을 위한 IaaS기반 웹 서비스 개발자 과정 4기</div>
          </div>
        </div>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 스킬 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">TOOLS</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Frontend</h3>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Webpack</li>
              <li>babel</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <hr className="col-span-2 border-gray-300 my-4" />

          <div>
            <h3 className="text-lg font-semibold">Backend</h3>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Python</li>
              <li>RestAPI</li>
              <li>NestJS</li>
              <li>FastAPI</li>
              <li>SQLite</li>
            </ul>
          </div>
          <hr className="col-span-2 border-gray-300 my-4" />

          <div>
            <h3 className="text-lg font-semibold">Communication</h3>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>GitHub</li>
              <li>Notion</li>
              <li>Slack</li>
            </ul>
          </div>
          <hr className="col-span-2 border-gray-300 my-4" />

          <div>
            <h3 className="text-lg font-semibold">Design</h3>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-300 my-8" />

      {/* 프로젝트 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
        <div className="space-y-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">프로젝트명</h3>
            <p className="text-sm text-gray-500">팀 프로젝트 | 2023.01 - 2023.03</p>
            <p className="text-sm">사용한 툴: React, Node.js, MongoDB</p>
            <p className="text-sm">
              깃허브 링크:
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
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
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                github.com/your-repo
              </a>
            </p>
            <p className="text-sm">담당 파트: 전체 개발</p>
            <p className="text-sm">프로젝트의 간략한 내용: 포트폴리오 웹사이트 제작</p>
          </div>
        </div>
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
