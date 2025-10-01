import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;

export const SpinnerContainer = styled.div<{ size: string }>`
  position: relative;
  width: ${props => 
    props.size === 'small' ? '32px' : 
    props.size === 'large' ? '64px' : '48px'};
  height: ${props => 
    props.size === 'small' ? '32px' : 
    props.size === 'large' ? '64px' : '48px'};
`;

export const Spinner = styled(motion.div)<{ size: string }>`
  width: 100%;
  height: 100%;
  border: ${props => 
    props.size === 'small' ? '2px' : 
    props.size === 'large' ? '4px' : '3px'} solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: var(--accent-color);
  border-right-color: var(--accent-color);
`;

export const LoaderMessage = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

export const Dots = styled(motion.span)`
  display: inline-block;
`;
