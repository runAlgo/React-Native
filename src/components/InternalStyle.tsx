import { View, Text, StyleSheet } from 'react-native'


const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Internal Style</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "lime",
        backgroundColor: "grey",
        margin: 20,
        padding: 20
    }
})

export default InternalStyle