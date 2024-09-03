import { View, Text, FlatList } from "react-native";

const FlatListArrayOfObj = () => {
  const users = [
    { id: 1, name: "Kalu" },
    { id: 2, name: "Dilip" },
    { id: 3, name: "Dhiraj" },
    { id: 4, name: "Sameer" },
  ];
  return (
    <View>
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={users}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  </View>
  );
};

export default FlatListArrayOfObj;
