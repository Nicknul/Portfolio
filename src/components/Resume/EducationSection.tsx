import React from 'react';

const EducationSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
    <div className="space-y-6">
      <div className="md:flex md:justify-between md:items-end">
        <div>
          <p className="text-sm text-gray-500">2014.03 - 2017.02 | 졸업</p>
          <h3 className="text-lg font-semibold">유성생명과학고등학교</h3>
        </div>
        <div className="md:text-base text-sm">도시조경학과</div>
      </div>
      <div className="md:flex md:justify-between md:items-end">
        <div>
          <p className="text-sm text-gray-500">2018.03 - 2021.02 | 중퇴</p>
          <h3 className="text-lg font-semibold">한국영상대학교</h3>
        </div>
        <div className="md:text-base text-sm">광고영상디자인과</div>
      </div>

      <div className="md:flex md:justify-between md:items-end">
        <div>
          <p className="text-sm text-gray-500">2024.03 - 현재</p>
          <h3 className="text-lg font-semibold">그린컴퓨터아트학원</h3>
        </div>
        <div className="md:text-base text-sm">KDT 지역인재 양성을 위한 IaaS기반 웹 서비스 개발자 과정 4기</div>
      </div>
    </div>
  </section>
);

export default EducationSection;
