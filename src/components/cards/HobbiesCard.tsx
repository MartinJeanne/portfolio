import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { Card } from "../../styles/StyledComponents";
import { useTranslation } from 'react-i18next';

const titleStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  height: '55px',
  color: 'white',
  fontSize: '2rem',
  margin: '0',
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

interface HobbiesGifs {
  link: string;
  label: string;
}

export const HobbiesCard = () => {
  const { t } = useTranslation();
  const rawGifs = t('hobbiesCard.gifs', { returnObjects: true }) as HobbiesGifs[];
  const [gifs, setGifs] = useState<HobbiesGifs[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        rawGifs.map(async (gif) => {
          return { label: gif.label, link: (await import(`@assets/${gif.link}.gif`)).default };
        })
      );
      setGifs(images);
    };

    loadImages();
  }, [rawGifs]);

  return (
    <Card style={{ backgroundColor: '#ff4757' }}>
      <h2 style={titleStyle}>{t('hobbiesCard.title')}</h2>
      <Carousel arrows infinite={true} autoplay={true}>
        {gifs.map((gif, index) => (
          <div key={index}>
            <div style={{
              backgroundImage: `url(${gif.link})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '305px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
            >
              <h2 style={hobbieNameStyle}>{gif.label}</h2>
            </div>
          </div>
        )
        )}
      </Carousel>
    </Card>
  );
};
