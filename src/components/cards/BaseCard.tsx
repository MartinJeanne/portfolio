import { ReactNode, useState } from 'react';
import { Card } from '../../styles/StyledComponents';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';

const IconContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg, img {
    width: 50px;
    height: 50px;
  }
`;

interface BaseCardProps {
  defaultContent?: ReactNode;
  hoverContent?: ReactNode;
  background?: string;
  color?: string;
  icon?: ReactNode;
  title: string;
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

  const renderContent = () => {
    if (isHovered && hoverContent) return hoverContent;
    if (defaultContent) return defaultContent;
    return (
      <>
        {icon && <IconContainer>{icon}</IconContainer>}
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
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1.1rem'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          key={isHovered && hoverContent ? 'hover' : 'default'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            overflowY: 'auto',
            paddingRight: '10px',
            cursor: hoverContent ? 'pointer' : 'default'
          }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};