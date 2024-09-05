import React from 'react';
import siteStyles from '../styles/siteStyles';

interface SiteLinkProps {
  siteName: string;
  siteLink: string;
  isHovered: boolean;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
}

const SiteLink: React.FC<SiteLinkProps> = ({
  siteName,
  siteLink,
  isHovered,
  onClick,
  onMouseOver,
  onMouseOut,
  onTouchStart,
  onTouchEnd,
}) => {
  return (
    <div>
      <div
        className={`${siteStyles.siteContainer} ${isHovered ? siteStyles.hoverActive : siteStyles.hoverInactive}`}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {siteName}
      </div>

      {isHovered && <div className={siteStyles.hoverText}>{siteName} 보러가기</div>}
    </div>
  );
};

export default SiteLink;
