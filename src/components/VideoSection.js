import React from 'react';
import YouTube from 'react-youtube';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const VideoSectionContainer = styled.section`
  padding: 4rem 2rem;
  background: #0f0f1a;
`;

const VideoWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
`;

const VideoTitle = styled(motion.h2)`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function VideoSection() {
  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <VideoSectionContainer>
      <VideoTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Video Profil Sekolah
      </VideoTitle>
      <VideoWrapper>
        <YouTube 
          videoId="GANTI_DENGAN_ID_VIDEO_ANDA" // Contoh ID: "dQw4w9WgXcQ"
          opts={opts}
        />
      </VideoWrapper>
    </VideoSectionContainer>
  );
}

export default VideoSection;