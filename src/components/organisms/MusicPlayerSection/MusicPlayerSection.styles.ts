import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MusicContainer = styled(motion.div)`
  margin-top: 3rem;
  text-align: left;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 2rem;
  }
`;

export const MusicTitle = styled(motion.h3)`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '🎵';
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const TrackList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  h4 {
    margin: 0 0 0.5rem 0;
    color: rgba(255, 255, 255, 0.8);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
