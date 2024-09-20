import React from 'react';

const AboutMeSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
    <p className="mb-4">
      저는 비개발 분야에서 경력을 시작했지만, 한국통계정보원에서 데이터 관리와 문제 해결 과정을 통해 개발의 중요성을
      깨닫고 개발자의 길을 걷게 되었습니다. KDT 학원에서 다양한 언어와 기술을 배우며 실력을 쌓아왔습니다.
    </p>
    <p className="mb-4">
      팀 프로젝트에서는 HTML, CSS, JavaScript, Node.js 등을 활용해 웹 애플리케이션을 개발하며, 1차 협업에서는 병합
      이슈와 정적 파일 작업의 불편함을 개선하기 위해 Express 데코레이터로 리팩토링을 진행했습니다. 2차 프로젝트에서는
      아키텍처 설계와 작업 우선순위를 체계화해 팀의 효율을 크게 높였습니다.
    </p>
    <p className="mb-4">
      Git과 GitHub를 활용한 협업을 통해 소통과 문제 해결 능력을 키웠으며, Notion을 통해 팀의 지식과 문제 해결 방법을
      공유하여 효율성을 높였습니다. 저는 <span className="text-green-700 font-semibold">“멈춤보단 실행”</span>이라는
      모토로, 앞으로도 끊임없이 학습하며 도전하는 개발자로 성장해 나가겠습니다.
    </p>
  </section>
);

export default AboutMeSection;
