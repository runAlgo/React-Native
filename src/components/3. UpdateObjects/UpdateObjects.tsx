import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObjects = () => {
    const [userData, setUserData] = useState({
       name: 'Kalu',
       age: 22

    })

   const handleBtn = () => {
        setUserData({...userData, name: 'Hero jee', age: 24})
   }



  return (
    <View>
      <Text>User Name: {userData.name}</Text>
      <Text>User Age: {userData.age}</Text>
      <Button title='Update Name' onPress={handleBtn}/>

    </View>
  )
}

export default UpdateObjects