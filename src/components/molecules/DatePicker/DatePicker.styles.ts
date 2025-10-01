import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DatePickerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
`;

export const DateLabel = styled(motion.label)`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;
