import { FaGithub, FaGlobe, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

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


export const SocialNetworksCard = () => {
  const { t } = useTranslation();

  return (
  <BaseCard
    title=''
    defaultContent={
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <SocialLink href="mailto:martinjeanne.dev@gmail.com">
          <FaMailBulk size={24} />
          <span>{t('socialNetworksCard.dc.mail')}</span>
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/MartinJeanne" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
          <span>{t('socialNetworksCard.dc.linkedin')}</span>
        </SocialLink>
        <SocialLink href="https://github.com/MartinJeanne" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
          <span>{t('socialNetworksCard.dc.github')}</span>
        </SocialLink>
        <SocialLink href="https://leetcode.com/Martin-jnne" target="_blank" rel="noopener noreferrer">
          <FaGlobe size={24} />
          <span>{t('socialNetworksCard.dc.leetcode')}</span>
        </SocialLink>
      </div>
    }
  />
)};
