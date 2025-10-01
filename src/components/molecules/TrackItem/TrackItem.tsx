import React from 'react';
import { StyledTrackItem, AlbumArt, TrackInfo, TrackName, ArtistName, PlayIcon } from './TrackItem.styles';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

interface TrackItemProps {
  track: Track;
  onClick?: () => void;
  className?: string;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(track.external_urls.spotify, '_blank');
    }
  };

  return (
    <StyledTrackItem
      className={className}
      onClick={handleClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AlbumArt 
        src={track.album.images[0]?.url || 'https://placehold.co/60x60/334155/f1f5f9?text=♪'} 
        alt={`Capa do álbum ${track.name}`} 
      />
      <TrackInfo>
        <TrackName>{track.name}</TrackName>
        <ArtistName>{track.artists.map(a => a.name).join(', ')}</ArtistName>
      </TrackInfo>
      <PlayIcon />
    </StyledTrackItem>
  );
};
