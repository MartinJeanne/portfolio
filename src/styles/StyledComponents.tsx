import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AppContainer = styled.div`
  max-width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
  margin-block: 2rem;
`;

export const ContentP = styled.p`
  font-size: 1.1rem;
  color:rgb(102, 102, 102)
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 20px;

  @media (max-width: 330px) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }
`;

export const Card = styled(motion.div)`
  height: 360px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  h2 {
    font-size: 1.75rem;
    margin: 0 0 15px 0;
    color: #ff4757;
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;