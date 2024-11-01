import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 32, 39, 0.7);
  }

  iframe {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
  }
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin-top: -100px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    color: #ffffff90;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }
`;

function Hero() {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1
    },
  };

  return (
    <HeroSection id="beranda">
      <VideoContainer>
        <YouTube 
          videoId="Grq4rhiO_Ko"
          opts={opts}
          onReady={(event) => {
            event.target.playVideo();
          }}
          onEnd={(event) => {
            event.target.playVideo();
          }}
        />
      </VideoContainer>
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          Selamat Datang di SMKN 1 Bulan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Membentuk Generasi Digital yang Inovatif dan Berkarakter
        </motion.p>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;