import { ReactNode, useState } from 'react';
import { Card } from '../../styles/StyledComponents';
import { motion } from 'framer-motion';

interface BaseCardProps {
  defaultContent?: ReactNode;
  hoverContent?: ReactNode;
  background?: string;
  color?: string;
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  actionText?: string;
  variant?: 'default' | 'primary' | 'dark';
  onAction?: () => void;
}

const getVariantStyles = (variant: string, customBackground?: string, customColor?: string) => {
  const variants = {
    default: { background: 'white', color: '#ff4757' },
    primary: { background: '#ff4757', color: 'white' },
    dark: { background: '#333', color: 'white' }
  };
  
  const style = variants[variant as keyof typeof variants] || variants.default;
  return {
    background: customBackground || style.background,
    color: customColor || style.color
  };
};

export const BaseCard = ({ 
  defaultContent, 
  hoverContent, 
  background, 
  color,
  icon,
  title,
  subtitle,
  actionText,
  variant = 'default',
  onAction
}: BaseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const variantStyles = getVariantStyles(variant, background, color);

  const renderDefaultContent = () => {
    if (defaultContent) return defaultContent;
    return (
      <>
        {icon && <div style={{ marginBottom: '20px' }}>{icon}</div>}
        {title && <h2 style={{ fontSize: '1.75rem', marginBottom: '15px', color: variantStyles.color }}>{title}</h2>}
        {subtitle && <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: variantStyles.color }}>{subtitle}</p>}
        {actionText && (
          <motion.p
            style={{ 
              marginTop: '20px', 
              color: variantStyles.color, 
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}
            whileHover={{ x: 5 }}
            onClick={onAction}
          >
            {actionText} →
          </motion.p>
        )}
      </>
    );
  };

  return (
    <Card
      style={{ 
        ...variantStyles,
        height: '360px',
        padding: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1.1rem'
      }}
    >
      <div
        onMouseEnter={() => hoverContent && setIsHovered(true)}
        onMouseLeave={() => hoverContent && setIsHovered(false)}
        style={{ 
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: hoverContent ? 'pointer' : 'default'
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
          {renderDefaultContent()}
        </motion.div>

        {hoverContent && (
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
        )}
      </div>
    </Card>
  );
};