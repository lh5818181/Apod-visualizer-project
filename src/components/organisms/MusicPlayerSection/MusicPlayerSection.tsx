import React from 'react';
import { MusicContainer, MusicTitle, TrackList, EmptyMessage } from './MusicPlayerSection.styles';
import { TrackItem } from '../../molecules/TrackItem/TrackItem';
import { Loader } from '../../atoms/Loader/Loader';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

interface MusicPlayerSectionProps {
  tracks: Track[];
  loading: boolean;
  title?: string;
  className?: string;
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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const MusicPlayerSection: React.FC<MusicPlayerSectionProps> = ({
  tracks,
  loading,
  title = "Músicas Relacionadas",
  className
}) => {
  return (
    <MusicContainer
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MusicTitle
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title} {tracks.length > 0 && `(${tracks.length})`}
      </MusicTitle>

      {loading ? (
        <Loader size="medium" message="Buscando músicas relacionadas" />
      ) : tracks.length > 0 ? (
        <TrackList
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {tracks.map((track) => (
            <TrackItem
              key={track.id}
              track={track}
            />
          ))}
        </TrackList>
      ) : (
        <EmptyMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4>🎵 Nenhuma música encontrada</h4>
          <p>Não foi possível encontrar músicas relacionadas no Spotify para esta imagem astronômica.</p>
        </EmptyMessage>
      )}
    </MusicContainer>
  );
};
