import React, { useState } from 'react';
import NavItem from './NavItem';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md lg:p-4 p-2 fixed top-0 left-0 w-full z-50">
      <div className="relative flex items-center text-sm">
        <div className="absolute left-0 text-gray-900 lg:pl-4">My Portfolio</div>
        <ul className="flex justify-center w-full xl:space-x-28 lg:space-x-16 md:text-gray-900 text-white">
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
        <div className="md:hidden absolute right-0">
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
