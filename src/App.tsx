import { AppContainer, CardGrid } from './styles/StyledComponents';
import { HeaderComponent } from './components/Header';
import {
  IntroCard,
  SkillsCard,
  WhatImLookingForCard,
  ProjectCard,
  DeveloperCard,
  EducationCard,
  InterestsCard,
  LanguagesCard,
  SpotifyCard,
  SocialNetworksCard
} from './components/cards/PortfolioCards';
import { HobbiesCard } from './components/cards/HobbiesCard';

function App() {
  return (
    <AppContainer>
      <HeaderComponent />
      <CardGrid>
        <IntroCard />
        <SkillsCard />
        <WhatImLookingForCard />
        <ProjectCard />
        <DeveloperCard />
        <EducationCard />
        <HobbiesCard />
        <InterestsCard />
        <LanguagesCard />
        <SpotifyCard />
        <SocialNetworksCard />
      </CardGrid>
    </AppContainer>
  );
}

export default App;
