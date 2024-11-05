import React from 'react';
import Intro from '../components/intro.jsx';
import Sidebar from '../components/sidebar.jsx';
import Header from '../components/header.jsx';
import Features from '../components/features.jsx';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Add the Header component */}
      <div className="flex flex-row flex-1 mt-20"> {/* Adjusted margin-top to account for fixed header */}
        <Sidebar />
        <div className="flex-1 p-4 ml-60"> {/* Adjusted margin to account for fixed sidebar */}
          <Intro />
          <div className='mt-20'>
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;