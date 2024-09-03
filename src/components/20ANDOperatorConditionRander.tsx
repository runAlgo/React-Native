import { View, Text, FlatList } from 'react-native'


const ANDOperatorConditionRander = () => {
    const groceries = ['milk', 'bread', 'egg', 'cheese']
  return (
    <View>


        <Text>Cart 🛒</Text>

        {groceries.length > 0 && (<Text>You have {groceries.length} items in your Cart.</Text>)}

      <FlatList
      data={groceries}
      renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  )
}

export default ANDOperatorConditionRander