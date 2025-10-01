import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledVideoWrapper = styled(motion.div)`
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    
    iframe {
      border-radius: 12px;
    }
  }
`;
