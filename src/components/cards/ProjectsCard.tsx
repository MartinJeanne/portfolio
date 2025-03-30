import { FaLink, FaGithub, FaJava, FaPaintBrush } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import type { MenuProps } from 'antd';
import { Dropdown, Tooltip } from 'antd';
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
  icon: ReactNode;
  label?: string;
}

interface Project {
  codeLinks: CodeLink[];
  title: string;
  content: string;
  techno: ReactNode[];
}


export const ProjectCard = () => {
  const projects: Project[] = [
    {
      codeLinks: [
        { link: 'https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot', icon: <CgWebsite size={24} />, label: 'projet' },
        { link: 'https://github.com/MartinJeanne/linkstart-bot', icon: <FaPaintBrush size={24} />, label: 'code Front-end' },
        { link: 'https://github.com/MartinJeanne/linkstart-api', icon: <FaGear size={24} />, label: 'code Back-end' },
      ],
      title: 'Bot discord DJ',
      content: 'Un bot discord qui peut de jouer de la musique dans les salons vocaux',
      techno: [
        <Tooltip title='TypeScript'>
          <SiTypescript size={30} color='#2596be' />
        </Tooltip>,
        <Tooltip title='Discord.js'>
          <img src="discord.png" alt="Docker" />
        </Tooltip>,
        <Tooltip title='FFmpeg'>
          <img src="ffmpeg.png" alt="ffmpeg" />
        </Tooltip>
      ],
    },
    {
      codeLinks: [
        { link: 'https://l1nkstart.web.app/', icon: <CgWebsite size={24} />, label: 'projet' },
        { link: 'https://github.com/MartinJeanne/live-chat', icon: <FaGithub size={24} />, label: 'code' },
      ],
      title: 'Live chat',
      content: 'Une application web de messagerie instantanée',
      techno: [
        <Tooltip title='JavaScript'>
          <SiJavascript size={30} color='#edcf05' />
        </Tooltip>,
        <Tooltip title='Vue.js'>
          <img src="vuejs.png" alt="Vue.js" />
        </Tooltip>,
        <Tooltip title='GCP'>
          <img src="gcp.png" alt="GCP" />
        </Tooltip>,
        <Tooltip title='Firebase'>
          <img src="firebase.png" alt="Firebase" />
        </Tooltip>
      ],
    },
    {
      codeLinks: [
        { link: 'https://whosbigger.martinjeanne.com/', icon: <CgWebsite size={24} />, label: 'projet' },
        { link: 'https://github.com/MartinJeanne/whosbigger-front', icon: <FaPaintBrush size={24} />, label: 'code Front-end' },
        { link: 'https://github.com/MartinJeanne/whosbigger-back', icon: <FaGear size={24} />, label: 'code Back-end' },
      ],
      title: 'Who\'s bigger',
      content: 'Une application web où le but est trouver la plus grande ville parmi deux villes de Normandie',
      techno: [
        <Tooltip title='TypeScript'>
          <SiTypescript size={30} color='#2596be' />
        </Tooltip>,
        <Tooltip title='React'>
          <img src="react.svg" alt="React" />
        </Tooltip>,
        <Tooltip title='Java'>
          <FaJava size={40} color="#eb2d2f" />
        </Tooltip>,
        <Tooltip title='Spring Boot'>
          <img src="springboot.png" alt="Spring Boot" />
        </Tooltip>
      ],

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
            const items: MenuProps['items'] = [];
            project.codeLinks.forEach((codeLink, index) => {
              items.push({
                key: `${index}`,
                label: (
                  <a target="_blank" rel="noopener noreferrer" href={codeLink.link}>
                    Voir le {codeLink.label}
                  </a>
                ),
                icon: codeLink.icon,
                disabled: false,
              })
            });

            return (
              <ProjectContainer key={project.content}>
                <Dropdown menu={{ items }}>
                  <ProjectTitleLink onClick={(e) => e.preventDefault()}>
                      {project.title} <FaLink size={16} />
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