import React from 'react';
import NavItem from './NavItem';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-6 md:space-x-24 lg:space-x-40 justify-center text-gray-900">
        <NavItem label="Home" href="#home" />
        <NavItem label="Resume" href="#resume" />
        <NavItem label="Portfolio" href="#portfolio" />
        <NavItem label="GitHub" href="https://github.com/Nicknul" newTab={true} />
        <NavItem
          label="Notion"
          href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
          newTab={true}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
