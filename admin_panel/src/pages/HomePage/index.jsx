import React from 'react';
import HeroSection from '../../components/HeroSection';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

        <Header/>
        <Sidebar/>
      <HeroSection />
      {/* Add other sections of your homepage here */}
    </div>
  );
};

export default HomePage;