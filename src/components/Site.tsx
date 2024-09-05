import React, { useState } from 'react';
import siteStyles from '../styles/siteStyles';

interface SiteProps {
  siteName: string;
  siteLink: string;
}

const Site: React.FC<SiteProps> = ({ siteName, siteLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className={`${siteStyles.siteContainer} ${isHovered ? siteStyles.hoverActive : siteStyles.hoverInactive}`}
        onClick={() => window.open(siteLink, '_blank')}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {siteName}
      </div>

      {isHovered && <div className={siteStyles.hoverText}>{siteName} 보러가기</div>}
    </div>
  );
};

export default Site;
