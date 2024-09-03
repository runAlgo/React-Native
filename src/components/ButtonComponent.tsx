import { View, Button, Pressable, Text } from 'react-native'
import tw from 'twrnc'

const ButtonComponent = () => {
  return (
    <View>
    {/* <Pressable onPress={() => {
      console.log("pressed")
    }}>
        <Text style={{color: "teal"}}>
          Press me!
        </Text>
    </Pressable> */}


{/* 
    <Pressable onPressIn={() => {
      console.log("onPressedIn")
    }}>
        <Text style={{color: "teal"}}>
          Press me!
        </Text>
    </Pressable> */}




{/* <Pressable onPressOut={() => {
      console.log("onpressOut")
    }}>
        <Text style={{color: "teal"}}>
          Press me!
        </Text>
    </Pressable>  */}


<Pressable onLongPress={() => {
      console.log("onLongPress")
    }}>
        <Text style={{color: "teal"}}>
          Press me!
        </Text>
    </Pressable> 


    </View>
  )
}

export default ButtonComponent