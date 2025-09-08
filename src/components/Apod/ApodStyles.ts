import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ApodContainer = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
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
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const CopyrightText = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

//CONTAINER DO SPOTIFY

export const MusicContainer = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

export const MusicTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TrackList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TrackItem = styled(motion.li)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const AlbumArt = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 1rem;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TrackName = styled.p`
  margin: 0;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ArtistName = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const FavoritesButton = styled.button`
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #5555c4;
  }
`;