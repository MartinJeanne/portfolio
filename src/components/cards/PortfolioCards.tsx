import { AiOutlineHome } from 'react-icons/ai';
import { MdInterests } from 'react-icons/md';
import { BaseCard } from './BaseCard';

export const WhatImLookingForCard = () => (
  <BaseCard
    icon={<AiOutlineHome />}
    title="Mon job de rêve"
    actionText="Découvrez le"
    hoverContent={
      <>
        <h2>Un poste de développeur avec</h2>
        <ul style={{ marginTop: '15px', lineHeight: '1.6', textAlign: 'left', color: 'rgb(102, 102, 102)' }}>
          <li>du challenge</li>
          <li>une collaboration internationale</li>
          <li>un contrat CDI/CDD/VIE</li>
          <li>un équilibre vie pro/perso</li>
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
