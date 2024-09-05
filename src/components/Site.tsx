import React, { useState } from 'react';

interface SiteProps {
  siteName: string;
  siteLink: string;
}

const Site: React.FC<SiteProps> = ({ siteName, siteLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className={`px-4 py-2 rounded-lg transition-all duration-300 w-[150px] ${
          isHovered ? 'bg-black text-white' : 'bg-white text-black'
        } cursor-pointer`}
        onClick={() => window.open(siteLink, '_blank')}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {siteName}
      </div>

      {isHovered && <div className="mt-2 text-gray-500">{siteName} 보러가기</div>}
    </div>
  );
};

export default Site;
