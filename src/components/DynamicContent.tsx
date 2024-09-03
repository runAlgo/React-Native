import { View, Text } from 'react-native'


const DynamicContent = () => {
    const username = "kalu webDev"
    const multiply = (a: number, b: number) => a * b;
    const obj = {
        age: 22,
        salary: "50k"
    }

  return (
    <View>
      <Text>
        My name is: {username}
      </Text>
      <Text>
        Sum of two number a and b: {multiply(2, 5)}
      </Text>
      <Text>{obj.salary}</Text>
    </View>
  )
}

export default DynamicContent