// src/App.jsx
import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './views/Hero';
import About from './views/About';

const App = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <main className="flex-grow text-center bg-gray-100 dark:bg-gray-800">
          <Hero />
          <div className="mt-28">
            <About />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
