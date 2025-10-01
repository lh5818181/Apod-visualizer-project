import React from 'react';
import { StyledVideoWrapper } from './ApodVideoWrapper.styles';

interface ApodVideoWrapperProps {
  src: string;
  title: string;
  className?: string;
}

export const ApodVideoWrapper: React.FC<ApodVideoWrapperProps> = ({ 
  src, 
  title, 
  className 
}) => {
  return (
    <StyledVideoWrapper
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <iframe
        src={src}
        title={title}
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      />
    </StyledVideoWrapper>
  );
};
