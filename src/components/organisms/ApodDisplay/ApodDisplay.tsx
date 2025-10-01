import React from 'react';
import { ApodDisplayContainer, CopyrightText, ErrorMessage } from './ApodDisplay.styles';
import { ApodImage } from '../../atoms/ApodImage/ApodImage';
import { ApodTitle } from '../../atoms/ApodTitle/ApodTitle';
import { ApodExplanation } from '../../atoms/ApodExplanation/ApodExplanation';
import { ApodVideoWrapper } from '../../atoms/ApodVideoWrapper/ApodVideoWrapper';
import { DatePicker } from '../../molecules/DatePicker/DatePicker';
import { FavoritesButton } from '../../atoms/FavoritesButton/FavoritesButton';
import { Loader } from '../../atoms/Loader/Loader';
import type { ApodData } from '../../../types/nasaTypes';

interface ApodDisplayProps {
  apodData: ApodData | null;
  loading: boolean;
  date: string;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxDate?: string;
  onFavoriteClick?: () => void;
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

export const ApodDisplay: React.FC<ApodDisplayProps> = ({
  apodData,
  loading,
  date,
  onDateChange,
  maxDate,
  onFavoriteClick,
  className
}) => {
  const renderMedia = () => {
    if (!apodData) return null;

    if (apodData.media_type === 'video' && apodData.url) {
      return (
        <ApodVideoWrapper
          src={apodData.url}
          title={apodData.title}
        />
      );
    }

    return (
      <ApodImage
        src={apodData.url || apodData.hdurl}
        alt={apodData.title}
      />
    );
  };

  if (loading) {
    return (
      <ApodDisplayContainer className={className}>
        <Loader size="large" message="Carregando imagem astronômica" />
      </ApodDisplayContainer>
    );
  }

  return (
    <ApodDisplayContainer
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <DatePicker
        value={date}
        onChange={onDateChange}
        max={maxDate}
      />

      {apodData ? (
        <>
          <ApodTitle>{apodData.title}</ApodTitle>
          {renderMedia()}
          <ApodExplanation>{apodData.explanation}</ApodExplanation>
          
          {apodData.copyright && (
            <CopyrightText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Copyright: {apodData.copyright}
            </CopyrightText>
          )}

          <FavoritesButton onClick={onFavoriteClick}>
            ⭐ Adicionar aos Favoritos
          </FavoritesButton>
        </>
      ) : (
        <ErrorMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Não foi possível carregar os dados do APOD</h3>
          <p>Tente selecionar uma data diferente ou verifique sua conexão com a internet.</p>
        </ErrorMessage>
      )}
    </ApodDisplayContainer>
  );
};
