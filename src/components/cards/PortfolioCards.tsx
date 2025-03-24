import { FaQuestion, FaJava, FaGraduationCap, FaLanguage, FaRunning, FaLinkedin, FaGithub, FaGlobe, FaMailBulk, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { MdInterests } from 'react-icons/md';
import { SiTypescript } from 'react-icons/si';
import { BaseCard } from './BaseCard';
import styled from '@emotion/styled';
import { useState } from 'react';

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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  border-radius: 8px;
  display: block;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
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
          <li>une collaboration internationale</li>
          <li>un contrat CDI/CDD/VIE</li>
          <li>un équilibre vie pro/perso</li>
        </ul>
      </>
    }
  />
);

export const ProjectCard = () => (
  <BaseCard
    title="Mes projets coups de coeur ❤️"
    actionText="Voir les projets"
    justifyContent="flex-start"
    hoverContent={
      <>
        <div>
          <h3>Bot discord DJ</h3>
          <p style={{ marginTop: '10px' }}>
            Un bot discord qui peut de jouer de la musique dans les salons vocaux
          </p>
          <p style={{ marginTop: '10px', color: '#ff4757' }}>TypeScript, Java, Spring Boot, Docker</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>Who's bigger</h3>
          <p style={{ marginTop: '10px' }}>
            Une application web où le but est trouver la plus grande ville parmi deux villes de Normandie
          </p>
          <p style={{ marginTop: '10px', color: '#ff4757' }}>TypeScript, React, Java, Spring Boot, Docker</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>Live chat</h3>
          <p style={{ marginTop: '10px' }}>
            Une application web de messagerie instantanée
          </p>
          <p style={{ marginTop: '10px', color: '#ff4757' }}>JavaScript ,Vue.js, Firebase, GCP</p>
        </div>
      </>
    }
  />
);

export const DeveloperCard = () => (
  <BaseCard
    icon={<BsBuilding />}
    title="Développeur back-end Java @Sinay"
    actionText="Voir toutes les expériences"
    justifyContent="flex-start"
    hoverContent={
      <>
        <div>
          <h3>Développeur back-end Java</h3>
          <h4>Sinay, Caen 2022-2024</h4>
          <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
            Développement avec Java Spring Boot d'API REST, servant pour des SaaS. Dans un cadre Agile Scrum avec du CI/CD.
          </p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>Développeur JavaScript</h3>
          <h4>Léonard Solutions, Caen 2021-2022</h4>
          <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
            Développement en JavaScript, création d'un SaaS
            permettant de modéliser des batiments en 3D. J'ai
            beaucoup interagi avec les clients et appris à communiquer à différents niveaux d'abstraction.

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
    justifyContent="flex-start"
    hoverContent={
      <>
        <div>
          <h3>CESI - Master</h3>
          <h4>2022 - 2024</h4>
          <p style={{ color: 'white' }}>Master MAALSI, développement logiciel, management, gestion de projet</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - Licence</h3>
          <h4 >2021 - 2022</h4>
          <p style={{ color: 'white' }}>Licence Dev applicatif, optimisation, développement logiciel</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - BTS</h3>
          <h4>2018 - 2021</h4>
          <p style={{ color: 'white' }}>BTS SIO, développement logiciel</p>
        </div>
      </>
    }
  />
);

export const HobbiesCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gifs = [
    { src: "/src/assets/climbing.gif", alt: "Escalade" },
    { src: "/src/assets/badminton.gif", alt: "Badminton" },
    { src: "/src/assets/spikeball.gif", alt: "Spikeball" }
  ];

  const nextGif = () => {
    setCurrentIndex((prev) => (prev + 1) % gifs.length);
  };

  const prevGif = () => {
    setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
  };

  return (
    <BaseCard
      icon={<FaRunning />}
      variant="primary"
      title="Hobbies"
      subtitle=""
      hoverContent={
        <>
          <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h2 style={{ color: 'white', marginTop: '20px' }}>{gifs[currentIndex].alt}</h2>
            <CarouselContainer>
              <CarouselButton className="prev" onClick={prevGif}>
                <FaChevronLeft />
              </CarouselButton>
              <CarouselButton className="next" onClick={nextGif}>
                <FaChevronRight />
              </CarouselButton>
              <CarouselImage
                src={gifs[currentIndex].src}
                alt={gifs[currentIndex].alt}
              />
            </CarouselContainer>
          </div>
        </>
      }
    />
  );
};

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