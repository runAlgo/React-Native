import { View, Text, FlatList } from "react-native";

const ListData = () => {
  const fruits = ["Apple", "Banana", "Chiku", "Lemon"];
  return (
    <View>
    <FlatList 
    data={fruits} 
    keyExtractor={(item) => item}
    renderItem={({item}) => {
      return <Text>{item}</Text>
    }}
    />
    </View>
  );
};

export default ListData;
