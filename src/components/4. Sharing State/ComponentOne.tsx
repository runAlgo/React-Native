import { View, Text, Button } from 'react-native'
import React from 'react'

interface ComponentTypeProps {
    count: number;
    onClickHandler: () => void;
}
const ComponentOne = ({count, onClickHandler} : ComponentTypeProps)  => {
  return (
    <View>
      <Text>Component One</Text>
      <Text>{count}</Text>
      <Button title='press me' onPress={onClickHandler}/>
    </View>
  )
}

export default ComponentOne