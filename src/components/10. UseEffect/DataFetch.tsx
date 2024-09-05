import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean
}

const DataFetch = () => {
  const [data, setData] = useState<TodoItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resonse = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data: TodoItem[] = await resonse.json();
      setData(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.completed.toString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DataFetch;
