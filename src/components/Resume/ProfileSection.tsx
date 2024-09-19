import React from 'react';

const ProfileSection: React.FC = () => (
  <section className="lg:flex lg:justify-between lg:items-center text-left">
    <div>
      <h1 className="text-2xl font-bold">정호연 | Nicknul</h1>
      <img src="/imgs/Profile/emoji.jpeg" alt="Profile" className="lg:w-40 w-80 rounded-full mx-auto lg:mx-0 mb-4" />
    </div>
  </section>
);

export default ProfileSection;
