import { ReactNode, useEffect, useState } from "react";
import { FaLink, FaGithub, FaPaintBrush } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import type { MenuProps } from 'antd';
import { Dropdown, Tooltip } from 'antd';
import { ContentP } from "../../styles/StyledComponents";
import { useTranslation } from 'react-i18next';

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

interface TechnoIcons {
  link: string;
  label: string;
}

interface Project {
  codeLinks: CodeLink[];
  title: string;
  content: string;
  technoIcons: TechnoIcons[];
}

export const ProjectCard = () => {
  const { t } = useTranslation();
  const rawProjects: Project[] = t('projectsCard.h.projects', { returnObjects: true }) as Project[];
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        rawProjects.map(async (project) => {
          const loadedIcons = await Promise.all(
            project.technoIcons.map(async (icon) => {
              return { ...icon, link: (await import(`@assets/${icon.link}.png`)).default };
            })
          );
          return { ...project, technoIcons: loadedIcons };
        })
      );
      setProjects(images);
    };

    loadImages();
  }, [rawProjects]);

  const submenuIconMapping: { [key: string]: ReactNode } = {
    project: <CgWebsite size={24} />,
    code: <FaGithub size={24} />,
    frontEnd: <FaPaintBrush size={24} />,
    backEnd: <FaGear size={24} />
  };

  return (
    <BaseCard
      title={t('projectsCard.title')}
      actionText={t('projectsCard.actionText')}
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
                      <Tooltip key={icon.label} title={icon.label}>
                        <img src={icon.link} alt={icon.label} />
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