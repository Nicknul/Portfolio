// src/data/projectsData.ts
export const projects = [
  {
    title: '포트폴리오',
    type: '싱글 프로젝트',
    period: '2024.09.05 - 진행 중',
    description: '프레젠테이션으로 제작한 포트폴리오를 웹 사이트로 저의 포트폴리오를 만드는 작업을 진행했습니다.',
    githubLink: 'https://github.com/Nicknul/Portfolio',
    notionLink: 'https://stupendous-lighter-a2b.notion.site/0fd750b7ba354c6a91149a23c47bdf77?pvs=4',
    tools: 'Typescript, React, Tailwind CSS, babel, webpack',
    teamSize: '1명',
    completedTasks: [
      '상단 탭 메뉴를 클릭하면 해당 페이지로 이동하도록 함',
      '반응형 디자인을 고려하여 스타일 작업 진행',
      '카드 컴포넌트 제작하여 진행했던 프로젝트들을 한 눈에 볼 수 있도록 함',
      '분류 토글을 만들어 사용자가 전체, 팀, 싱글 프로젝트를 볼 수 있도록 함',
      '프로필 탭에 학력 및 프로젝트 내용을 정리',
      '이메일을 클릭하면 바로 이메일을 보낼 수 있는 창이 나타나도록 함',
    ],
    ongoingTasks: [
      '프로젝트 카드를 클릭하면 클릭한 프로젝트의 소개 페이지로 이동하도록 함',
      '상단으로 바로 올라갈 수 있는 버튼 제작',
      '홈, 프로젝트 탭 안에 들어가는 컨텐츠 추가',
      '해당 브라우저에서 복사하지 못하는 기능 추가',
      '다크모드 및 포트폴리오 브라우저 공유할 수 있도록 함',
    ],
  },
  {
    title: '콜록콜록, 우리동네 미세먼지',
    type: '싱글 프로젝트',
    period: '2024.08.15 - 진행 중',
    description:
      '기상청 단기 에보와 중기 예보, 환경부 대기오염 API를 받아와 사용자의 현재 위치에 맞는 날씨 및 미세먼지 데이터를 보여줍니다. 사용자가 공감한 이모지를 데이터베이스에 저장하여 사용자들이 제일 많이 공감한 이모지를 나타나도록 할 예정입니다.',
    githubLink: 'https://github.com/Nicknul/weather',
    notionLink: 'https://kongukjae.notion.site/60e350b2ab544d29bcc21cd710358afe?pvs=4',
    tools: 'Typescript, React, Next.js, NestJS, Python, FastAPI, Tailwind CSS, MySQL',
    teamSize: '1명',
    completedTasks: [
      '기상청 단기 예보, 중기 예보 API를 동적으로 조립',
      '기상청의 API 데이터가 업데이트 되는 시간을 파악한 후 사용자 시간과 대조하여 API 데이터 추출',
      'Google Cloud에서 Geocoding API를 사용하여 사용자의 현재 위치를 위도와 경도로 데이터 받기',
    ],
    ongoingTasks: [
      '날씨 및 미세먼지의 메인 페이지 레이아웃 및 CSS',
      '사용자가 사이트 접속 시 위치 허용 및 쿠키 허용',
      '쿠기로 접속한 사용자의 정보를 데이터베이스에 저장',
    ],
  },
  {
    title: 'ERP',
    type: '팀 프로젝트',
    period: '2024.07.15 - 2024.08.14',
    description:
      '특정 회사에서만 사용할 수 있는 ERP 프로그램이 아닌 어느 회사에서도 사용할 수 있도록 구상했습니다. 총 3개의 서버를 작동하면서 요청과 응답이 어떻게 이루어지는 확인할 수 있는 프로젝트이었습니다. 커밋 컨벤션을 사용하여 동료들이 커밋 아이콘만 보아도 빠르게 커밋 내용을 확인할 수 있도록 했습니다.',
    githubLink: 'https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-1team',
    notionLink: 'https://kongukjae.notion.site/ERP-abc3f61cb1ce4a52859ab0f5c4aedec4?pvs=4',
    tools: 'Typescript, React, Tailwind CSS, Next.js, NestJS, Python, FastAPI, SQLite',
    teamSize: '총 5명 (프론트엔드 1명, 백엔드 4명)',
    tasks: [
      '데이터베이스 테이블 생성 모달 기능',
      '브라우저에서 테이블 열, 행 추가 및 삭제 기능',
      '테이블 수정 시 새로고침, 다른 페이지로 이동 시 확인 모달창',
      '생성된 테이블 이름이 조회 페이지의 Select 요소에 실시간으로 업데이트',
      '생성하거나 수정한 테이블은 메인 서버를 거쳐 생성되거나 수정되도록 함',
      '테이블 생성 및 수정 시 열 제목이 빈칸이라면 에러가 나타나도록 함',
      '조회되는 테이블 데이터가 일정 크기보다 넘어간다면 가로, 세로 스크롤 생성',
      'Tailwind CSS 리펙토링',
    ],
  },
  {
    title: '뚝딱이네 상점',
    type: '팀 프로젝트',
    period: '2024.06.14 - 2024.07.12',
    description:
      '이너 프로젝트 주제이었던 자판기 기능 만들기를 변형하여 상점의 형태로 제작했습니다. GitHub, Slack, Notion를 사용하여 원활한 협업이 되도록 했습니다.',
    githubLink: 'https://github.com/KDT-IaaS-Class-Two-Group/subject-7-exam-database-1',
    notionLink: 'https://kongukjae.notion.site/subject-7-exam-database-1-0de39abb5a794fb694af1dd0120996b7?pvs=4',
    tools: 'HTML, CSS, Javascript, Node.js, SQLite',
    teamSize: '총 5명 (프론트엔드 2명, 백엔드 3명)',
    tasks: ['로그인 화면 레이아웃 배치, CSS', '상점 메인 페이지 레이아웃 배치, CSS'],
  },
  {
    title: '오늘의 점심 메뉴는?',
    type: '싱글 프로젝트',
    period: '2024.06.26 - 2024.06.27',
    description:
      '랜덤 코드가 어떤 방식으로 작동되는지에 대해서 연구를 하였고, 랜덤을 돌릴 데이터 소스가 필요하여 학원 근처에 있는 식당 리스트를 입력해 도시락을 싸오지 않는 날에는 랜덤으로 돌려 식사를 하곤 했습니다.',
    githubLink: 'https://github.com/Nicknul/today-lunch',
    notionLink: 'https://kongukjae.notion.site/985eac9dd8354acba32b49eba305587f?pvs=4',
    tools: 'HTML, CSS, Javascript',
    teamSize: '1명',
    tasks: [
      'MDN에 있는 랜덤 코드를 참고하여 하나씩 뜯어보는 연구를 진행',
      '학원 근처의 식당 리스트를 배열로 정리',
      '버튼을 생성하고 버튼을 누르면 식당 이름이 나타나도록 함',
    ],
  },
  {
    title: '포켓몬 타입',
    type: '싱글 프로젝트',
    period: '2024.05.19 - 2024.05.26',
    description:
      'node.js를 사용하기 위해 포켓몬 타입을 제작하게 되었습니다. npm 홈에서 다른 사용자가 만든 패키지를 설치하여 데이터를 받아올 수 있다는 사실을 알게 되었습니다.',
    githubLink: 'https://github.com/Nicknul/Pokemon-Types',
    notionLink: 'https://kongukjae.notion.site/6ca172f9fec44889b90e0b1874b5cebc?pvs=4',
    tools: 'HTML, CSS, Javascript, REST API (Poke API), Node.js, npm i pokemon',
    teamSize: '1명',
    tasks: [
      'npm 홈페이지에서 다른 개발자가 포켓몬 이름을 JSON 형태로 가공한 것을 설치',
      'Poke API 데이터를 받아와 npm 데이터와 일치하는 이름이 있다면 해당 포켓몬 타입 가져오기',
      '포켓몬 공식홈페이지에 있는 이미지 주소를 가져오고 반복문으로 전체 이미지를 브라우저에 나타나게 함',
      '브라우저에 접속하면 전체 포켓몬이 나타나게 함',
      '상단 탭에 있는 타입을 누르면 해당 타입 포켓몬이 나타나게 함',
    ],
  },
];
