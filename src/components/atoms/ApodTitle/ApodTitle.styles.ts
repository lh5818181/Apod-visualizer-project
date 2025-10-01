import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledApodTitle = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  text-align: center;
  line-height: 1.2;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
  }
`;
