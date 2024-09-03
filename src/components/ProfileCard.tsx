import { View, Text, Image, Button, Pressable } from 'react-native'


const ProfileCard = () => {
  return (
    <View>
        <Image source={require("../assets/piro.jpeg")} style={{borderRadius: 100, marginLeft: 125}}/>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 180}}>Kalu</Text>
      <Text style={{marginLeft: 85}}>My Name is Kalu and i Love Coding.</Text>
      <Pressable  style={{marginLeft: 170}}>
        <Text style={{backgroundColor: "blue", color: "white", width: 70, height: 20, paddingLeft: 5, borderRadius: 10 }}>Press Me</Text>
      </Pressable>

      
         </View>
  )
}

export default ProfileCard