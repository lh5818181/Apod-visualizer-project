import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ApodContainer = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const ApodImage = styled(motion.img)`
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 20px var(--border-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ApodTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

export const ApodExplanation = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 12px;

  // Efeito Glassmorphism
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const DatePickerContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  input[type="date"] {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }

    &:hover {
      border-color: var(--accent-color);
    }
  }
`;

export const CopyrightText = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
`;