import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaJava, FaGraduationCap, FaLanguage, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { MdInterests } from 'react-icons/md';
import { BaseCard } from './BaseCard';
import { Button } from '../../styles/StyledComponents';
import styled from '@emotion/styled';

interface LanguageBarProps {
  level: number;
}

const LanguageBar = styled.div<LanguageBarProps>`
  width: ${(props: LanguageBarProps) => props.level}%;
  height: 40px;
  background: #ff4757;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const LanguageContainer = styled.div`
  margin: 15px 0;
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
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
    defaultContent={
      <>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Mon portfolio</h2>
        <p style={{ fontSize: '1.1rem' }}><FaMapMarkerAlt /> Caen, FR</p>
        <motion.p
          style={{ marginTop: '20px', color: '#ff4757', cursor: 'pointer', fontSize: '1.1rem' }}
          whileHover={{ x: 5 }}
        >
          A propos de moi →
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Qui suis-je ?</h2>
        <p style={{ marginTop: '15px', lineHeight: '1.6', fontSize: '1.1rem' }}>
          This is a longer description of me, of my backstory, my backyard, my backfire, my backend, my frontend and my friends.
        </p>
        <p style={{ marginTop: '15px', color: '#ff4757', fontSize: '1.1rem' }}>
          J'ai besoin d'un visa de travail
        </p>
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#ff4757', fontSize: '1.4rem' }}>Expérience Pro</h3>
          <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
            2 années en tant que développeur et 3 années d'autres expériences professionnelles
          </p>
        </div>
        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '1.1rem' }}>
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
        <p style={{ marginTop: '8px', fontSize: '22px', color: '#ff4757' }}>
          Français<br />
          Anglais<br />
          Allemand
        </p>
        <motion.p
          style={{ marginTop: '15px', color: '#ff4757', cursor: 'pointer' }}
          whileHover={{ x: 5 }}
        >
        </motion.p>
      </>
    }
    hoverContent={
      <>
        <h2 style={{ color: '#ff4757', marginBottom: '20px' }}>Languages</h2>
        <div style={{ marginTop: '10px' }}>
          <LanguageContainer>
            <LanguageBar level={100}>Français</LanguageBar>
          </LanguageContainer>

          <LanguageContainer>
            <LanguageBar level={75}>Anglais</LanguageBar>
          </LanguageContainer>

          <LanguageContainer>
            <LanguageBar level={40}>Allemand</LanguageBar>
          </LanguageContainer>
        </div>
      </>
    }
  />
);

export const SpotifyCard = () => (
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWl7MndYYxge"
    width="100%"
    height="100%"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    style={{ borderRadius: '12px' }}
  />
);

export const SocialNetworksCard = () => (
  <BaseCard
    defaultContent={
      <>
        <h2>Mes réseaux</h2>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <SocialLink href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
            <span>Mon profil Linkedin</span>
          </SocialLink>
          <SocialLink href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
            <span>Mon profil Github</span>
          </SocialLink>
          <SocialLink href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGlobe size={24} />
            <span>LeetCode</span>
          </SocialLink>
        </div>
      </>
    }
    hoverContent={
      <>
        <h2>Connect with me</h2>
        <div style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '15px' }}>Let's connect and collaborate on exciting projects!</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <SocialLink href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
              <div>
                <div>LinkedIn</div>
                <small style={{ color: '#666' }}>Professional Network</small>
              </div>
            </SocialLink>
            <SocialLink href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
              <div>
                <div>GitHub</div>
                <small style={{ color: '#666' }}>Code Repository</small>
              </div>
            </SocialLink>
            <SocialLink href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGlobe size={24} />
              <div>
                <div>LeetCode</div>
                <small style={{ color: '#666' }}>Coding Skills</small>
              </div>
            </SocialLink>
          </div>
        </div>
      </>
    }
  />
); 