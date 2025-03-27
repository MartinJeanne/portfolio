import { FaQuestion, FaGraduationCap } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { MdInterests } from 'react-icons/md';
import { BaseCard } from './BaseCard';


export const IntroCard = () => (
  <BaseCard
    variant="primary"
    icon={<FaQuestion />}
    title="Qui suis-je ?"
    subtitle="Caen, FR"
    actionText="À propos de moi"
    hoverContent={
      <>
        <h3 style={{ color: '#ff4757' }}>À propos de moi</h3>
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
