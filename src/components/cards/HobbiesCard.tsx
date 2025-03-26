import { useState } from "react";
import { Carousel } from 'antd';
import { Card } from "../../styles/StyledComponents";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const HobbiesCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const gifs = [
        { src: "climbing.gif", alt: "Escalade" },
        { src: "badminton.gif", alt: "Badminton" },
        { src: "spikeball.gif", alt: "Spikeball" }
    ];

    return (

        <Card>
            <Carousel arrows infinite={false}>
                <div>
                    <img src={gifs[0].src} alt={gifs[0].alt} />
                </div>
                <div>
                    <img src={gifs[1].src} alt={gifs[0].alt} />
                </div>
                <div>
                    <img src={gifs[2].src} alt={gifs[0].alt} />
                </div>
                <div>
                    <img src={gifs[0].src} alt={gifs[0].alt} />
                </div>
            </Carousel>
        </Card>
    );
};