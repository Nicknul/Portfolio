import React from 'react';
import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
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
    </>
  );
};

export default MobileMenu;
