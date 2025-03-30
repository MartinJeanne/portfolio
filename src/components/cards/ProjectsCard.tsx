import { FaLink, FaGithub, FaPaintBrush } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import type { MenuProps } from 'antd';
import { Dropdown, Tooltip } from 'antd';
import { ContentP } from "../../styles/StyledComponents";
import { ReactNode } from "react";
import { useTranslation } from 'react-i18next';

import java from '@assets/java.png'
import javascript from '@assets/javascript.png'
import typescript from '@assets/typescript.png'
import react from '@assets/react.svg'
import discord from '@assets/discord.png'
import ffmpeg from '@assets/ffmpeg.png'
import firebase from '@assets/firebase.png'
import gcp from '@assets/gcp.png'
import springboot from '@assets/springboot.png'
import vuejs from '@assets/vuejs.png'

const ProjectTitleLink = styled.a`
    font-size: 1.17em;
    color: #ff4757;
    text-decoration: none;
    font-weight: bold;
`;

// This style is not applied on the fist element
const ProjectContainer = styled.div`
    &:not(:first-of-type) {
        margin-top: 20px;
    }
    padding-bottom: 20px;
`;

const TechoImgsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    gap: 10px;

    img {
    object-fit: contain;
    width: 40px;
    }
`;

interface CodeLink {
  link: string;
  type: string;
  label: string;
}

interface Project {
  codeLinks: CodeLink[];
  title: string;
  content: string;
  technoIcons: string[];
}

export const ProjectCard = () => {
  const { t } = useTranslation();

  const technoIconMapping: { [key: string]: string } = {
    'Java': java,
    'JavaScript': javascript,
    'TypeScript': typescript,
    'React': react,
    'Vue.js': vuejs,
    'Discord.js': discord,
    'FFmpeg': ffmpeg,
    'Firebase': firebase,
    'GCP': gcp,
    'Spring Boot': springboot
  };

  const submenuIconMapping: { [key: string]: ReactNode } = {
    project: <CgWebsite size={24} />,
    code: <FaGithub size={24} />,
    frontEnd: <FaPaintBrush size={24} />,
    backEnd: <FaGear size={24} />
  };

  const projects: Project[] = t('projectCard.h.projects', { returnObjects: true }) as Project[];

  return (
    <BaseCard
      title={t('projectCard.title')}
      actionText={t('projectCard.actionText')}
      justifyHoverContent="flex-start"
      hoverContent={
        <>
          {projects.map((project) => {
            // Créer un menu personnalisé pour chaque projet
            const items: MenuProps['items'] = [];
            project.codeLinks.forEach((codeLink, index) => {
              items.push({
                key: `${index}`,
                label: (
                  <a target="_blank" rel="noopener noreferrer" href={codeLink.link}>
                    {codeLink.label}
                  </a>
                ),
                icon: submenuIconMapping[codeLink.type],
                disabled: false,
              })
            });

            return (
              <ProjectContainer key={project.title}>
                <Dropdown menu={{ items }}>
                  <ProjectTitleLink onClick={(e) => e.preventDefault()}>
                    {project.title} <FaLink size={16} />
                  </ProjectTitleLink>
                </Dropdown>
                <ContentP>{project.content}</ContentP>
                <TechoImgsContainer>
                  {project.technoIcons.map((icon) => {
                    return (
                      <Tooltip key={icon} title={icon}>
                        <img src={technoIconMapping[icon]} alt={icon} />
                      </Tooltip>
                    )
                  })}
                </TechoImgsContainer>
              </ProjectContainer>
            );
          })}
        </>
      }
    />
  )
}