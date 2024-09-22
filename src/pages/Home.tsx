import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)] w-full max-w-[90%] xl:max-w-[40%] lg:max-w-[70%] mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">정호연</h1>
      <p className="mb-6 max-w-lg">
        안녕하세요! 신입 개발자 정호연입니다. <br /> <br />
        저의 좌우명인 멈춤보다 실행처럼 끊임없이 접근하고 연구하며 <br />
        계속해서 나아가도록 노력하고 있습니다.
      </p>

      <div className="flex gap-4 mb-6">
        <a
          href="/resume"
          className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition duration-300"
        >
          Resume
        </a>
        <a
          href="/"
          className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition duration-300"
        >
          Portfolio
        </a>
      </div>

      <div className="flex gap-4 mb-6">
        <a href="https://github.com/Nicknul" target="_blank" rel="noopener noreferrer">
          <img src="/imgs/github.png" alt="GitHub" className="w-8 h-8" />
        </a>
        <a
          href="https://stupendous-lighter-a2b.notion.site/3285a71a0daf4475b8dabd1ca260604d?v=fc4dafec8dc8454098541b1f489dd710&pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/imgs/notion.png" alt="Notion" className="w-8 h-8" />
        </a>
      </div>

      <a
        href="jea7730@gmail.com"
        className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition duration-300 mb-6"
      >
        Contact Me
      </a>
    </div>
  );
};

export default HomePage;
