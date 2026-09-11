import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

type MovieCardProps = {
  id: string;
  title: string;
  image: string;
};

export default function MovieCard({ id, title, image }: MovieCardProps) {
  const router = useRouter();

  function openDetails() {
    router.push({
      pathname: '/details',
      params: {
        id: id,
      },
    });
  }

  return (
    <Pressable style={styles.card} onPress={openDetails}>
      <Image
        source={{ uri: image }}
        style={styles.poster}
      />

      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
  },
  poster: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
});