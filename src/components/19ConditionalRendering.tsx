import { View, Text } from "react-native";


interface valid {
    isValid: boolean
}
const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid } : valid) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;
};

const ConditionalRendering = () => {
  return (
    <View>
      <Password isValid={false}/>
    </View>
  );
};

export default ConditionalRendering;
