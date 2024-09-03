import { View, Text, Button } from 'react-native'


const WithoutState = () => {
    let counter = 0;
  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button title='increment' onPress={() => counter++}/>
    </View>
  )
}

export default WithoutState