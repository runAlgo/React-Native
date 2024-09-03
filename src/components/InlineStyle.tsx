import { View, Text } from 'react-native'


const InlineStyle = () => {
  return (
    <View style={{justifyContent: 'space-between'}}>
      <View style={{backgroundColor: 'red', width: 200, height: 100, margin: 5}}/>
      <View style={{backgroundColor: 'green', width: 200, height: 100, margin: 5}}/>
      <View style={{backgroundColor: 'yellow', width: 200, height: 100, margin: 5}}/>
      <View style={{backgroundColor: 'pink', width: 200, height: 100, margin: 5}}/>
    </View>
  )
}

export default InlineStyle