import { useEffect, useState } from 'react';
import { getAstronomyPicture } from '../../services/nasaService';
import { ApodContainer, ApodImage, ApodTitle, ApodExplanation, DatePickerContainer, CopyrightText } from './ApodStyles';
import { Loader } from '../Loader/Loader';
import type { ApodData } from '../../types/nasaTypes';
import { motion } from 'framer-motion';

export const Apod = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchApod = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getAstronomyPicture(date);
        if (data) {
          setApodData(data);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchApod();
  }, [date]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Ops! Ocorreu um erro ao buscar a imagem da NASA. Tente novamente mais tarde.</p>;
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
      </motion.div>
      <ApodTitle>{apodData?.title}</ApodTitle>
      {apodData?.media_type === 'image' ? (
        <ApodImage src={apodData?.url} alt={apodData?.title} />
      ) : (
        <p>Conteúdo do dia não é uma imagem.</p>
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
    </ApodContainer>

  );
};