import { View, Text } from 'react-native'
import {ss} from '../utils/style'

const TextComponent = () => {
  return (
    <View style={ss.shadowStyle}>
      <Text>This is Text Component</Text>
    </View>
  )
}

export default TextComponent