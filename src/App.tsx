import { Apod } from './components/Apod/Apod.tsx';
import { GlobalStyle, AppContainer } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer className="App">
        <Apod />
      </AppContainer>
    </>
  );
}

export default App;