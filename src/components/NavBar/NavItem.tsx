import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  to?: string;
  href?: string;
  newTab?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, to, href, newTab = false }) => {
  if (href) {
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
  }

  return (
    <li>
      <Link to={to!} className="hover:text-green-600 focus:text-green-600 transition duration-500">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
