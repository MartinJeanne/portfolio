import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";
import fr from '@assets/fr.png';
import en from '@assets/en.png';

const FlagImg = styled.img`
  width: 50px;
  cursor: pointer;
`;

interface FlagLinkLabel {
  src: string;
  alt: string;
}

const lngs: Record<string, FlagLinkLabel> = {
  fr: { src: fr, alt: 'French flag' },
  en: { src: en, alt: 'English flag' },
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{marginRight: '30px',display: 'flex', gap: '15px'}}>
      {Object.keys(lngs).map((lng) => (
        <FlagImg
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          src={lngs[lng].src}
          onClick={() => i18n.changeLanguage(lng)}
        />
      ))}
    </div>
  );
}
