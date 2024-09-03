import { View, Text, Image, Button, Pressable } from "react-native";
import { styles } from "../utils/style";
const DynamicCarCard = () => {
  const price = "$500000";
  const car =
    "https://imgs.search.brave.com/LzyYSqV8TLjgD2UOWdUxd0pLHH2TKYzJooiQAgrYU3M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZmFzdGx5LmF1dG9n/dWlkZS5jb20vbWVk/aWEvMjAyMy8wNi8w/OS8xMjY5MzMyMi9t/Y2xhcmVuLWF1dG9t/b3RpdmUtaGFzLWJ1/aWx0LWl0cy0xNS0w/MDB0aC1jYXIuanBn/P3NpemU9NzIweDg0/NSZub2Nyb3A9MQ";
  const name = "Mcleran";
  const rating = "4.5";
  const width = 200;
  const height = 150;
  const desc = "this is the most expensive car in the world.";
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.pill}>{price}</Text>

      <Image source={{ uri: car }} style={styles.image} />

      <View style={styles.flex}>
        <Text style={styles.name}>{name}</Text>
        <Text style={{ marginLeft: 160 }}>Rating: {rating}</Text>
      </View>

      <Text style={styles.desc}>{desc}</Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Add To Cart</Text>
      </Pressable>
    </View>
  );
};

export default DynamicCarCard;
