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
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ background, color }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ height: '100%' }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ display: isHovered ? 'none' : 'block' }}
        >
          {defaultContent}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            display: isHovered ? 'block' : 'none',
            height: '100%'
          }}
        >
          {hoverContent}
        </motion.div>
      </div>
    </Card>
  );
};