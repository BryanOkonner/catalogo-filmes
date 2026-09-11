import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type MovieDetails = {
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

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, []);

  async function loadMovie() {
    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: process.env.EXPO_PUBLIC_OMDB_API_KEY,
          i: id,
          plot: 'full',
        },
      });

      setMovie(response.data);
    } catch (error) {
      console.log('ERRO AO CARREGAR DETALHES:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text>Não foi possível carregar o filme.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: movie.Poster }}
        style={styles.poster}
      />

      <Text style={styles.title}>{movie.Title}</Text>

      <Text style={styles.info}>Ano: {movie.Year}</Text>

      <Text style={styles.info}>Gênero: {movie.Genre}</Text>

      <Text style={styles.info}>Diretor: {movie.Director}</Text>

      <Text style={styles.info}>Atores: {movie.Actors}</Text>

      <Text style={styles.info}>Duração: {movie.Runtime}</Text>

      <Text style={styles.info}>
        Nota IMDb: {movie.imdbRating}
      </Text>

      <Text style={styles.description}>{movie.Plot}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },

  poster: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  info: {
    fontSize: 16,
    marginBottom: 10,
  },

  description: {
    fontSize: 17,
    lineHeight: 25,
    marginTop: 15,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});