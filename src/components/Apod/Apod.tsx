import { useCallback, useEffect, useState } from 'react';
import { getAstronomyPicture } from '../../services/nasaService';
import { searchMusic } from '../../services/spotifyService';
import {  ApodContainer,
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
  ApodVideoWrapper, } from './ApodStyles';
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};


export const Apod = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [date, setDate] = useState<string | null>(null);
  const [musicList, setMusicList] = useState<Track[] | null>(null);
  const [favorites, setFavorites] = useState<ApodData[]>([]);

  // Carregar favoritos do localStorage ao iniciar a aplicação
useEffect(() => {
  try {
    const storedFavorites = localStorage.getItem('apodFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  } catch (e) {
    console.error("Erro ao carregar favoritos do localStorage", e);
  }
}, []);

// Salvar favoritos no localStorage sempre que a lista for alterada
useEffect(() => {
  localStorage.setItem('apodFavorites', JSON.stringify(favorites));
}, [favorites]);

const handleToggleFavorite = () => {
  if (!apodData) return;
  const isFavorite = favorites.some(fav => fav.date === apodData.date);
  if (isFavorite) {
    // Remove da lista
    setFavorites(favorites.filter(fav => fav.date !== apodData.date));
  } else {
    // Adiciona à lista
    setFavorites([...favorites, apodData]);
  }
};

  useEffect(() => {
    const fetchApodAndMusic = async () => {
      setLoading(true);
      setError(false);
      try {
        const apod = await getAstronomyPicture(date);
        if (apod) {
          setApodData(apod);
          // Usa o título da imagem como base para a busca de música
          const music = await searchMusic(apod.title);
          setMusicList(music);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchApodAndMusic();
  }, [date]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

   // Usa o useCallback para memorizar a função de busca
const debouncedSearch = useCallback(
  debounce(async (query: string) => {
    // Usa a URL completa como query
    const music = await searchMusic(query);
    setMusicList(music);
  }, 500),
  []
);

useEffect(() => {
  const fetchApodAndMusic = async () => {
    setLoading(true);
    setError(false);
    try {
      const apod = await getAstronomyPicture(date);
      if (apod) {
        setApodData(apod);
        debouncedSearch(apod.url);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
  fetchApodAndMusic();
}, [date, debouncedSearch]);


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Ops! Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.</p>;
  }

  return (
    <ApodContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ApodTitle>{apodData?.title}</ApodTitle>
          {/* {apodData && ( //comentado para ocultar por enquanto
      <FavoritesButton onClick={handleToggleFavorite}>
        {favorites.some(fav => fav.date === apodData.date) ? '★ Salvo' : '☆ Favoritar'}
      </FavoritesButton>
        )} */}
      </motion.div>

      {apodData?.media_type === 'image' && (
  <ApodImage src={apodData?.url} alt={apodData?.title} />
)}

{apodData?.media_type === 'video' && (
  <ApodVideoWrapper>
    <iframe
      title={apodData?.title}
      src={apodData?.url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </ApodVideoWrapper>
)}

      <ApodExplanation>{apodData?.explanation}</ApodExplanation>

      {apodData?.copyright && (
        <CopyrightText>
          Créditos: {apodData.copyright} | {apodData.date}
        </CopyrightText>
      )}

      <DatePickerContainer>
        <input type="date" value={date || ''} onChange={handleDateChange} />
      </DatePickerContainer>

      {musicList && musicList.length > 0 && (
          <MusicContainer>
            <MusicTitle>Trilha Sonora Cósmica</MusicTitle>
            <TrackList variants={containerVariants} initial="hidden" animate="visible">
              {musicList.map((track) => (
                <TrackItem
                  key={track.id}
                  variants={itemVariants}
                >
                <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                  <AlbumArt src={track.album.images[0].url} alt={`Album art for ${track.name}`} />
                </a>
                <TrackInfo>
                  <TrackName>{track.name}</TrackName>
                  <ArtistName>{track.artists.map((artist) => artist.name).join(', ')}</ArtistName>
                </TrackInfo>
              </TrackItem>
            ))}
          </TrackList>
        </MusicContainer>
      )}
    </ApodContainer>
  );
};