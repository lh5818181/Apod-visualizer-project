import axios from 'axios';
import type { ApodData } from '../types/nasaTypes';

// LÊ A CHAVE DO ARQUIVO .env
const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY; 
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

/**
 * Busca a Imagem Astronômica do Dia (APOD) para uma data específica.
 * @param date Data no formato 'YYYY-MM-DD'.
 * @returns Dados da APOD ou null em caso de erro.
 */
export const getAstronomyPicture = async (date: string): Promise<ApodData | null> => {
  // Adiciona uma verificação de segurança, caso a chave não tenha sido configurada
  if (!NASA_API_KEY) {
    console.error("ERRO: A chave da NASA (VITE_NASA_API_KEY) não está configurada!");
    return null;
  }
  
  try {
    const response = await axios.get<ApodData>(BASE_URL, {
      params: {
        api_key: NASA_API_KEY,
        date: date,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar a foto da NASA:", error);
    return null;
  }
};