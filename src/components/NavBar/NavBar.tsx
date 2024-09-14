import React, { useState } from 'react';
import NavItem from './NavItem';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md lg:p-4 p-2 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center text-sm">
        {/* 로고 또는 사이트 이름 */}
        <div className="text-gray-900">My Portfolio</div>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden lg:flex lg:space-x-20 justify-center text-gray-900">
          <NavItem label="Home" href="/" />
          <NavItem label="Resume" href="/resume" />
          <NavItem label="Portfolio" href="/portfolio" />
          <NavItem label="GitHub" href="https://github.com/Nicknul" newTab={true} />
          <NavItem
            label="Notion"
            href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
            newTab={true}
          />
        </ul>

        {/* 모바일 메뉴 아이콘 */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none" aria-label="메뉴 열기">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 (열릴 때만 표시) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 mt-4 p-4 text-sm">
          <ul className="space-y-4">
            <NavItem label="Home" href="/" />
            <NavItem label="Resume" href="/resume" />
            <NavItem label="Portfolio" href="/portfolio" />
            <NavItem label="GitHub" href="https://github.com/Nicknul" newTab={true} />
            <NavItem
              label="Notion"
              href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
              newTab={true}
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
