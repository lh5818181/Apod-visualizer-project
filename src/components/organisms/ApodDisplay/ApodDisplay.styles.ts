import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ApodDisplayContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CopyrightText = styled(motion.p)`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;

export const ErrorMessage = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  margin: 2rem 0;
`;
