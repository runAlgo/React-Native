import { View, Text } from "react-native";
import ChildComponent from "./17ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <ChildComponent
      name='kalu'
      age={22}
      hobbies={['Singing ', 'Coding ', 'Cooking']}
      />
    </View>
  );
};

export default ParentComponent;
