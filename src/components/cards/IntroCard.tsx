import { FaQuestion } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BaseCard } from "./BaseCard";
import { ContentP } from "../../styles/StyledComponents";
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const FlexSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IntroCard = () => {
  const { t } = useTranslation();

  return (
    <BaseCard
      icon={<FaQuestion />}
      title={t('introCard.title')}
      subtitle={<FlexSubtitle><p>{t('introCard.subtitle')}</p> <FaLocationDot size={23}/></FlexSubtitle>}
      actionText={t('introCard.actionText')}
      hoverContent={
        <>
          <h3>{t('introCard.h.title')}</h3>
          <ContentP style={{ marginTop: '10px' }}>
            {t('introCard.h.content1')}
          </ContentP>
          <ContentP style={{ marginTop: '15px' }}>
            {t('introCard.h.content2')}
          </ContentP>
        </>
      }
    />
  );
}