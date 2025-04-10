import { Suspense, useEffect, useRef } from 'react';
import ReactGA from "react-ga4";
import { AppContainer, CardGrid } from './styles/StyledComponents';
import { HeaderComponent } from './components/Header';
import { HobbiesCard } from './components/cards/HobbiesCard';
import { SpotifyCard } from './components/cards/SpotifyCard';
import { LanguagesCard } from './components/cards/LanguagesCard';
import { SocialNetworksCard } from './components/cards/SocialNetworksCard';
import { SkillsCard } from './components/cards/SkillsCard';
import { ProjectCard } from './components/cards/ProjectsCard';
import { ExperiencesCard } from './components/cards/ExperiencesCard';
import { IntroCard } from './components/cards/IntroCard';
import { Notification } from './components/Notification';
import { EducationCard } from './components/cards/EducationCard';
import { WhatImLookingForCard } from './components/cards/WhatImLookingForCard';
import { InterestsCard } from './components/cards/InterestsCard';
import { ContactCard } from './components/cards/ContactCard';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  function scrollToContactCard() {
    const cRef = contactRef.current;
    if (!cRef) return;
    cRef.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'center'
    });
  }

  useEffect(() => {
    ReactGA.initialize("G-3Z7WZFW4DY");
    ReactGA.send("pageview");
  }, []);

  return (
    <Suspense>
      <AppContainer>
        <HeaderComponent />
        <Notification scrollTo={scrollToContactCard} />
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
          <ContactCard ref={contactRef} />
        </CardGrid>
      </AppContainer>
    </Suspense>
  );
}

export default App;
