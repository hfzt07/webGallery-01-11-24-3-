import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Program from './components/Program';
import Fasilitas from './components/Fasilitas';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Profil />
      <Program />
      <Fasilitas />
      <Footer />
    </div>
  );
}

export default App;