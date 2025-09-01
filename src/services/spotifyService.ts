import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';

let accessToken: string | null = null;
let tokenExpiry: number | null = null;

const getAccessToken = async (): Promise<string | null> => {
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }

  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
      }
    );
    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000;
    return accessToken;
  } catch (error) {
    console.error('Erro ao obter token de acesso do Spotify:', error);
    return null;
  }
};

export const searchMusic = async (query: string) => {
  const token = await getAccessToken();
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get(SEARCH_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: 'track',
        limit: 5,
      },
    });
    return response.data.tracks.items;
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    return null;
  }
};