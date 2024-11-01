import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Profil from './components/Profil.jsx';
import Program from './components/Program.jsx';
import Fasilitas from './components/Fasilitas.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App" style={{ background: '#1a1a2e' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Profil />
              <Program />
              <Fasilitas />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 