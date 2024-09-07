import { useReducer, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Todo {
  id: string;
  text: string;
}
interface State {
  todos: Todo[];
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}
interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: string;
}

type Action = AddTodoAction | RemoveTodoAction;

const initalState = {
  todos: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };

    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };

    default:
      return state;
  }
};

const TodoLists = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [inputValue, setInputValue] = useState<string>("");


  const handleAddTodo = () => {
    if(inputValue.trim()) {
      dispatch({type: 'ADD_TODO', payload: inputValue})
      setInputValue("")
    }
  }

  const handleRemoveTodo = (id: string) => {
    dispatch({type: "REMOVE_TODO", payload: id})
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a Todo"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="ADD TODO" onPress={handleAddTodo} />

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoText: {
    fontSize: 16,
  },
  removeButton: {
    color: "red",
  },
});

export default TodoLists;
