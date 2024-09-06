import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FetechRandomUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const randomUser = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=50"
        );
        setUsers(response.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    randomUser();
  }, []);

  if(loading) {
    return <Text>Loading...</Text>
  }

  if(error) {
    return <Text>Error: {error}</Text>
  }

  const renderUser = ({item} : any) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.avatar} source={{uri: item.picture.thumbnail}}/>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList data={users} keyExtractor={(item: any) => item.login.uuid} renderItem={renderUser}/>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});


export default FetechRandomUser;
