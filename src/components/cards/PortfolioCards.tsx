import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaJava, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { MdInterests } from 'react-icons/md';
import { BaseCard } from './BaseCard';
import { Button } from '../../styles/StyledComponents';

export const IntroCard = () => (
  <BaseCard
    defaultContent={
      <>
        <h2>Mon portfolio</h2>
        <p><FaMapMarkerAlt /> Caen, FR</p>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          A propos de moi →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2>Qui suis-je ?</h2>
        <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
          This is a longer description of me, of my backstory, my backyard, my backfire, my backend, my frontend and my friends.
        </p>
        <p style={{ marginTop: '15px', color: '#ff4757' }}>
          J'ai besoin d'un visa de travail
        </p>
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#ff4757', fontSize: '20px' }}>Expérience Pro</h3>
          <p style={{ marginTop: '10px' }}>
            2 années en tant que développeur et 3 années d'autres expériences professionnelles
          </p>
        </div>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
          Je suis en recherche active
        </p>
      </>
    }
  />
);

export const JavaCard = () => (
  <BaseCard
    background="#ff4757"
    color="white"
    defaultContent={
      <>
        <FaJava size={40} color="white" />
        <h2 style={{ color: 'white', marginTop: '20px' }}>Je code avec Java</h2>
        <motion.p
          style={{ marginTop: '20px', color: 'white', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          Voir plus →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2 style={{ color: 'white' }}>Compétences Java</h2>
        <ul style={{ color: 'white', marginTop: '15px', lineHeight: '1.6' }}>
          <li>Spring Boot</li>
          <li>JPA / Hibernate</li>
          <li>REST APIs</li>
          <li>Microservices</li>
          <li>Tests unitaires (JUnit)</li>
        </ul>
        <p style={{ color: 'white', marginTop: '15px' }}>
          3 ans d'expérience en développement Java
        </p>
      </>
    }
  />
);

export const RemoteWorkCard = () => (
  <BaseCard
    defaultContent={
      <>
        <AiOutlineHome size={40} color="#ff4757" />
        <h2>J'aimerais travailler en remote</h2>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          Découvrez mon job de rêve →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2>Pourquoi le remote ?</h2>
        <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
          <li>Meilleure productivité</li>
          <li>Équilibre vie pro/perso</li>
          <li>Flexibilité horaire</li>
          <li>Collaboration internationale</li>
        </ul>
        <p style={{ marginTop: '15px', color: '#ff4757' }}>
          Expérience en travail à distance pendant 2 ans
        </p>
      </>
    }
  />
);

export const ProjectCard = () => (
  <BaseCard
    defaultContent={
      <>
        <img src="/tools.jpg" alt="Outils" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
        <h2 style={{ marginTop: '20px' }}>Mon projet coup de coeur ❤️ : Discord Bot</h2>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          Voir 1 projet →
        </motion.p>
      </>
    }
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
    defaultContent={
      <>
        <BsBuilding size={40} color="#ff4757" />
        <h2>Développeur back-end Java @Sinay</h2>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          Voir toutes les expériences →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2>Expérience @Sinay</h2>
        <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
          Développement et maintenance d'applications Java/Spring Boot.
          Mise en place de microservices et d'APIs REST.
        </p>
        <ul style={{ marginTop: '15px' }}>
          <li>Architecture microservices</li>
          <li>CI/CD avec Jenkins</li>
          <li>Monitoring avec ELK</li>
        </ul>
      </>
    }
  />
);

export const EducationCard = () => (
  <BaseCard
    defaultContent={
      <>
        <FaGraduationCap size={40} color="#ff4757" />
        <h2>Je suis diplômé de ISEN</h2>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          Toutes mes études →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2>Formation</h2>
        <div style={{ marginTop: '15px' }}>
          <h3 style={{ color: '#ff4757' }}>ISEN - Ingénieur</h3>
          <p>2018 - 2021</p>
          <p>Spécialisation en développement logiciel</p>
        </div>
        <div style={{ marginTop: '15px' }}>
          <h3 style={{ color: '#ff4757' }}>Certifications</h3>
          <ul>
            <li>Java SE 11 Developer</li>
            <li>Spring Professional</li>
          </ul>
        </div>
      </>
    }
  />
);

export const HobbiesCard = () => (
  <BaseCard
    background="#ff4757"
    color="white"
    defaultContent={
      <>
        <h2 style={{ color: 'white' }}>Hobbies</h2>
        <p style={{ color: 'white', marginTop: '10px' }}>Vous n'avez pas encore ajouté de hobbies !</p>
        <Button style={{ marginTop: '20px', background: 'transparent', border: '1px solid white', color: 'white' }}>
          Ajouter un hobby
        </Button>
      </>
    }
    hoverContent={
      <>
        <h2 style={{ color: 'white' }}>Mes passions</h2>
        <ul style={{ color: 'white', marginTop: '15px', lineHeight: '1.6' }}>
          <li>Développement open source</li>
          <li>Nouvelles technologies</li>
          <li>Photographie</li>
          <li>Voyages</li>
        </ul>
        <Button style={{ marginTop: '20px', background: 'transparent', border: '1px solid white', color: 'white' }}>
          Ajouter un hobby
        </Button>
      </>
    }
  />
);

export const InterestsCard = () => (
  <BaseCard
    background="#333"
    color="white"
    defaultContent={
      <>
        <MdInterests size={40} color="white" />
        <h2 style={{ color: 'white', marginTop: '20px' }}>Intéressé par :</h2>
        <p style={{ color: 'white', marginTop: '10px' }}>React, l'IA, la blochaine et les chiots.</p>
      </>
    }
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
    defaultContent={
      <>
        <FaLanguage size={40} color="#ff4757" />
        <h2>Je parle</h2>
        <p style={{ marginTop: '10px', fontSize: '24px', color: '#ff4757' }}>
          Français<br />
          Anglais<br />
          Allemand
        </p>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
          Niveau de langues →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2>Niveaux de langue</h2>
        <div style={{ marginTop: '15px' }}>
          <h3 style={{ color: '#ff4757' }}>Français</h3>
          <p>Langue maternelle (C2)</p>
          <h3 style={{ marginTop: '10px', color: '#ff4757' }}>Anglais</h3>
          <p>Courant (C1)</p>
          <h3 style={{ marginTop: '10px', color: '#ff4757' }}>Allemand</h3>
          <p>Intermédiaire (B1)</p>
        </div>
      </>
    }
  />
); 