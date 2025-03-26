import { FaJava } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import { SiTypescript } from "react-icons/si";

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
            <img src="react.svg" alt="React" style={{ filter: 'brightness(0) invert(1)' }} />
            <span>React</span>
          </div>
        </div>
      </>
    }
  />
);