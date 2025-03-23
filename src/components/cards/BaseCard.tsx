import { ReactNode, useState } from 'react';
import { Card } from '../../styles/StyledComponents';
import { motion } from 'framer-motion';

interface BaseCardProps {
  defaultContent: ReactNode;
  hoverContent: ReactNode;
  background?: string;
  color?: string;
}

export const BaseCard = ({ defaultContent, hoverContent, background = 'white', color = '#ff4757' }: BaseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      style={{ 
        background, 
        color,
        height: '360px',
        padding: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ 
            display: isHovered ? 'none' : 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            overflowY: 'auto',
            paddingRight: '10px'
          }}
        >
          {defaultContent}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            display: isHovered ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            overflowY: 'auto',
            paddingRight: '10px'
          }}
        >
          {hoverContent}
        </motion.div>
      </div>
    </Card>
  );
};