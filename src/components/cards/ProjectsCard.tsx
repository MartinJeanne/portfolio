import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { ContentP } from "../../styles/StyledComponents";

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

interface Project {
  projectLink: string;
  codeLink: string;
  title: string;
  content: string;
  techno: string;
}

export const ProjectCard = () => {
  const projects: Project[] = [
    {
      projectLink: 'https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot',
      codeLink: 'https://github.com/MartinJeanne/linkstart-bot',
      title: 'Bot discord DJ',
      content: 'Un bot discord qui peut de jouer de la musique dans les salons vocaux',
      techno: 'TypeScript, Java, Spring Boot, Docker',
    },
    {
      projectLink: 'https://whosbigger.martinjeanne.com/',
      codeLink: 'https://github.com/MartinJeanne/whosbigger-front',
      title: 'Who\'s bigger',
      content: 'Une application web où le but est trouver la plus grande ville parmi deux villes de Normandie',
      techno: 'TypeScript, React, Java, Spring Boot, Docker',

    },
    {
      projectLink: 'https://l1nkstart.web.app/',
      codeLink: 'https://github.com/MartinJeanne/live-chat',
      title: 'Live chat',
      content: 'Une application web de messagerie instantanée',
      techno: 'JavaScript, Vue.js, Firebase, GCP',
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
                    Go to project
                  </a>
                ),
                icon: <CgWebsite size={24} />,
                disabled: false,
              },
              {
                key: '2',
                label: (
                  <a target="_blank" rel="noopener noreferrer" href={project.codeLink}>
                    Go to code
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
                <p style={{ color: '#ff4757' }}>{project.techno}</p>
              </ProjectContainer>
            );
          })}
        </>
      }
    />
  )
}