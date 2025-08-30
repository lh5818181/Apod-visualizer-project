import axios from 'axios';

const NASA_API_KEY = 'Tne7LuzjPnGqzgwd3jFplVZqIFVEcVYvxcwKQX9y'; // Substitua pela sua chave de API
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const getAstronomyPicture = async (date: string | null = null) => {
  try {
    let url = `${BASE_URL}?api_key=${NASA_API_KEY}`;
    if (date) {
      url += `&date=${date}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar a foto da NASA:", error);
    return null;
  }
};