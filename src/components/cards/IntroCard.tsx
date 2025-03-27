import { FaQuestion } from "react-icons/fa";
import { BaseCard } from "./BaseCard";

export const IntroCard = () => (
  <BaseCard
    icon={<FaQuestion />}
    title="Qui suis-je ?"
    subtitle="Caen, FR"
    actionText="À propos de moi"
    hoverContent={
      <>
        <h3>À propos de moi</h3>
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