import { View, Text, Image, Button, Pressable } from "react-native";
import { card } from "../utils/style";

const ImageComponent = () => {
  const name = "Kalu";
  return (
    <View style={card.cardStyle}>
      <Image
        style={{marginTop: 40, height: 100, width: 100, borderRadius: 100, marginLeft: 110 }}
        source={require("../assets/piro.jpeg")}
      />
      <Text style={{ fontWeight: "bold", marginLeft: 140, margin: 20 }}>KALU</Text>
      <Text style={{marginLeft: 50, marginBottom: 30}} >My name is {name} and i love Coding. </Text>
      <Pressable
        style={{ backgroundColor: "gray", width: 100, borderRadius: 5, marginLeft: 120, padding: 10, paddingLeft: 20 }}
      >
        <Text style={{ color: "white", fontWeight: 'bold' }}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default ImageComponent;
