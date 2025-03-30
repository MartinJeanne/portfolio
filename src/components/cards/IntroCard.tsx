import { FaQuestion } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import { ContentP } from "../../styles/StyledComponents";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "../LanguageSwitcher";

export const IntroCard = () => {
  const { t } = useTranslation();

  return (
    <BaseCard
      icon={<FaQuestion />}
      title={t('introCard.title')}
      subtitle="Caen, FR"
      actionText="À propos de moi"
      hoverContent={
        <>
          <h3>À propos de moi</h3>
          <LanguageSwitcher />
          <ContentP style={{ marginTop: '10px' }}>
            Je suis un développeur diplômé d'un
            master en informatique, avec trois
            années d'expérience dans des
            environnements Agile. <br /> <br />
            Aujourd'hui, je suis à la recherche de
            nouveaux défis techniques !
          </ContentP>
        </>
      }
    />
  );
}