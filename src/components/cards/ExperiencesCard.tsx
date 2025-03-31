import { BsBuilding } from "react-icons/bs";
import { BaseCard } from "./BaseCard";
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

// This style is not applied on the fist element
const ExperienceContainer = styled.div`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    padding-bottom: 20px;
`;

interface Experience {
  title: string;
  subtitle: string;
  content: string;
}

export const ExperiencesCard = () => {
  const { t } = useTranslation();

  const experiences: Experience[] = t('experienceCard.h.xps', { returnObjects: true }) as Experience[];

  return (
    <BaseCard
      variant="primary"
      icon={<BsBuilding />}
      title={t('experienceCard.title')}
      actionText={t('experienceCard.actionText')}
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
