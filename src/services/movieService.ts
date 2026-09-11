import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';

export type Movie = {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: string;
  description: string;
};

export type MovieDetails = {
  Title: string;
  Poster: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
};

export async function getMovies(): Promise<Movie[]> {
  const response = await axios.get(API_URL, {
    params: {
      apikey: process.env.EXPO_PUBLIC_OMDB_API_KEY,
      s: 'Avengers',
      type: 'movie',
    },
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error);
  }

  return response.data.Search.map((movie: any) => ({
    id: movie.imdbID,
    title: movie.Title,
    image: movie.Poster,
    year: movie.Year,
    rating: 'Não informado',
    description: 'Descrição disponível na tela de detalhes.',
  }));
}

export async function getMovieDetails(id: string): Promise<MovieDetails> {
  const response = await axios.get(API_URL, {
    params: {
      apikey: process.env.EXPO_PUBLIC_OMDB_API_KEY,
      i: id,
      plot: 'full',
    },
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error);
  }

  return response.data;
}