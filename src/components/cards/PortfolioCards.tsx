import { FaQuestion, FaJava, FaGraduationCap, FaLanguage, FaRunning, FaLinkedin, FaGithub, FaGlobe, FaMailBulk } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { MdInterests } from 'react-icons/md';
import { SiTypescript } from 'react-icons/si';
import { BaseCard } from './BaseCard';
import styled from '@emotion/styled';

interface LanguageBarProps {
  level: number;
}

const LanguageBar = styled.div<LanguageBarProps>`
  width: ${(props: LanguageBarProps) => props.level}%;
  height: 50px;
  background: ${(props: LanguageBarProps) => {
    if (props.level >= 80) return '#c40414';
    if (props.level >= 60) return '#e02232';
    if (props.level >= 40) return '#ff7182';
  }};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  transition: width 0.3s ease;
  font-size: 1.1rem;
`;

const LanguageContainer = styled.div`
  margin: 5px 0;
  width: 100%;
  h3 {
    margin-bottom: 12px;
    font-size: 1.2rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 71, 87, 0.1);
  }

  svg {
    color: #ff4757;
  }
`;

export const IntroCard = () => (
  <BaseCard
    icon={<FaQuestion />}
    title="Qui suis-je ?"
    subtitle="Caen, FR"
    actionText="À propos de moi"
    hoverContent={
      <>
        <h3 style={{ color: '#ff4757', fontSize: '1.4rem' }}>À propos de moi</h3>
        <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
          Je suis un développeur diplômé d'un
          master en informatique, avec trois
          années d'expérience dans des
          environnements Agile. <br /> <br />
          Aujourd'hui, je suis à la recherche de
          nouveaux défis techniques !

        </p>
      </>
    }
  />
);

export const SkillsCard = () => (
  <BaseCard
    variant="primary"
    icon={<FaJava color="white" />}
    title="Compétences"
    actionText="Voir plus"
    hoverContent={
      <>
        <div style={{
          width: '150px',
          height: '150px',
          margin: '0 auto',
          background: 'conic-gradient(rgba(255, 255, 255, 0.32) 0% 33%, rgba(255, 255, 255, 0.65) 33% 66%, rgba(255, 255, 255, 0.88) 66% 100%)',
          borderRadius: '50%',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%, -100%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px'
          }}>
            <FaJava size={40} />
            <span>Java</span>
          </div>
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '10px',
            transform: 'translate(-50%, 100%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px'
          }}>
            <SiTypescript size={40} />
            <span>TS</span>
          </div>
          <div style={{
            position: 'absolute',
            bottom: '0',
            right: '10px',
            transform: 'translate(50%, 100%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px'
          }}>
            <img src="/src/assets/react.svg" alt="React" style={{ filter: 'brightness(0) invert(1)' }} />
            <span>React</span>
          </div>
        </div>
      </>
    }
  />
);

export const WhatImLookingForCard = () => (
  <BaseCard
    icon={<AiOutlineHome />}
    title="Mon job de rêve"
    actionText="Découvrez le"
    hoverContent={
      <>
        <h2>Un poste de développeur avec</h2>
        <ul style={{ marginTop: '15px', lineHeight: '1.6', textAlign: 'left' }}>
          <li>du challenge</li>
          <li>un équilibre vie pro/perso</li>
          <li>un contrat CDI/CDD/VIE</li>
          <li>une collaboration internationale</li>
        </ul>
      </>
    }
  />
);

export const ProjectCard = () => (
  <BaseCard
    title="Mes projets coups de coeur ❤️"
    actionText="Voir les projets"
    hoverContent={
      <>
        <h2>Détails du projet</h2>
        <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
          Description détaillée du projet, technologies utilisées, défis rencontrés et solutions apportées.
        </p>
        <div style={{ marginTop: '15px' }}>
          <h3 style={{ color: '#ff4757' }}>Technologies</h3>
          <p>Java, Spring Boot, React, Docker</p>
        </div>
        <p style={{ marginTop: '15px', color: '#ff4757' }}>
          Voir le code sur GitHub →
        </p>
      </>
    }
  />
);

