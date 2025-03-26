import styled from '@emotion/styled';
import { BaseCard } from "./BaseCard";
import { FaLanguage } from "react-icons/fa";

interface LanguageBarProps {
  level: number;
}

const LanguageBar = styled.div<LanguageBarProps>`
  width: ${(props: LanguageBarProps) => props.level}%;
  height: 50px;
  background: ${(props: LanguageBarProps) => {
    if (props.level >= 90) return '#c40414';
    if (props.level >= 60) return '#f53344';
    if (props.level >= 40) return '#ff7182';
  }};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.1rem;
`;

const LanguageContainer = styled.div`
  padding: 6px 10px;
  width: 100%;
  h3 {
    margin-bottom: 12px;
    font-size: 1.2rem;
  }
`;

export const LanguagesCard = () => (
  <BaseCard
    icon={<FaLanguage />}
    title="Je parle Français, Anglais et Allemand"
    hoverContent={
      <>
        <LanguageContainer>
          <LanguageBar level={100}>Français</LanguageBar>
        </LanguageContainer>
        <LanguageContainer>
          <LanguageBar level={88}>Anglais</LanguageBar>
        </LanguageContainer>
        <LanguageContainer>
          <LanguageBar level={40}>Allemand</LanguageBar>
        </LanguageContainer>
      </>
    }
  />
);