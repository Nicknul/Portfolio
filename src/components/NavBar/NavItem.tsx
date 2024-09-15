import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  to?: string;
  href?: string;
  newTab?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, to, href, newTab = false }) => {
  const baseClasses =
    'relative flex flex-col md:items-center hover:text-green-600 focus:text-green-600 transition duration-500';

  const underlineClasses =
    'after:absolute after:left-1/2 after:bottom-[-18px] after:w-[60px] after:h-[2px] after:bg-green-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 md:after:transform md:after:-translate-x-1/2';

  if (href) {
    return (
      <li className="relative">
        <a
          href={href}
          className={`${baseClasses} ${underlineClasses}`}
          target={newTab ? '_blank' : '_self'}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {label}
        </a>
      </li>
    );
  }

  return (
    <li className="relative">
      <Link to={to!} className={`${baseClasses} ${underlineClasses}`}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
