import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledApodImage = styled(motion.img)`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-height: 50vh;
    border-radius: 12px;
  }
`;
