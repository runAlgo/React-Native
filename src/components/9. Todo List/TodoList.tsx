import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";


interface Todo {
  id: string;
  text: string;
}

interface TodoItemProp {
  item: Todo;
}

const TodoList: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  // Add Todo
  const addTodo = () => {
    if (text.trim()) {
      setTodo([...todo, { id: Date.now().toString(), text }]);
      setText("");
    }
  };

  // Handle Submit
  const handleSubmit = () => {
    addTodo();
  };

  const removeTodo = (id: string) => {
    setTodo(todo.filter(todo => todo.id != id));
  }

  // Render Todo
  const renderTodo = ({ item }: TodoItemProp) => {
    return (
    <TouchableOpacity
      onPress={() => removeTodo(item.id)}
      style={styles.todoItem}
    >
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
    )
  };

  return (
    <View>
      <Text>Todo List</Text>

      {/* Input Field  */}
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter Task"
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />

      {/* Button for Add Task  */}
      <Button title="Add Task" onPress={addTodo} />

      {/* Render The Todos */}
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
});
export default TodoList;
