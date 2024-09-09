import React, { useReducer, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

interface ProfileList {
  id: string;
  name: string;
  age: string;
}

interface State {
  profiles: ProfileList[];
}

interface AddProfileAction {
  type: "ADD_PROFILE";
  payload: { name: string; age: string };
}

interface UpdateProfileAction {
  type: "UPDATE_PROFILE";
  payload: { id: string; name: string; age: string };
}

interface RemoveProfileAction {
  type: "REMOVE_PROFILE";
  payload: string;
}

type Action = AddProfileAction | UpdateProfileAction | RemoveProfileAction;

const initialState: State = {
  profiles: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_PROFILE":
      return {
        ...state,
        profiles: [
          ...state.profiles,
          {
            id: Date.now().toString(),
            name: action.payload.name,
            age: action.payload.age,
          },
        ],
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === action.payload.id
            ? { ...profile, name: action.payload.name, age: action.payload.age }
            : profile
        ),
      };
    case "REMOVE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const AddProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [editingProfileId, setEditingProfileId] = useState<string | null>(null);

  const addProfile = () => {
    if (name && age) {
      dispatch({
        type: "ADD_PROFILE",
        payload: { name, age },
      });
      clearInputs();
    }
  };

  const updateProfile = () => {
    if (editingProfileId && name && age) {
      dispatch({
        type: "UPDATE_PROFILE",
        payload: { id: editingProfileId, name, age },
      });
      clearInputs();
    }
  };

  const editProfile = (profile: ProfileList) => {
    setName(profile.name);
    setAge(profile.age);
    setEditingProfileId(profile.id);
  };

  const removeProfile = (id: string) => {
    dispatch({
      type: "REMOVE_PROFILE",
      payload: id,
    });
  };

  const clearInputs = () => {
    setName("");
    setAge("");
    setEditingProfileId(null);
  };

  const renderItem = ({ item }: { item: ProfileList }) => (
    <View key={item.id} style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{`${item.name}, Age: ${item.age}`}</Text>
      <Button title="Edit" onPress={() => editProfile(item)} />
      <Button title="Remove" onPress={() => removeProfile(item.id)} />
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
      />
      {editingProfileId ? (
        <Button title="Update Profile" onPress={updateProfile} />
      ) : (
        <Button title="Add Profile" onPress={addProfile} />
      )}

      <FlatList
        data={state.profiles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default AddProfile;
