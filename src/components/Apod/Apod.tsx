import { useCallback, useEffect, useState } from 'react';
import { getAstronomyPicture } from '../../services/nasaService';
import { searchMusic } from '../../services/spotifyService';
// Importações de estilos e outros componentes...
import {
  ApodContainer,
  ApodImage,
  ApodTitle,
  ApodExplanation,
  DatePickerContainer,
  CopyrightText,
  MusicContainer,
  MusicTitle,
  TrackList,
  TrackItem,
  AlbumArt,
  TrackInfo,
  TrackName,
  ArtistName,
  FavoritesButton,
  ApodVideoWrapper,
} from './ApodStyles';
import { Loader } from '../Loader/Loader';
import type { ApodData } from '../../types/nasaTypes';
import debounce from 'lodash.debounce';
import { motion } from 'framer-motion';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

const getKeywords = (title: string): string => {
  const words = title.split(' ');
  // Filtra palavras menos relevantes e seleciona as mais importantes
  const filteredWords = words.filter(word => !['a', 'an', 'the', 'in', 'of', 'and', 'for', 'with'].includes(word.toLowerCase()));
  return filteredWords.join(' ');
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, x: -20 },
  visible: { opacity: 1, x: 0 },
};


export const Apod = () => {
  // O estado 'date' deve ser inicializado com a data atual para garantir que não seja 'null'
  // na primeira renderização, resolvendo assim a dependência de tipagem.
  const today = new Date().toISOString().split('T')[0];
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  // Inicializamos com a data de hoje, garantindo que 'date' é sempre uma string no início.
  const [date, setDate] = useState<string>(today); 
  const [musicTracks, setMusicTracks] = useState<Track[]>([]);
  const [musicLoading, setMusicLoading] = useState(false);

  // Função central para buscar os dados
  const fetchApodData = useCallback(async (selectedDate: string) => {
    setLoading(true);
    setMusicTracks([]); // Limpa a música ao mudar a imagem
    try {
      // **LINHA CORRIGIDA (Tipo de 'selectedDate' garantido como string)**
      const apod = await getAstronomyPicture(selectedDate); 
      setApodData(apod);
    } catch (error) {
      console.error('Falha ao carregar APOD', error);
      setApodData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // UseEffect para buscar o APOD na montagem e na mudança de data
  useEffect(() => {
    // Como 'date' agora é inicializado como string (today), a verificação 'if (date)'
    // não é estritamente necessária aqui, mas é uma boa prática para funções
    // que potencialmente podem ser chamadas com 'null'.
    fetchApodData(date);
  }, [date, fetchApodData]);


  // Função para buscar música (usando useCallback para otimização)
  const fetchMusic = useCallback(debounce(async (query: string) => {
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
  }, 500), []);


  // UseEffect para buscar música após o carregamento do APOD
  useEffect(() => {
    if (apodData && apodData.title) {
      const keywords = getKeywords(apodData.title);
      fetchMusic(keywords);
    }
  }, [apodData, fetchMusic]);


  // Função chamada pelo DatePicker
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    if (newDate) {
      setDate(newDate); // Garante que setDate é sempre chamado com uma string
    }
  };

  // Funções de renderização de mídia, etc.
  const renderMedia = () => {
    if (!apodData) return null;

    if (apodData.media_type === 'video' && apodData.url) {
      return (
        <ApodVideoWrapper>
          {/* Oculta o player se não houver URL */}
          <iframe
            width="100%"
            height="100%"
            src={apodData.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={apodData.title}
          />
        </ApodVideoWrapper>
      );
    }

    return (
      <ApodImage
        src={apodData.url || apodData.hdurl}
        alt={apodData.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  };

 const renderTracks = () => (
    <TrackList>
      {musicTracks.map((track) => (
        // CORREÇÃO AQUI: O TrackItem, que já é um styled(motion.li),
        // DEVE receber as props key e variants para a animação.
        <TrackItem 
          key={track.id} 
          variants={itemVariants} // <-- AGORA O ITEM RECEBE A VARIANTE
          onClick={() => window.open(track.external_urls.spotify, '_blank')}
        >
          <AlbumArt 
              src={track.album.images[0]?.url || 'https://placehold.co/60x60/334155/f1f5f9?text=Música'} 
              alt={`Capa do Álbum ${track.name}`} 
          />
          <TrackInfo>
            <TrackName>{track.name}</TrackName>
            <ArtistName>{track.artists.map(a => a.name).join(', ')}</ArtistName>
          </TrackInfo>
          {/* Adicionar um ícone de link ou play aqui */}
        </TrackItem>
      ))}
    </TrackList>
  );


  // Renderização final
  return (
    <ApodContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <DatePickerContainer>
        <input 
            type="date" 
            value={date} 
            onChange={handleDateChange} 
            max={today}
        />
      </DatePickerContainer>

      {loading ? (
        <Loader />
      ) : apodData ? (
        <>
          <ApodTitle as={motion.h1} variants={itemVariants}>{apodData.title}</ApodTitle>
          {renderMedia()}
          <ApodExplanation as={motion.p} variants={itemVariants}>
            {apodData.explanation}
          </ApodExplanation>
          {apodData.copyright && (
            <CopyrightText as={motion.p} variants={itemVariants}>
              Copyright: {apodData.copyright}
            </CopyrightText>
          )}

          <MusicContainer as={motion.div} variants={itemVariants}>
            <MusicTitle>Músicas Relacionadas ({musicTracks.length})</MusicTitle>
            {musicLoading ? (
                <Loader />
            ) : musicTracks.length > 0 ? (
                renderTracks()
            ) : (
                <p>Nenhuma música encontrada no Spotify com base no título: "{apodData.title}"</p>
            )}
          </MusicContainer>
          
          <FavoritesButton 
            as={motion.button} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            // Ação futura para adicionar aos favoritos
          >
            Adicionar aos Favoritos
          </FavoritesButton>
        </>
      ) : (
        <ApodTitle>Não foi possível carregar os dados do APOD.</ApodTitle>
      )}
    </ApodContainer>
  );
};
