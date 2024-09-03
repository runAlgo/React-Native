import { View, Text, Button } from 'react-native'

interface ComponentTypeProps {
    count: number;
    onClickHandler: () => void;
}

const ComponentTwo = ({count, onClickHandler} : ComponentTypeProps) => {
  return (
    <View>
      <Text>Component Two</Text>
      <Text>{count}</Text>
      <Button title='click me' onPress={onClickHandler}/>
    </View>
  )
}

export default ComponentTwo