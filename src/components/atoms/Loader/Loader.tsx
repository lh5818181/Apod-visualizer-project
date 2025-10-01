import React from 'react';
import { LoaderContainer, SpinnerContainer, Spinner, LoaderMessage, Dots } from './Loader.styles';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  className?: string;
}

const spinVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const dotsVariants = {
  animate: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  message = 'Carregando',
  className 
}) => {
  return (
    <LoaderContainer
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SpinnerContainer size={size}>
        <Spinner
          size={size}
          variants={spinVariants}
          animate="animate"
        />
      </SpinnerContainer>
      
      {message && (
        <LoaderMessage
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {message}
          <Dots variants={dotsVariants} animate="animate">
            ...
          </Dots>
        </LoaderMessage>
      )}
    </LoaderContainer>
  );
};
