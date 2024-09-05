import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { style } from "twrnc";

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const mealData = await response.json();
        setMeals(mealData.meals);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getMeals();
  }, []);

  if(loading) {
    return <Text>Loading...</Text>
  }

  if(error) {
    return <Text>Error: {error}</Text>
  }
  
  return (
    <View>
      <FlatList data={meals} keyExtractor={(item: any) => item.idMeal} renderItem={({item}) => (
        <View style={styles.item}>
          <Image source={{uri: item.strMealThumb}} style={styles.image}/>
          <Text style={styles.title}>{item.strMeal}</Text> 
        </View>
      ) }/>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
});

export default MealList;