export const DeveloperCard = () => (
  <BaseCard
    icon={<BsBuilding />}
    title="Développeur back-end Java @Sinay"
    actionText="Voir toutes les expériences"
    hoverContent={
      <>
        <div>
          <h2>Développeur back-end Java</h2>
          <h3>Sinay, Caen 2022-2024</h3>
          <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
            Développement avec Java Spring Boot d'API REST, servant pour des SaaS. Dans un cadre Agile Scrum avec du CI/CD.
          </p>
        </div>
        <div>
          <h2>Développeur back-end Java</h2>
          <h3>Sinay, Caen 2022-2024</h3>
          <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
            Développement avec Java Spring Boot d'API REST, servant pour des SaaS. Dans un cadre Agile Scrum avec du CI/CD.
          </p>
        </div>
      </>
    }
  />
);

export const EducationCard = () => (
  <BaseCard
    variant='primary'
    icon={<FaGraduationCap />}
    title="Je suis diplômé du CESI"
    actionText="Toutes mes études"
    hoverContent={
      <>
        <h2>Formation</h2>
        <div>
          <h3>CESI - Master</h3>
          <p style={{ color: 'white' }}>2022 - 2024</p>
          <p style={{ color: 'white' }}>Master MAALSI, développement logiciel, management, gestion de projet</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - Licence</h3>
          <p style={{ color: 'white' }}>2021 - 2022</p>
          <p style={{ color: 'white' }}>Licence Dev applicatif, optimisation, développement logiciel</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - BTS</h3>
          <p style={{ color: 'white' }}>2018 - 2021</p>
          <p style={{ color: 'white' }}>BTS SIO, développement logiciel</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - BTS</h3>
          <p style={{ color: 'white' }}>2018 - 2021</p>
          <p style={{ color: 'white' }}>BTS SIO, développement logiciel</p>
        </div>
      </>
    }
  />
);

export const HobbiesCard = () => (
  <BaseCard
    icon={<FaRunning />}
    variant="primary"
    title="Hobbies"
    subtitle=""
    hoverContent={
      <>
        <h2 style={{ color: 'white' }}>Mes passions</h2>
        <ul style={{ color: 'white', marginTop: '15px', lineHeight: '1.6', textAlign: 'left' }}>
          <li>développement open source</li>
          <li>échanges interculturels</li>
          <li>nouvelles technologies</li>
          <li>escalade, badminton, spikeball</li>
        </ul>
      </>
    }
  />
);

export const InterestsCard = () => (
  <BaseCard
    variant="dark"
    icon={<MdInterests color="white" />}
    title="Intéressé par :"
    subtitle="React, l'IA, la blochaine et les chiots."
    hoverContent={
      <>
        <h2 style={{ color: 'white' }}>Centres d'intérêt</h2>
        <div style={{ marginTop: '15px', color: 'white' }}>
          <h3>React</h3>
          <p>Développement d'applications modernes</p>
          <h3 style={{ marginTop: '10px' }}>Intelligence Artificielle</h3>
          <p>Machine Learning et Deep Learning</p>
          <h3 style={{ marginTop: '10px' }}>Blockchain</h3>
          <p>Smart contracts et DApps</p>
          <h3 style={{ marginTop: '10px' }}>Chiots</h3>
          <p>Parce que qui n'aime pas les chiots ?</p>
        </div>
      </>
    }
  />
);

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
          <LanguageBar level={75}>Anglais</LanguageBar>
        </LanguageContainer>
        <LanguageContainer>
          <LanguageBar level={40}>Allemand</LanguageBar>
        </LanguageContainer>
      </>
    }
  />
);

export const SpotifyCard = () => (
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWl7MndYYxge"
    width="100%"
    height="360px"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    style={{ borderRadius: '12px' }}
  />
);

export const SocialNetworksCard = () => (
  <BaseCard
    title="Mes réseaux"
    defaultContent={
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <SocialLink href="mailto:martinjeanne.dev@gmail.com">
          <FaMailBulk size={24} />
          <span>Mon email</span>
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/MartinJeanne" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
          <span>Mon profil Linkedin</span>
        </SocialLink>
        <SocialLink href="https://github.com/MartinJeanne" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
          <span>Mon profil Github</span>
        </SocialLink>
        <SocialLink href="https://leetcode.com/Martin-jnne" target="_blank" rel="noopener noreferrer">
          <FaGlobe size={24} />
          <span>Profil LeetCode</span>
        </SocialLink>
      </div>
    }
  />
); 