import { View, Text, Button } from 'react-native'


const WithoutState = () => {
    let count = 0;
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Increment' onPress={() => count++}/>
    </View>
  )
}

export default WithoutState