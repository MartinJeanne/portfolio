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
  justifyContent?: 'center' | 'flex-start';
  variant?: 'default' | 'primary' | 'dark';
  onAction?: () => void;
}

const getVariantStyles = (variant: string) => {
  const variants = {
    default: { background: 'white', color: '#ff4757' },
    primary: { background: '#ff4757', color: 'white' },
    dark: { background: '#333', color: 'white' }
  };

  const style = variants[variant as keyof typeof variants] || variants.default;
  return {
    background: style.background,
    color: style.color
  };
};

export const BaseCard = ({
  defaultContent,
  hoverContent,
  icon,
  title,
  subtitle,
  actionText,
  justifyContent = 'center',
  variant = 'default',
  onAction
}: BaseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const variantStyles = getVariantStyles(variant);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...variantStyles,
        height: '360px',
        padding: '0',
        textAlign: 'center',
        fontSize: '1.1rem',
        overflowY: 'auto',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isHovered && hoverContent ? 'hover' : 'default'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: isHovered && hoverContent ? justifyContent : 'center',
            height: '100%',
            width: '100%',
            cursor: hoverContent ? 'pointer' : 'default'
          }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};