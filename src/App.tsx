import { AppContainer, CardGrid } from './styles/StyledComponents';
import { HeaderComponent } from './components/Header';
import {
  IntroCard,
  WhatImLookingForCard,
  EducationCard,
  InterestsCard
} from './components/cards/PortfolioCards';
import { HobbiesCard } from './components/cards/HobbiesCard';
import { SpotifyCard } from './components/cards/SpotifyCard';
import { LanguagesCard } from './components/cards/LanguagesCard';
import { SocialNetworksCard } from './components/cards/SocialNetworksCard';
import { SkillsCard } from './components/cards/SkillsCard';
import { ProjectCard } from './components/cards/ProjectsCard';
import { ExperiencesCard } from './components/cards/ExperiencesCard';

function App() {
  return (
    <AppContainer>
      <HeaderComponent />
      <CardGrid>
        <IntroCard />
        <SkillsCard />
        <WhatImLookingForCard />
        <ProjectCard />
        <ExperiencesCard />
        <HobbiesCard />
        <EducationCard />
        <InterestsCard />
        <LanguagesCard />
        <SpotifyCard />
        <SocialNetworksCard />
      </CardGrid>
    </AppContainer>
  );
}

export default App;
