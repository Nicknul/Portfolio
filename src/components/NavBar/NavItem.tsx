import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
  newTab?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, newTab = false }) => {
  return (
    <li>
      <a
        href={href}
        className="hover:text-green-600 focus:text-green-600 transition duration-500"
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;
