import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProfilSection = styled.section`
  padding: 8rem 2rem;
  background: #1a1a2e;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 46, 0),
      rgba(26, 26, 46, 0.8) 40%,
      rgba(26, 26, 46, 1) 70%
    );
    pointer-events: none;
    z-index: 2;
  }
`;

const ProfilContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const VisiMisiContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VisiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;

  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '🎯';
      font-size: 2rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.1rem;
    text-align: justify;
  }
`;

const MisiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '🚀';
      font-size: 2rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
    line-height: 1.8;
    font-size: 1.1rem;

    &::before {
      content: '✨';
      position: absolute;
      left: 0;
      color: #00ff87;
    }
  }
`;

const JurusanSection = styled.div`
  margin-top: 4rem;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('/images/jurusan-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 150px;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(
      to bottom,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }

  &::after {
    bottom: 0;
    background: linear-gradient(
      to top,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }
`;

const JurusanContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const JurusanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const JurusanCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 255, 135, 0.2);
  }
`;

const SubTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Profil() {
  const jurusan = [
    {
      nama: "Rekayasa Perangkat Lunak",
      deskripsi: "Program keahlian yang mempelajari pengembangan aplikasi dan software"
    },
    {
      nama: "Teknik Komputer dan Jaringan",
      deskripsi: "Program keahlian yang fokus pada infrastruktur jaringan dan hardware"
    },
    {
      nama: "Multimedia",
      deskripsi: "Program keahlian yang mempelajari desain grafis dan produksi konten digital"
    },
    {
      nama: "Bisnis Digital",
      deskripsi: "Program keahlian yang mempelajari pemasaran digital dan e-commerce"
    }
  ];

  return (
    <ProfilSection id="profil">
      <ProfilContainer>
        <Title>Profil SMKN 1 Bulan</Title>
        <VisiMisiContainer>
          <VisiCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>Visi</h3>
            <p>
              Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan berkompeten,
              inovatif, dan berakhlak mulia, siap menjadi pemimpin di era digital.
            </p>
          </VisiCard>

          <MisiCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>Misi</h3>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Menyelenggarakan pendidikan berbasis teknologi dengan standar industri
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Mengembangkan kreativitas dan inovasi dalam pembelajaran
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Membentuk karakter kepemimpinan dan jiwa wirausaha
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Membangun kerjasama dengan industri dan perguruan tinggi
              </motion.li>
            </ul>
          </MisiCard>
        </VisiMisiContainer>

        <JurusanSection id="jurusan">
          <JurusanContainer>
            <SubTitle>Program Keahlian</SubTitle>
            <JurusanGrid>
              {jurusan.map((item, index) => (
                <JurusanCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(0, 255, 135, 0.2)'
                  }}
                >
                  <h3>{item.nama}</h3>
                  <p>{item.deskripsi}</p>
                </JurusanCard>
              ))}
            </JurusanGrid>
          </JurusanContainer>
        </JurusanSection>
      </ProfilContainer>
    </ProfilSection>
  );
}

export default Profil; 