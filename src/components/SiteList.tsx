import React from 'react';
import Site from './Site';
import siteStyles from '../styles/siteStyles';

const sites = [
  { siteName: 'GitHub', siteLink: 'https://github.com/Nicknul' },
  {
    siteName: 'Notion',
    siteLink:
      'https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710',
  },
];

const SiteList: React.FC = () => {
  return (
    <div className={siteStyles.siteListContainer}>
      {sites.map((site, index) => (
        <Site key={index} siteName={site.siteName} siteLink={site.siteLink} />
      ))}
    </div>
  );
};

export default SiteList;
