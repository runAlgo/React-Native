import { View, Text } from "react-native";


interface valid {
    isValid: boolean
}
const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid } : valid) => {

  return isValid ? <ValidPassword/> : <InvalidPassword/>

}
const TernaryOperator = () => {
  return (
    <View>
      <Password isValid={true}/>
    </View>
  );
};

export default TernaryOperator;
