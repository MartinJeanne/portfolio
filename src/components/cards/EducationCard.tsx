import { BaseCard } from "./BaseCard";
import { FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";

interface Studies {
  title: string;
  content: string;
}

const EducationContainer = styled.div`
    &:not(:first-of-type) {
        margin-top: 20px;
    }
`;

export const EducationCard = () => {
  const { t } = useTranslation();
  const educations = t('educationCard.h.studies', { returnObjects: true }) as Studies[];

  return (
    <BaseCard
      variant='primary'
      icon={<FaGraduationCap />}
      title={t('educationCard.title')}
      actionText={t('educationCard.actionText')}
      hoverContent={
        <>
          {educations.map((education, index) => (
            <EducationContainer key={index}>
              <h3>{education.title}</h3>
              <p>{education.content}</p>
            </EducationContainer>
          ))}
        </>
      }
    />
  )
};
