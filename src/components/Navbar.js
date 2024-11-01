import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(15, 32, 39, 0.95)' : 'rgba(15, 32, 39, 0.5)'};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.scrolled ? '1rem 2rem' : '1.5rem 2rem'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #00ff87, #60efff);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: ${props => props.scrolled ? '4rem' : '5rem'};
    left: 0;
    right: 0;
    background: rgba(15, 32, 39, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
  }
`;

const MobileNavLink = styled(NavLink)`
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const targetId = sectionId === 'program' ? 'jurusan' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent scrolled={scrolled}>
        <LogoContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection('beranda')}
        >
          <LogoImage 
            src="/logo-sekolah.png" 
            alt="Logo SMKN 1 Bulan"
          />
          <LogoText>SMKN 1 BULAN</LogoText>
        </LogoContainer>
        <NavLinks>
          {['Beranda', 'Profil', 'Program', 'Fasilitas', 'Kontak'].map((item, index) => (
            <NavLink
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              as={motion.a}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </NavContent>
      <MobileMenu
        isOpen={mobileMenuOpen}
        scrolled={scrolled}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {['Beranda', 'Profil', 'Program', 'Fasilitas', 'Kontak'].map((item) => (
          <MobileNavLink
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </NavbarContainer>
  );
}

export default Navbar;