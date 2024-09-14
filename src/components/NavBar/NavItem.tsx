import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  to?: string;
  href?: string;
  newTab?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, to, href, newTab = false }) => {
  const baseClasses = 'relative hover:text-green-600 focus:text-green-600 transition duration-500';

  const underlineClasses =
    'after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-[2px] after:bg-green-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500';

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
