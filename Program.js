import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ProgramSection = styled.section`
  background: #0f0f1a;
  padding: 6rem 2rem;
  color: white;
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
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
  }

  p {
    color: #ffffff90;
  }

  &:hover {
    border-color: #00ff87;
  }
`;

const programs = [
  {
    title: "Program Teknologi",
    description: "Pembelajaran coding, AI, dan teknologi terkini",
    icon: "💻"
  },
  {
    title: "Innovation Lab",
    description: "Ruang eksperimen dan pengembangan ide kreatif",
    icon: "🔬"
  },
  {
    title: "Digital Arts",
    description: "Pengembangan seni dalam era digital",
    icon: "🎨"
  }
];

function Programs() {
  return (
    <ProgramSection>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ 
          textAlign: 'center', 
          fontSize: '3rem',
          background: 'linear-gradient(to right, #00ff87, #60efff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '3rem'
        }}
      >
        Program Unggulan
      </motion.h2>
      <ProgramGrid>
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 10px 30px rgba(0,255,135,0.2)'
            }}
          >
            <motion.div
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {program.icon}
            </motion.div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </ProgramCard>
        ))}
      </ProgramGrid>
    </ProgramSection>
  );
}

export default Programs;