// src/App.jsx
import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './views/Home';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
