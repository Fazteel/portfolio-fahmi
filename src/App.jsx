// src/App.jsx
import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './views/Hero';
import About from './views/About';
import Portfolio from './views/Portfolio';

const App = () => {
  return (
    <>
      <div className="flex flex-col">
        <main className="flex-grow text-center bg-gray-100 dark:bg-gray-800">
        <Navbar />
          <Hero />
          <div className="mt-28">
            <About />
            <Portfolio />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
