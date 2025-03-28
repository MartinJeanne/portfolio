import { FaExternalLinkAlt, FaGithub, FaJava } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { ContentP } from "../../styles/StyledComponents";
import { ReactNode } from "react";
import { SiJavascript, SiTypescript } from "react-icons/si";

const ProjectTitleLink = styled.a`
    font-size: 1.17em;
    color: #ff4757;
    text-decoration: none;
    font-weight: bold;
`;

// This style is not applied on the fist element
const ProjectContainer = styled.div`
    &:not(:first-of-type) {
        margin-top: 10px;
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

interface Project {
  projectLink: string;
  codeLink: string;
  title: string;
  content: string;
  techno: ReactNode[];
}

export const ProjectCard = () => {
  const projects: Project[] = [
    {
      projectLink: 'https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot',
      codeLink: 'https://github.com/MartinJeanne/linkstart-bot',
      title: 'Bot discord DJ',
      content: 'Un bot discord qui peut de jouer de la musique dans les salons vocaux',
      techno: [<SiTypescript size={30} color='#2596be' />, <img src="discord.png" alt="Docker" />, <img src="ffmpeg.png" alt="ffmpeg" />],
    },
    {
      projectLink: 'https://l1nkstart.web.app/',
      codeLink: 'https://github.com/MartinJeanne/live-chat',
      title: 'Live chat',
      content: 'Une application web de messagerie instantanée',
      techno: [<SiJavascript size={30} color='#edcf05' />, <img src="vuejs.png" alt="Vue.js" />, <img src="gcp.png" alt="GCP" />, <img src="firebase.png" alt="Firebase" />],
    },
    {
      projectLink: 'https://whosbigger.martinjeanne.com/',
      codeLink: 'https://github.com/MartinJeanne/whosbigger-front',
      title: 'Who\'s bigger',
      content: 'Une application web où le but est trouver la plus grande ville parmi deux villes de Normandie',
      techno: [<SiTypescript size={30} color='#2596be' />, <img src="react.svg" alt="React" />, <FaJava size={40} color="#eb2d2f" />, <img src="springboot.png" alt="Spring Boot" />],

    },

  ];

  return (
    <BaseCard
      title="Mes projets coups de coeur ❤️"
      actionText="Voir les projets"
      justifyHoverContent="flex-start"
      hoverContent={
        <>
          {projects.map((project) => {
            // Créer un menu personnalisé pour chaque projet
            const items: MenuProps['items'] = [
              {
                key: '1',
                label: (
                  <a target="_blank" rel="noopener noreferrer" href={project.projectLink}>
                    Voir le project
                  </a>
                ),
                icon: <CgWebsite size={24} />,
                disabled: false,
              },
              {
                key: '2',
                label: (
                  <a target="_blank" rel="noopener noreferrer" href={project.codeLink}>
                    Voir le code
                  </a>
                ),
                icon: <FaGithub size={24} />,
                disabled: false,
              }
            ];

            return (
              <ProjectContainer key={project.content}>
                <Dropdown menu={{ items }}>
                  <ProjectTitleLink onClick={(e) => e.preventDefault()}>
                    <Space>
                      {project.title} <FaExternalLinkAlt size={17} />
                    </Space>
                  </ProjectTitleLink>
                </Dropdown>
                <ContentP>{project.content}</ContentP>
                <TechoImgsContainer>{project.techno}</TechoImgsContainer>
              </ProjectContainer>
            );
          })}
        </>
      }
    />
  )
}