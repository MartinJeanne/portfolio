import { AppContainer, CardGrid } from './styles/StyledComponents';
import { HeaderComponent } from './components/Header';
import {
  IntroCard,
  JavaCard,
  RemoteWorkCard,
  ProjectCard,
  DeveloperCard,
  EducationCard,
  HobbiesCard,
  InterestsCard,
  LanguagesCard
} from './components/cards/PortfolioCards';

function App() {
  return (
    <AppContainer>
      <HeaderComponent />
      <CardGrid>
        <IntroCard />
        <JavaCard />
        <RemoteWorkCard />
        <ProjectCard />
        <DeveloperCard />
        <EducationCard />
        <HobbiesCard />
        <InterestsCard />
        <LanguagesCard />
      </CardGrid>
    </AppContainer>
  );
}

export default App;
