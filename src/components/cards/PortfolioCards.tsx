import { FaQuestion, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { MdInterests } from 'react-icons/md';
import { BaseCard } from './BaseCard';


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
          <h3>Bot discord DJ <FaExternalLinkAlt size={17} /></h3>
          <p>
            Un bot discord qui peut de jouer de la musique dans les salons vocaux
          </p>
          <p style={{ color: '#ff4757' }}>TypeScript, Java, Spring Boot, Docker</p>
        </div>

        <div style={{ marginTop: '25px' }}>
          <h3>Who's bigger <FaExternalLinkAlt size={17} /></h3>
          <p>
            Une application web où le but est trouver la plus grande ville parmi deux villes de Normandie
          </p>
          <p style={{ color: '#ff4757' }}>TypeScript, React, Java, Spring Boot, Docker</p>
        </div>

        <div style={{ marginTop: '25px' }}>
          <h3>Live chat <FaExternalLinkAlt size={17} /></h3>
          <p>
            Une application web de messagerie instantanée
          </p>
          <p style={{ color: '#ff4757' }}>JavaScript ,Vue.js, Firebase, GCP</p>
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
    justifyContent="center"
    hoverContent={
      <>
        <div>
          <h3>CESI - Master, 2022-2024</h3>
          <p style={{ color: 'white' }}>Master MAALSI, développement logiciel, management, gestion de projet</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - Licence, 2021-2022</h3>
          <p style={{ color: 'white' }}>Licence Dev applicatif, optimisation, développement logiciel</p>
        </div>
        <div style={{ marginTop: '25px' }}>
          <h3>CaenSup - BTS, 2018-2021</h3>
          <p style={{ color: 'white' }}>BTS SIO, développement logiciel</p>
        </div>
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




