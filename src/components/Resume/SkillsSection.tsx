import React from 'react';

const SkillsSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">TOOLS</h2>
    <div className="md:grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold">Frontend</h3>
      </div>
      <div className="text-sm">
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Webpack</li>
          <li>babel</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <hr className="col-span-2 border-gray-300 my-4" />

      <div>
        <h3 className="text-lg font-semibold">Backend</h3>
      </div>
      <div className="text-sm">
        <ul className="list-disc list-inside">
          <li>Node.js</li>
          <li>Python</li>
          <li>RestAPI</li>
          <li>NestJS</li>
          <li>FastAPI</li>
          <li>SQLite</li>
        </ul>
      </div>
      <hr className="col-span-2 border-gray-300 my-4" />

      <div>
        <h3 className="text-lg font-semibold">Communication</h3>
      </div>
      <div className="text-sm">
        <ul className="list-disc list-inside">
          <li>GitHub</li>
          <li>Notion</li>
          <li>Slack</li>
        </ul>
      </div>
      <hr className="col-span-2 border-gray-300 my-4" />

      <div>
        <h3 className="text-lg font-semibold">Design</h3>
      </div>
      <div className="text-sm">
        <ul className="list-disc list-inside">
          <li>Figma</li>
        </ul>
      </div>
    </div>
  </section>
);

export default SkillsSection;
