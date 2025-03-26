import { FaExternalLinkAlt } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';

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

export const ProjectCard = () => {
  const projects = [
    {
      src: 'https://github.com/MartinJeanne/linkstart-bot',
      title: 'Bot discord DJ',
      content: 'Un bot discord qui peut de jouer de la musique dans les salons vocaux',
      techno: 'TypeScript, Java, Spring Boot, Docker'
    },
    {
      src: 'https://github.com/MartinJeanne/linkstart-bot',
      title: 'Who\'s bigger',
      content: 'Une application web où le but est trouver la plus grande ville parmi deux villes de Normandie',
      techno: 'TypeScript, React, Java, Spring Boot, Docker'
    },
    {
      src: 'https://github.com/MartinJeanne/linkstart-bot',
      title: 'Live chat',
      content: 'Une application web de messagerie instantanée',
      techno: 'JavaScript, Vue.js, Firebase, GCP'
    },
  ];

  return (
    <BaseCard
      title="Mes projets coups de coeur ❤️"
      actionText="Voir les projets"
      justifyContent="flex-start"
      hoverContent={
        <>
          {projects.map((project) => (
            <ProjectContainer key={project.title}>
              <ProjectTitleLink href={project.src} target="_blank" rel="noopener noreferrer">
                {project.title} <FaExternalLinkAlt size={17} />
              </ProjectTitleLink>
              <p>{project.content}</p>
              <p style={{ color: '#ff4757' }}>{project.techno}</p>
            </ProjectContainer>
          ))}
        </>
      }
    />
  )
}