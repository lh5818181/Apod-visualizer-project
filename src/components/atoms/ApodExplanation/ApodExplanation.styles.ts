import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledApodExplanation = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.9);
  
  /* Glassmorphism effect */
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  /* Subtle gradient overlay */
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-radius: 16px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
    line-height: 1.6;
    text-align: left;
  }
`;
