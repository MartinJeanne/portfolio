import { MdInterests } from "react-icons/md";
import { BaseCard } from "./BaseCard";
import { useTranslation } from 'react-i18next';

export const InterestsCard = () => {
  const { t } = useTranslation();

  return (
    <BaseCard
      variant="dark"
      icon={<MdInterests color="white" />}
      title={t('interestsCard.title')}
      subtitle={t('interestsCard.subtitle')}
      hoverContent={
        <>
          <h2 style={{ color: 'white' }}>{t('interestsCard.h.title')}</h2>
          <div style={{ color: 'white' }}>
            <h3>{t('interestsCard.h.subtitle1')}</h3>
            <p>{t('interestsCard.h.content1')}</p>
            <h3 style={{ marginTop: '10px' }}>{t('interestsCard.h.subtitle2')}</h3>
            <p>{t('interestsCard.h.content2')}</p>
            <h3 style={{ marginTop: '10px' }}>{t('interestsCard.h.subtitle3')}</h3>
            <p>{t('interestsCard.h.content3')}</p>
            <h3 style={{ marginTop: '10px' }}>{t('interestsCard.h.subtitle4')}</h3>
            <p>{t('interestsCard.h.content4')}</p>
          </div>
        </>
      }
    />
  )
};