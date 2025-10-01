import React from 'react';
import { StyledApodExplanation } from './ApodExplanation.styles';

interface ApodExplanationProps {
  children: React.ReactNode;
  className?: string;
}

export const ApodExplanation: React.FC<ApodExplanationProps> = ({ children, className }) => {
  return (
    <StyledApodExplanation
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {children}
    </StyledApodExplanation>
  );
};
