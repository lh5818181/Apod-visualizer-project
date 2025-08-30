import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  color: #fff;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <BeatLoader color="#6a6ad4" />
      <p style={{ marginTop: '1rem' }}>Carregando dados da NASA...</p>
    </LoaderContainer>
  );
};