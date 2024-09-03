import { View, Text, FlatList, Button } from "react-native";
import React, { useState } from "react";


// Mutatiing Array or Update Array
const UpdateArray = () => {
  const [friends, setFriends] = useState(["Alex", "John", "Jodan"]);
//   const addOne = () => setFriends([...friends, "Kalu"])
//   const RemoveOne = () => setFriends(friends.filter(f => f != 'Kalu'))
//   const UpdateOne = () => setFriends(friends.map(f => f === 'Alex' ? 'Noobu' : f))
const addFriend = () => setFriends([...friends, "kalu"])
const removeFriend = () => setFriends(friends.filter(f => f !== "kalu"))
const updateFriend = () => setFriends(friends.map(f => f === "Alex" ? "Noobu" : f))
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button color={'green'} title="Add Friend" onPress={addFriend}/>
      <Button color={'red'} title="Remove Friend" onPress={removeFriend}/>
      <Button color={'blue'} title="Update Friend" onPress={updateFriend}/>
    </View>
  );
};

export default UpdateArray;
