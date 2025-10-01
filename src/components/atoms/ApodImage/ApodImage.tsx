import React from 'react';
import { StyledApodImage } from './ApodImage.styles';

interface ApodImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ApodImage: React.FC<ApodImageProps> = ({ src, alt, className }) => {
  return (
    <StyledApodImage
      src={src}
      alt={alt}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    />
  );
};
