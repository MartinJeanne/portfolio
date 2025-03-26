import { Carousel } from 'antd';
import { Card } from "../../styles/StyledComponents";

const titleStyle: React.CSSProperties = {
    color: 'white',
    marginTop: '10px',
    marginRight: '20px',
    width: '100%',
    fontSize: '2.9rem',
    textAlign: 'right',
    textShadow:
        '-1px -1px 0 #ff4757, ' +
        '1px -1px 0 #ff4757, ' +
        '-1px 1px 0 #ff4757, ' +
        '1px 1px 0 #ff4757',
};

const hobbieNameStyle: React.CSSProperties = {
    color: 'white',
    marginBottom: '30px',
    textShadow:
        '-1px -1px 0 #ff4757, ' +
        '1px -1px 0 #ff4757, ' +
        '-1px 1px 0 #ff4757, ' +
        '1px 1px 0 #ff4757',
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
        <Card>
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
                            <h2 style={titleStyle}>Hobbies</h2>
                            <h2 style={hobbieNameStyle}>{gif.alt}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </Card>
    );
};