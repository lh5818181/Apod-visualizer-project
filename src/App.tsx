import React, { useCallback, useEffect, useState } from 'react';
import { HomePageTemplate } from './components/templates/HomePageTemplate/HomePageTemplate';
import { GlobalStyle } from './styles/global';
import { getAstronomyPicture } from './services/nasaService';
import { searchMusic } from './services/spotifyService';
import type { ApodData } from './types/nasaTypes';
import debounce from 'lodash.debounce';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

const getKeywords = (title: string): string => {
  const words = title.split(' ');
  const filteredWords = words.filter(word => 
    !['a', 'an', 'the', 'in', 'of', 'and', 'for', 'with', 'to', 'from', 'by'].includes(word.toLowerCase())
  );
  return filteredWords.slice(0, 3).join(' '); // Limita a 3 palavras-chave
};

function App() {
  // Estado para controle de data
  const dateObj = new Date();
  const localDate = new Date(dateObj.getTime() - (dateObj.getTimezoneOffset() * 60000));
  const today = localDate.toISOString().split('T')[0];
  
  // Estados principais
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [apodLoading, setApodLoading] = useState(true);
  const [date, setDate] = useState<string>(today);
  const [musicTracks, setMusicTracks] = useState<Track[]>([]);
  const [musicLoading, setMusicLoading] = useState(false);

  // Função para buscar dados do APOD
  const fetchApodData = useCallback(async (selectedDate: string) => {
    setApodLoading(true);
    setMusicTracks([]); // Limpa a música ao mudar a imagem
    try {
      const apod = await getAstronomyPicture(selectedDate);
      setApodData(apod);
    } catch (error) {
      console.error('Falha ao carregar APOD', error);
      setApodData(null);
    } finally {
      setApodLoading(false);
    }
  }, []);

  // Função para buscar música com debounce
  const fetchMusic = useCallback(
    debounce(async (query: string) => {
      if (!query) return;

      setMusicLoading(true);
      try {
        const tracks = await searchMusic(query);
        setMusicTracks(tracks || []);
      } catch (error) {
        console.error('Falha ao buscar músicas', error);
        setMusicTracks([]);
      } finally {
        setMusicLoading(false);
      }
    }, 800), // Aumentado o debounce para 800ms
    []
  );

  // Effect para buscar APOD quando a data muda
  useEffect(() => {
    fetchApodData(date);
  }, [date, fetchApodData]);

  // Effect para buscar música quando o APOD carrega
  useEffect(() => {
    if (apodData && apodData.title) {
      const keywords = getKeywords(apodData.title);
      fetchMusic(keywords);
    }
  }, [apodData, fetchMusic]);

  // Handler para mudança de data
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    if (newDate) {
      setDate(newDate);
    }
  };

  // Handler para adicionar aos favoritos (funcionalidade futura)
  const handleFavoriteClick = () => {
    if (apodData) {
      // Aqui seria implementada a lógica para salvar nos favoritos
      // Por enquanto, apenas mostra um alerta
      alert(`"${apodData.title}" foi adicionado aos favoritos! (Funcionalidade em desenvolvimento)`);
    }
  };

  return (
    <>
      <GlobalStyle />
      <HomePageTemplate
        apodData={apodData}
        apodLoading={apodLoading}
        musicTracks={musicTracks}
        musicLoading={musicLoading}
        date={date}
        onDateChange={handleDateChange}
        maxDate={today}
        onFavoriteClick={handleFavoriteClick}
      />
    </>
  );
}

export default App;
