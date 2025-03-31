import { AiOutlineHome } from "react-icons/ai";
import { BaseCard } from "./BaseCard";
import { useTranslation } from 'react-i18next';

export const WhatImLookingForCard = () => {
  const { t } = useTranslation();

  return (
    <BaseCard
      icon={<AiOutlineHome />}
      title={t('whatImLookingForCard.title')}
      actionText={t('whatImLookingForCard.actionText')}
      hoverContent={
        <>
          <h2>{t('whatImLookingForCard.h.title')}</h2>
          <ul style={{ marginTop: '15px', lineHeight: '1.6', textAlign: 'left', color: 'rgb(102, 102, 102)' }}>
            <li>{t('whatImLookingForCard.h.li1')}</li>
            <li>{t('whatImLookingForCard.h.li2')}</li>
            <li>{t('whatImLookingForCard.h.li3')}</li>
            <li>{t('whatImLookingForCard.h.li4')}</li>
          </ul>
        </>
      }
    />
  )
};