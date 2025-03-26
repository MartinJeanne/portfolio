import { FaGithub, FaGlobe, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 71, 87, 0.1);
  }

  svg {
    color: #ff4757;
  }
`;


export const SocialNetworksCard = () => (
  <BaseCard
    title="Mes réseaux"
    defaultContent={
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <SocialLink href="mailto:martinjeanne.dev@gmail.com">
          <FaMailBulk size={24} />
          <span>Mon email</span>
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/MartinJeanne" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
          <span>Mon profil Linkedin</span>
        </SocialLink>
        <SocialLink href="https://github.com/MartinJeanne" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
          <span>Mon profil Github</span>
        </SocialLink>
        <SocialLink href="https://leetcode.com/Martin-jnne" target="_blank" rel="noopener noreferrer">
          <FaGlobe size={24} />
          <span>Profil LeetCode</span>
        </SocialLink>
      </div>
    }
  />
); 