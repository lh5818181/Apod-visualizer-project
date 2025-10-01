import React from 'react';
import { StyledFavoritesButton } from './FavoritesButton.styles';

interface FavoritesButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const FavoritesButton: React.FC<FavoritesButtonProps> = ({ 
  onClick, 
  children, 
  className, 
  disabled = false 
}) => {
  return (
    <StyledFavoritesButton
      onClick={onClick}
      className={className}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {children}
    </StyledFavoritesButton>
  );
};
