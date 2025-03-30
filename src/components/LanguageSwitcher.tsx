import { useTranslation } from 'react-i18next';

interface Language {
  nativeName: string;
}

const lngs: Record<string, Language> = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Français' }
};


export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}