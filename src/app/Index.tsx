import { View, Text, TouchableOpacity, Pressable, FlatList} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import TextComponent from "../components/TextComponent";
import ImageComponent from "../components/ImageComponent"
import ProfileCard from "../components/ProfileCard";
import DynamicContent from "../components/DynamicContent";
import DynamicCarCard from "../components/DynamicCarCard";
import InlineStyle from "../components/InlineStyle";
import InternalStyle from "../components/InternalStyle";
import ExternalStyle from "../components/ExternalStyle";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import HandleComponent from "../components/HandleComponent";
import FavSubjectComponent from "../components/FavSubjectComponent";
import FlashList from "../components/13FlatList";
import FlatListArrayOfObj from "../components/14FlatListArrayOfObj";
import FlatListImage from "../components/15FlatListImage";
import ParentComponent from "../components/16ParentComponent";
import ProductCardComponent from "../components/18ProductCardComponent";
import ChildComponent from "../components/17ChildComponent";
import Product from "../components/18ProductCardComponent";
import ConditionalRendering from "../components/19ConditionalRendering";
import ANDOperatorConditionRander from "../components/20ANDOperatorConditionRander";
import TernaryOperator from "../components/21TernaryOperator";
import WithoutState from "../components/WithoutState";
import WithState from "../components/1. Basic Counter/WithState";
import UpdateArray from "../components/2. Updating Arrays/UpdateArray";
import UpdateObjects from "../components/3. UpdateObjects/UpdateObjects";
import SharingState from '../components/4. Sharing State/SharingState'
import ToggleButton from "../components/5. State Challenge01/ToggleButton";
import Weather from "../components/WeatherApp/Weather";
import ColorPicker from "../components/8. Color Picker/ColorPicker";
import TodoList from "../components/9. Todo List/TodoList";
import UseEffect from "../components/10. UseEffect/UseEffect";
import DataFetch from "../components/10. UseEffect/DataFetch";
import MealList from "../components/10. UseEffect/MealList";



const index = () => {

  // 18ProductContainerComponent
  // const products = [
  //   {
  //     productName: "Product A",
  //     productImage: 'https://plus.unsplash.com/premium_photo-1722081393904-ed87a107faff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D',
  //     productPrice: "$200",
  //     productDescription: "Description of Product A",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product B",
  //     productImage: 'https://images.unsplash.com/photo-1724758962017-dc0d18e224d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
  //     productPrice: "$200",
  //     productDescription: "Description of Product B",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product C",
  //     productImage: 'https://images.unsplash.com/photo-1720048171180-a8178a198fa8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D',
  //     productPrice: "$200",
  //     productDescription: "Description of Product C",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product D",
  //     productImage: 'https://images.unsplash.com/photo-1725006709140-820aed879fb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
  //     productPrice: "$200",
  //     productDescription: "Description of Product D",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product E",
  //     productImage: 'https://images.unsplash.com/photo-1724190500169-e9f1ca06e786?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTR8fHxlbnwwfHx8fHw%3D',
  //     productPrice: "$200",
  //     productDescription: "Description of Product E",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product F",
  //     productImage: 'https://plus.unsplash.com/premium_photo-1695930295456-2fcf93d73bcf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
  //     productPrice: "$200",
  //     productDescription: "Description of Product F",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product G",
  //     productImage: 'https://images.unsplash.com/photo-1724709972210-4beb408de580?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  //     productPrice: "$200",
  //     productDescription: "Description of Product G",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product H",
  //     productImage: 'https://images.unsplash.com/photo-1725012858161-59d7edb5d9dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  //     productPrice: "$200",
  //     productDescription: "Description of Product H",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product I",
  //     productImage: 'https://images.unsplash.com/photo-1724805053604-4f189fb90dff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
  //     productPrice: "$200",
  //     productDescription: "Description of Product I",
  //     isFeatured: true,
  //   },
  // ]

  // return <FlatList
  //   data={products}
  //   renderItem={({item}) => (
  //     <Product
  //       name = {item.productName}
  //       image = {item.productImage}
  //       price = {item.productPrice}
  //       description = {item.productDescription}
  //       isFeatured = {item.isFeatured}
  //     />
  //   )}
  // />

  // These are all about above components 
//     <View>
//       {/* <TextComponent/>
//       <ButtonComponent/>
//       <ImageComponent/> */}
//       {/* <ProfileCard /> */}
//       {/* <DynamicContent /> */}
//       {/* <DynamicCarCard/> */}
//       {/* <InlineStyle/> */}
//       {/* <InternalStyle/> */}
//       {/* <ExternalStyle/> */}


// {/* // This is First One Project Render List */}

//         {/* <NameComponent/>
//         <AgeComponent/>
//         <HandleComponent/>
//         <FavSubjectComponent/> */}



// {/* // This is Second one Render Profile ProfileCard */}

// {/* <ImageComponent /> */}

// {/* <DynamicCarCard/> */}



// {/* 13FlashList */}
//   {/* <FlashList/> */}


// {/* 14FlatListArryOfObj */}
// {/* <FlatListArrayOfObj/> */}


// {/* 15FlatListImage */}

// {/* <FlatListImage/> */}

// {/* 16ParentComponent  */}

// {/* <ParentComponent/> */}

// {/* 17ProductCardComponent  */}

  
//     </View>

return (
  <View>
    {/* 19ConditionalRendering  */}
    {/* <ConditionalRendering/> */}
    {/* 20ANDOperatorRendering  */}
    {/* <ANDOperatorConditionRander /> */}
    {/* 21TernaryOperator  */}
    {/* <TernaryOperator/> */}
  
    {/* 22withoutState  */} 
    {/* <WithoutState/> */}
    {/* <WithState/> */}
    {/* <UpdateArray/> */}
    {/* <UpdateObjects/> */}
    {/* <SharingState/> */}
    {/* <ToggleButton/> */}
    {/* <WeatherApp/> */}
  
    {/* <Weather/> */}
    {/* <ColorPicker/> */}
    {/* <TodoList/> */}
    {/* <UseEffect/> */}
    {/* <DataFetch/> */}
    <MealList/>
  </View>
)
  
};

export default index;
