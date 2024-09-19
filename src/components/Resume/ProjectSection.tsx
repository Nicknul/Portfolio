import React from 'react';

const ProjectSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">PROJECT</h2>
    <div className="space-y-6">
      {/* 콜록콜록, 우리동네 미세먼지 프로젝트 */}
      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-1">콜록콜록, 우리동네 미세먼지</h3>
        <p className="text-sm text-gray-500 mb-1">개인 프로젝트 | 2023.08.15 - 진행 중</p>
        <p className="text-sm mb-1">
          기상청 단기 에보와 중기 예보, 환경부 대기오염 API를 받아와 사용자의 현재 위치에 맞는 날씨 및 미세먼지 데이터를
          보여줍니다. 사용자가 공감한 이모지를 데이터베이스에 저장하여 사용자들이 제일 많이 공감한 이모지를 나타나도록
          할 예정입니다.
        </p>
        <p className="text-sm mb-1">
          <a
            href="https://github.com/Nicknul/weather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            github.com/weather
          </a>
          <p className="text-sm mb-1">
            <a
              href="https://kongukjae.notion.site/60e350b2ab544d29bcc21cd710358afe?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              notion.so/콜록콜록, 우리동네 미세먼지
            </a>
          </p>
          <p className="text-sm mb-1">
            사용 기술: Typescript, React, Next.js, NestJS, Python, FastAPI, Tailwind CSS, MySQL
          </p>
          <p className="text-sm mb-1">개발 인원 : 1명</p>
        </p>
        <p className="text-sm mb-1">
          [진행 완료]
          <br />
          <li>기상청 단기 예보, 중기 예보 API를 동적으로 조립</li>
          <li>기상청의 API 데이터가 업데이트 되는 시간을 파악한 후 사용자 시간과 대조하여 API 데이터 추출</li>
          <li>Google Cloude에서 Geocoding API를 사용하여 사용자의 현재 위치를 위도와 경도로 데이터 받기</li>
        </p>
        <p className="text-sm mb-1">
          [진행 중인 작업]
          <br />
          <li>날씨 및 미세먼지의 메인 페이지 레이아웃 및 CSS</li>
          <li>사용자가 사이트 접속 시 위치 허용 및 쿠키 허용</li>
          <li>쿠기로 접속한 사용자의 정보를 데이터베이스에 저장</li>
        </p>
      </div>

      {/* ERP 프로젝트 */}
      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-1">ERP</h3>
        <p className="text-sm text-gray-500">팀 프로젝트 | 2023.07.15 - 2023.08.14</p>
        <p className="text-sm mb-1">
          <p className="text-sm mb-1">
            <a
              href="https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-1team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              github.com/KDT-IaaS-2-ProjectA-1team
            </a>
          </p>
          <p className="text-sm mb-1">
            <a
              href="https://kongukjae.notion.site/ERP-abc3f61cb1ce4a52859ab0f5c4aedec4?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              notion.so/ERP
            </a>
          </p>
          특정 회사에서만 사용할 수 있는 ERP 프로그램이 아닌 어느 회사에서도 사용할 수 있도록 구상했습니다. 총 3개의
          서버를 작동하면서 요청과 응답이 어떻게 이루어지는 확인할 수 있는 프로젝트이었습니다. 커밋 컨벤션을 사용하여
          동료들이 커밋 아이콘만 보아도 빠르게 커밋 내용을 확인할 수 있도록 했습니다.
        </p>
        <p className="text-sm mb-1">
          사용 기술 : Typescript, React, Tailwind CSS, Next.js, NestJS, Python, FastAPI, SQLite
        </p>
        <p className="text-sm mb-1">개발 인원 : 총 5명 (프론트엔드 1명, 백엔드 4명)</p>
        <p className="text-sm mb-1">
          [담당 파트]
          <br />
          <li>데이터베이스 테이블 생성 모달 기능</li>
          <li>브라우저에서 테이블 열, 행 추가 및 삭제 기능</li>
          <li>테이블 수정 시 새로고침, 다른 페이지로 이동 시 확인 모달창</li>
          <li>생성된 테이블 이름이 조회 페이지의 Select 요소에 실시간으로 업데이트</li>
          <li>생성하거나 수정한 테이블은 메인 서버를 거쳐 생성되거나 수정되도록 함</li>
          <li>테이블 생성 및 수정 시 열 제목이 빈칸이라면 에러가 나타나도록 함</li>
          <li>조회되는 테이블 데이터가 일정 크기보다 넘어간다면 가로, 세로 스크롤 생성</li>
          <li>Tailwind CSS 리펙토링</li>
        </p>
      </div>

      {/* 뚝딱 상점 프로젝트 */}
      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-1">뚝딱이네 상점</h3>
        <p className="text-sm text-gray-500">팀 프로젝트 | 2023.06.14 - 2023.07.12</p>
        <p className="text-sm mb-1">
          <p className="text-sm mb-1">
            <a
              href="https://github.com/KDT-IaaS-Class-Two-Group/subject-7-exam-database-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              github.com/subject-7-exam-database-1
            </a>
          </p>
          <p className="text-sm mb-1">
            <a
              href="https://kongukjae.notion.site/subject-7-exam-database-1-0de39abb5a794fb694af1dd0120996b7?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              notion.so/뚝딱 상점
            </a>
          </p>
          이너 프로젝트 주제이었던 자판기 기능 만들기를 변형하여 상점의 형태로 제작했습니다. GitHub, Slack, Notion를
          사용하여 원활한 협업이 되도록 했습니다.
        </p>
        <p className="text-sm mb-1">사용 기술 : HTML, CSS, Javascript, Node.js, SQLite</p>
        <p className="text-sm mb-1">개발 인원 : 총 5명 (프론트엔드 2명, 백엔드 3명)</p>
        <p className="text-sm mb-1">
          [담당 파트]
          <br />
          <li>로그인 화면 레이아웃 배치, CSS</li>
          <li>상점 메인 페이지 레이아웃 배치, CSS</li>
        </p>
      </div>

      {/* 콜록콜록, 우리동네 미세먼지 프로젝트 */}
      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-1">포켓몬 타입</h3>
        <p className="text-sm text-gray-500 mb-1">개인 프로젝트 | 2023.08.15 - 진행 중</p>
        <p className="text-sm mb-1">포트폴리오 웹사이트 제작</p>
        <p className="text-sm mb-1">
          <a
            href="https://github.com/Nicknul/weather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            github.com/weather
          </a>
          <p className="text-sm mb-1">
            <a
              href="https://kongukjae.notion.site/60e350b2ab544d29bcc21cd710358afe?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              notion.so/콜록콜록, 우리동네 미세먼지
            </a>
          </p>
          <p className="text-sm mb-1">
            사용 기술: Typescript, React, Next.js, NestJS, Python, FastAPI, Tailwind CSS, MySQL
          </p>
        </p>
        <p className="text-sm mb-1">
          [담당 파트]
          <br />
          <li>로그인 화면 레이아웃 배치, CSS</li>
          <li>상점 메인 페이지 레이아웃 배치, CSS</li>
        </p>
      </div>
    </div>
  </section>
);

export default ProjectSection;
