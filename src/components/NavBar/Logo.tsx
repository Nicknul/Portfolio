import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/home" className="md:absolute md:left-0 text-gray-900 lg:pl-4 text-3xl">
      👩🏻‍💻
    </Link>
  );
};

export default Logo;
