import { useState } from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
     
        <Text
          style={[styles.toggle, isOn ? { color: "black" } : { color: "red" }]}
        >
          {isOn ? "On" : "Off"}
        </Text>
      
      <Pressable style={styles.btn} onPress={() => setIsOn(!isOn)}>
        <Text style={styles.textBtn}>Toggle</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    width: 150,
    height: 40,
    paddingLeft: 48,
    paddingTop: 5,
    borderRadius: 4,
    marginLeft: 100,
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  toggle: {
    marginLeft: 160,
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },

});

export default ToggleButton;
