import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProgramSection = styled.section`
  padding: 6rem 2rem;
  background: #0f0f1a;
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProgramCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #ffffff90;
    line-height: 1.6;
  }
`;

const SectionTitle = styled(motion.h2)`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

function Programs() {
  return (
    <ProgramSection>
      <ProgramGrid>
        <ProgramCard>
          {/* Isi konten di sini */}
        </ProgramCard>
      </ProgramGrid>
    </ProgramSection>
  );
}

export default Programs;