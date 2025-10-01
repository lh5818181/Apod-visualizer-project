import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTrackItem = styled(motion.li)`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  padding: 1.25rem;
  border-radius: 12px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const AlbumArt = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  ${StyledTrackItem}:hover & {
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0; /* Permite que o texto seja truncado */
`;

export const TrackName = styled.p`
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ArtistName = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PlayIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--accent-color);

  ${StyledTrackItem}:hover & {
    opacity: 1;
  }

  &::before {
    content: '▶';
    font-size: 16px;
  }
`;
