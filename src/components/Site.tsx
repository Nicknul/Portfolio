import React from 'react';
import SiteLink from './SiteLink';
import useHover from '../hooks/useHover';

interface SiteProps {
  siteName: string;
  siteLink: string;
}

const Site: React.FC<SiteProps> = ({ siteName, siteLink }) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useHover();

  const handleClick = () => {
    handleMouseOver();
    window.open(siteLink, '_blank');

    setTimeout(() => {
      handleMouseOut();
    }, 100);
  };

  return (
    <SiteLink
      siteName={siteName}
      siteLink={siteLink}
      isHovered={isHovered}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleMouseOver}
      onTouchEnd={handleMouseOut}
    />
  );
};

export default Site;
