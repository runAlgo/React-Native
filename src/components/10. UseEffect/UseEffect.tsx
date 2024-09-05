import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(2)
    const [name, setName] = useState("")

    useEffect(() => {
        console.warn("useEffect called!")
    },[counter, name])
  return (
    <View>
      <Text>{counter}</Text>
      <Text>{name}</Text>
      <Button title='Increment' onPress={() => setCounter(counter + 1)}/>
        <Button title='setName' onPress={() => setName("Kalu")}/>
    </View>
  )
}

export default UseEffect