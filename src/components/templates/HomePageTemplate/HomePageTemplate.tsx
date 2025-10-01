import React from 'react';
import { PageContainer, Header, MainTitle, Subtitle, MainContent } from './HomePageTemplate.styles';
import { ApodDisplay } from '../../organisms/ApodDisplay/ApodDisplay';
import { MusicPlayerSection } from '../../organisms/MusicPlayerSection/MusicPlayerSection';
import type { ApodData } from '../../../types/nasaTypes';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

interface HomePageTemplateProps {
  apodData: ApodData | null;
  apodLoading: boolean;
  musicTracks: Track[];
  musicLoading: boolean;
  date: string;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxDate?: string;
  onFavoriteClick?: () => void;
  className?: string;
}

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  apodData,
  apodLoading,
  musicTracks,
  musicLoading,
  date,
  onDateChange,
  maxDate,
  onFavoriteClick,
  className
}) => {
  return (
    <PageContainer
      className={className}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Header variants={headerVariants}>
        <MainTitle
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          APOD Visualizer
        </MainTitle>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Astronomy Picture of the Day - Explore o universo através das lentes da NASA
        </Subtitle>
      </Header>

      <MainContent>
        <ApodDisplay
          apodData={apodData}
          loading={apodLoading}
          date={date}
          onDateChange={onDateChange}
          maxDate={maxDate}
          onFavoriteClick={onFavoriteClick}
        />

        {apodData && (
          <MusicPlayerSection
            tracks={musicTracks}
            loading={musicLoading}
            title="Trilha Sonora Cósmica"
          />
        )}
      </MainContent>
    </PageContainer>
  );
};
