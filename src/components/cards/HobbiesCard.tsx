import { Carousel } from 'antd';
import { Card } from "../../styles/StyledComponents";

const titleStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '2rem',
  margin: '0 0 0 20px',
  width: '100%',
  textAlign: 'left',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
};

const hobbieNameStyle: React.CSSProperties = {
  color: 'white',
  marginTop: '15px',
  textShadow:
    '-1px -1px 0 rgb(0, 0, 0), ' +
    '1px -1px 0 rgb(0, 0, 0), ' +
    '-1px 1px 0 rgb(0, 0, 0), ' +
    '1px 1px 0 rgb(0, 0, 0)',
};

export const HobbiesCard = () => {
  const gifs = [
    { src: "codding.gif", alt: "Code" },
    { src: "climbing.gif", alt: "Escalade" },
    { src: "reading.gif", alt: "Lire" },
    { src: "badminton.gif", alt: "Badminton" },
    { src: "spikeball.gif", alt: "Spikeball" }
  ];

  return (
    <Card style={{ backgroundColor: '#ff4757' }}>
      <h2 style={titleStyle}>Hobbies</h2>
      <Carousel arrows infinite={true} autoplay={true}>
        {gifs.map((gif, index) => (
          <div key={index}>
            <div style={{
              backgroundImage: `url(${gif.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '360px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            >
              <h2 style={hobbieNameStyle}>{gif.alt}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </Card>
  );
};