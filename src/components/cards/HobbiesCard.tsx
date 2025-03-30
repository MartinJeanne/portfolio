import { Carousel } from 'antd';
import { Card } from "../../styles/StyledComponents";
import codding from '@assets/codding.gif'
import reading from '@assets/reading.gif'
import climbing from '@assets/climbing.gif'
import badminton from '@assets/badminton.gif'
import spikeball from '@assets/spikeball.gif'


const titleStyle: React.CSSProperties = {
  width: '100%',
  height: '55px',
  color: 'white',
  fontSize: '2rem',
  margin: '0',
  paddingLeft: '15px',
  textAlign: 'left',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
  borderBottom: '1px solid white'
};

const hobbieNameStyle: React.CSSProperties = {
  color: 'white',
  textShadow:
    '-1px -1px 0 rgb(0, 0, 0), ' +
    '1px -1px 0 rgb(0, 0, 0), ' +
    '-1px 1px 0 rgb(0, 0, 0), ' +
    '1px 1px 0 rgb(0, 0, 0)',
};

export const HobbiesCard = () => {
  const gifs = [
    { src: codding, alt: "Coder" },
    { src: reading, alt: "Lire" },
    { src: climbing, alt: "Escalade" },
    { src: badminton, alt: "Badminton" },
    { src: spikeball, alt: "Spikeball" }
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
              width: '100%',
              height: '305px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end'
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