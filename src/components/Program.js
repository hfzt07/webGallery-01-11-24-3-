import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProgramSection = styled.section`
  padding: 2rem 2rem;
  background: #1a1a2e;
`;

const ProgramContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
`;

const ProgramCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const EkstrakurikulerSection = styled.div`
  margin-top: 4rem;
`;

const SubTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const EkstrakurikulerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

function Program() {
  const programs = [
    {
      title: "Program Akademik",
      description: "Kurikulum terbaik dengan pengajar profesional yang berpengalaman di bidangnya"
    },
    {
      title: "Ekstrakurikuler",
      description: "Berbagai kegiatan untuk mengembangkan bakat dan minat siswa"
    },
    {
      title: "Pengembangan Karakter",
      description: "Program pembentukan kepribadian dan moral yang berakhlak mulia"
    }
  ];

  const ekstrakurikuler = [
    {
      title: "PRAMUKA",
      description: "Kegiatan kepanduan yang mengembangkan jiwa kepemimpinan dan kemandirian"
    },
    {
      title: "PASKIBRAKA",
      description: "Pasukan pengibar bendera yang melatih kedisiplinan dan cinta tanah air"
    },
    {
      title: "PMR",
      description: "Palang Merah Remaja yang mengajarkan pertolongan pertama dan kepedulian sosial"
    },
    {
      title: "ROHIS",
      description: "Kerohanian Islam yang membina akhlak dan spiritual siswa"
    }
  ];

  return (
    <ProgramSection id="program">
      <ProgramContainer>
        <Title>Program Unggulan</Title>
        <ProgramGrid>
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                boxShadow: '0 10px 30px rgba(0, 255, 135, 0.2)'
              }}
            >
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </ProgramCard>
          ))}
        </ProgramGrid>

        <EkstrakurikulerSection>
          <SubTitle>Ekstrakurikuler</SubTitle>
          <EkstrakurikulerGrid>
            {ekstrakurikuler.map((ekskul, index) => (
              <ProgramCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0, 255, 135, 0.2)'
                }}
              >
                <h3>{ekskul.title}</h3>
                <p>{ekskul.description}</p>
              </ProgramCard>
            ))}
          </EkstrakurikulerGrid>
        </EkstrakurikulerSection>
      </ProgramContainer>
    </ProgramSection>
  );
}

export default Program; 