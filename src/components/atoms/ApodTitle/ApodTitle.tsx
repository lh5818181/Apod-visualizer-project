import React from 'react';
import { StyledApodTitle } from './ApodTitle.styles';

interface ApodTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const ApodTitle: React.FC<ApodTitleProps> = ({ children, className }) => {
  return (
    <StyledApodTitle
      className={className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </StyledApodTitle>
  );
};
