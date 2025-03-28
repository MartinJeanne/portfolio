import { AppContainer, CardGrid } from './styles/StyledComponents';
import { HeaderComponent } from './components/Header';
import { WhatImLookingForCard, EducationCard, InterestsCard } from './components/cards/PortfolioCards';
import { HobbiesCard } from './components/cards/HobbiesCard';
import { SpotifyCard } from './components/cards/SpotifyCard';
import { LanguagesCard } from './components/cards/LanguagesCard';
import { SocialNetworksCard } from './components/cards/SocialNetworksCard';
import { SkillsCard } from './components/cards/SkillsCard';
import { ProjectCard } from './components/cards/ProjectsCard';
import { ExperiencesCard } from './components/cards/ExperiencesCard';
import { IntroCard } from './components/cards/IntroCard';
import { Notification } from './components/Notification';

function App() {
  return (
    <AppContainer>
      <HeaderComponent />
      <Notification />
      <CardGrid>
        <IntroCard />
        <ExperiencesCard />
        <ProjectCard />
        <HobbiesCard />
        <SkillsCard />
        <EducationCard />
        <WhatImLookingForCard />
        <InterestsCard />
        <LanguagesCard />
        <SpotifyCard />
        <SocialNetworksCard />
      </CardGrid>
    </AppContainer>
  );
}

export default App;
