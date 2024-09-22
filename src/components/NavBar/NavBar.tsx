import React, { useState } from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm lg:p-4 p-2 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex justify-center w-full xl:space-x-48 lg:space-x-24 text-gray-900 lg:font-semibold">
          <NavItem label="Home" href="/home" />
          <NavItem label="Resume" href="/resume" />
          <NavItem label="Portfolio" href="/" />
          <NavItem label="GitHub" href="https://github.com/Nicknul" newTab={true} />
          <NavItem
            label="Notion"
            href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
            newTab={true}
          />
        </ul>
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
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default NavBar;
