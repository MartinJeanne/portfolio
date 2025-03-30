import { BsBuilding } from "react-icons/bs";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';


// This style is not applied on the fist element
const ExperienceContainer = styled.div`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    padding-bottom: 20px;
`;

export const ExperiencesCard = () => {
  const experiences = [
    {
      title: 'Développeur back-end Java',
      subtitle: 'Sinay, Caen 2022-2024',
      content: 'Développement avec Java Spring Boot d\'API REST, servant pour des SaaS. Dans un cadre Agile Scrum avec du CI/CD',
    },
    {
      title: 'Développeur JavaScript',
      subtitle: 'Léonard Solutions, Caen 2021-2022',
      content: `Développement en JavaScript, création de SaaS pour
        modélisation de batiments en 3D`,
    },
  ];

  return (
    <BaseCard
      variant="primary"
      icon={<BsBuilding />}
      title="Développeur back-end Java @Sinay"
      actionText="Voir toutes les expériences"
      hoverContent={
        <>
          {experiences.map((experience, index) => (
            <ExperienceContainer key={index}>
              <h3>{experience.title}</h3>
              <h4>{experience.subtitle}</h4>
              <p>
                {experience.content}
              </p>
            </ExperienceContainer>
          ))}
        </>
      }
    />
  )
};