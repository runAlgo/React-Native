import { useReducer, useState } from 'react'
import { View, Text, Button } from 'react-native'

interface State {
  count: number

}

type Action = {type: "increment"} | {type: "decrement"};


const initalState: State = {
  count: 0
}

function reducer(state: State, action: Action) {
 switch(action.type) {
  case "increment":
    return {count: state.count + 1};
  case "decrement":
    return {count: state.count - 1};
  default: 
    throw new Error("Unhandled action type");
 }
}

const Counter = () => {
  
const [state, dispatch] = useReducer(reducer, initalState)
//@## This (dispatch) allows us to change your state
//@## (reducer) function allows us to tell our
// component that how we are gonna changing our state.
const [count, setCount] = useState(0)
  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title='increment' onPress={() => dispatch({type: "increment"})}/>
      <Button title='decrement' onPress={() => dispatch({type: "decrement"})}/>
    </View>
  )
}

export default Counter