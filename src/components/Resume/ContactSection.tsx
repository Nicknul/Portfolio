import React from 'react';

const ContactSection: React.FC = () => (
  <section className="">
    <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
    <p>
      <span className="font-semibold">Email </span>
      <a href="mailto:jea7730@gmail.com" className="text-sm text-blue-500 ml-1">
        jea7730@gmail.com
      </a>
    </p>
    <p>
      <span className="font-semibold">GitHub </span>
      <a
        href="https://github.com/Nicknul"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 ml-1"
      >
        github.com/Nicknul
      </a>
    </p>
    <p>
      <span className="font-semibold">Notion </span>
      <a
        href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 ml-1"
      >
        notion.so/정호연의 기록
      </a>
    </p>
  </section>
);

export default ContactSection;
