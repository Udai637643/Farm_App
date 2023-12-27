
/* {
  modals ? <View style={styles.modal}>
  <View style={styles.body}>
    <Text>Modal text</Text>
    <Button title='close modal' onPress={()=>setmodals(false)} />
  </View>
</View>:null
}
     

      <Button title="Open modal"   onPress={()=>setmodals(true)} />

 */






      {/* <Text style={{fontSize:30}} >platform:{Platform.OS}</Text>
      {
  Platform.OS === "android" ? (
    <View style={{ backgroundColor: "red", width: 30, height: 30 }}></View>
  ) : (
    <View style={{ backgroundColor: "green", width: 30, height: 30 }}></View>
  )
}

<Text>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text> */}


       {/* <StatusBar
        backgroundColor='red'
        StatusBarStyle={stylebar}
        hidden={hiddenp}
      />
        <Button title='toggle' onPress={()=>sethiddenp(!hiddenp)}/>
        <Button title='style' onPress={()=>setstylebar("light-content")}/> */}





{/* <Pressable  //onPress={()=>console.warn("onpress click")}
              //onLongPress={()=>console.warn("long press click")}
              onPressIn={()=>console.warn("on press in click")}
              onPressOut={()=>console.warn("on press out click")}
              >
  <Text style={styles.pressbleText} >Pressable</Text>
</Pressable> */}



































// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// const stack=createNativeStackNavigator();
// import Login from './components/Login';
// import Home from './components/Home';
// import FirstPage from './components/FirstPage';
// import SignUp from "./components/SignUp";


// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <stack.Navigator screenOptions={{
//           headerStyle:{
//             backgroundColor:"#017aff"
//           },headerTintColor:"white"
//         }}>
//           {/* <stack.Screen name='Lab' component={Lab} options={{title:"Lab Work Android"}}/> */}
//           <stack.Screen name='FirstPage' component={FirstPage} options={{title:"TrakLink"}}/>
//           <stack.Screen name='SignUp' component={SignUp} options={{title:"TrakLink"}}/>
//           <stack.Screen name='Login' component={Login} options={{title:"TrakLink"}}/>
//           <stack.Screen name='Home' component={Home} options={{title:" "}}/>
//         </stack.Navigator>
//       </NavigationContainer>
//     </>
    
//   );
// }





















import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import UserData from './componets/UserData.js';
import { useEffect, useState } from 'react';
import RadioButtons from './componets/RadioButtons.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { Login } from './componets/Loginp.js';
import { Home } from './componets/Home.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const fun = (val) => {
  console.warn(val);
}












//const Stack=createNativeStackNavigator();
//const Tab= createBottomTabNavigator ();
const Tab=createMaterialTopTabNavigator();


export default function App() {


  const users=[
    {
        id:1,
        name:"udai",
        email:"udai12@gmail.com",
        data:["c","c++","Html","javascript"]
  },
  {
    id:2,
    name:"Tushar",
    email:"udai12@gmail.com",
    data:["c","c++","Html","javascript"]
},
{
  id:3,
  name:"uphar",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:4,
  name:"Yash",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:5,
  name:"yogi",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:6,
  name:"kalu",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
// {
//   id:7,
//   name:"rohit",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:8,
//   name:"mohit",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:9,
//   name:"mukesh",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:10,
//   name:"suresh",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:11,
//   name:"malesh",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:12,
//   name:"hitesh",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:13,
//   name:"himu",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },
// {
//   id:14,
//   name:"himu2",
//   email:"udai12@gmail.com",
//   data:["c","c++","Html","javascript"]
// },

]

const [modalVisible, setModalVisible] = useState(false);
  const [loder, setloder] = useState(false)

  const displayloder=()=>{
    setloder(true)
    setTimeout(() => {
      setloder(false)
    }, 3000);
  }

  const [count, setcount] = useState(true)
  const [name1, setname1] = useState ("")
  const [email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const [display, setdisplay] = useState(false)

  const clearData =()=>{
    setdisplay(false)
    setPassword("")
    setname1("")
    setemail("")
  }


  const [selectedOption, setSelectedOption] = useState(1);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const [hiddenp, sethiddenp] = useState(false)
  const [stylebar, setstylebar] = useState("default")
  const [modals,setmodals]=useState(false)

//const [apidata, setapidata] = useState(undefined)
const [apidata, setApidata] = useState([]);
const [filteredData, setFilteredData] = useState([]);
const [loading, setLoading] = useState(true);
const [searchState, setSearchState] = useState('');
const [searchDistrict, setSearchDistrict] = useState('');

  const getData=  async()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001987c65666f9c49656f0f9ef4fa3650e7&format=json&offset=0&limit=400'
        );
        const data = await response.json();
        setApidata(data.records);
        setFilteredData(data.records); // Initialize filtered data with all data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    // const URL="https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001987c65666f9c49656f0f9ef4fa3650e7&format=json&offset=0&limit=400";
    // let result= await fetch(URL);
    // result= await result.json();
    // setapidata(result)
    

  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Search Data:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter State"
        value={searchState}
        onChangeText={(text) => setSearchState(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter District"
        value={searchDistrict}
        onChangeText={(text) => setSearchDistrict(text)}
      />
      <Button title="Search" onPress={handleSearch} />

      {loading ? (
        <Text>Loading data...</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>State: {item.state}</Text>
              <Text>District: {item.district}</Text>
              <Text>Market: {item.market}</Text>
              <Text>Commodity: {item.commodity}</Text>
              <Text>Variety: {item.variety}</Text>
              <Text>Grade: {item.grade}</Text>
              <Text>Arrival Date: {item.arrival_date}</Text>
              <Text>Min Price: {item.min_price}</Text>
              <Text>Max Price: {item.max_price}</Text>
              <Text>Modal Price: {item.modal_price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}


    //using scrollView
  //   <ScrollView style={{ margin: 30 }}>
  //   <Text style={{ fontSize: 30 }}>API Call</Text>
  //   {apidata && Array.isArray(apidata) && apidata.length > 0 ? (
  //     apidata.map((item) => (
  //       <View key={item.id}  style={{padding:10,borderBlockColor:"black" ,borderWidth:2,margin:10}}>
  //         <Text  style={{backgroundColor:"#ddd"}} >ID: {item.id}</Text>
  //         <Text>User ID: {item.userId}</Text>
  //         <Text>Title: {item.title}</Text>
  //         <Text>Body: {item.body}</Text>
  //       </View>
  //     ))
  //   ) : null}
  // </ScrollView>




   // <View style={styles.main}>

   
      // <NavigationContainer>
      //   <Tab.Navigator  style={{ marginTop: 20 }}>
      //   <Tab.Screen name='Login' component={Login} />
      //   <Tab.Screen name='Signup' component={Signup} />
      //   </Tab.Navigator>

      // </NavigationContainer>

   /* //Stack Navigator
      // <NavigationContainer>
      //   <Stack.Navigator  screenOptions={{
      //     headerStyle:{
      //       backgroundColor:"pink"
      //     },
      //     headerTintColor:"yellow",
      //     headerTitleStyle:{
      //       fontSize:25
      //     }
      //   }} >
      //   <Stack.Screen name='Login' component={Login} options={{
      //     title:"User Login",
      //     headerStyle:{
      //       backgroundColor:"black"
      //     },
      //     headerTintColor:"yellow",
      //     headerTitleStyle:{ 
      //       fontSize:25
      //     }
      //   }}/>
      //   <Stack.Screen name='Home' component={Home} />
      //   </Stack.Navigator>
      // </NavigationContainer> */
      
      
      
 


const Login=()=>{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30}}>Login</Text>
    </View>
  )
}

const Signup=()=>{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30}}>SignUp</Text>
    </View>
  )
}

// const UserDatas=(props)=>{
//   const item=props.item;
//   return(
// <View  style={styles.box} >
//   <Text style={styles.text}>{item.name}</Text>
//   <Text style={styles.text}>{item.email}</Text>

// </View>
//   )
// }

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"flex-end",
  
  },
  pressbleText:{
    backgroundColor:"pink",
    color:"#000",
    fontSize:20,
    margin:10,
    padding:10,
    borderRadius:10,
    textAlign:"center"
  },
buttonView:{
  flex:1,
  justifyContent:"flex-end"
}
,
centerView:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
}
,
ModalView:{
  flex:1,
  backgroundColor:"#fff",
  padding:30,
  borderRadius:20,
  shadowColor:"black",
  elevation:5
},
ModalText:{
fontSize:30,
marginBottom:20
},
  radioText:{
    fontSize:20
  },
  radio:{
    height:40,
    width:40,
    borderColor:"black",
    borderWidth:2,
    borderRadius:20,
    margin:10

  },
  radioWrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  radiobg:{
    backgroundColor:'black',
    height:28,
    width:28,
    borderRadius:20,
    margin:4,
  },



  container: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    // justifyContent: 'center',
    // alignItems: 'center',
  
  },
  modal:{
flex:1,
backgroundColor:"grey",
justifyContent:"center",
alignItems:"center"
  },
  body:{
    backgroundColor:"#fff",
    width:300,
    height:300,
    padding:30,
    justifyContent:'center',
    borderRadius:10
  },
  fontext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "red",
   marginTop:70,
   marginLeft:40
  },
  text:{
    fontSize:30,
    flex:1,
    margin:2,
    textAlign:"center",
    backgroundColor:"yellow"
    // padding:10,
    // color:"white"
  
    

  },
  box:{
    flexDirection:"row",
    borderWidth:2,
    borderColor:"orange",
    marginBottom:10
  }
});






















// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:"Anil"
//     }
//   }
//   btn = () => {
//     console.warn("Pressed Me");
//     this.setState({name:"udai"})
//   }
  

//   render() {
//     return (
//       <View style={{ marginTop: 60 }}>
//         <Text style={{ fontSize: 30, color: "blue" }}>{this.state.name}</Text>
//         <View style={{ marginTop: 30 }}>
//           <Button title='Press Me' onPress={this.btn} />
//         </View>

//         <Student  name={this.state.name}/>
//       </View>
//     );
//   }
// }

 //export default App;







      {/* <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      </View>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.centerView}>
          <View style={styles.ModalView}>
            <Text style={styles.ModalText}>Hello, this is a modal</Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal> */}
















        {/* loader */}

      {/* <ActivityIndicator size={40} color="red" animating={loder}  />
      <Button title="click me" onPress={displayloder} /> */}





   {/* {
    users.map((item,index)=>   <TouchableOpacity key={index} onPress={()=>setSelectedOption(item.id)}>
    <View style={styles.radioWrapper} >
      
      <View style={styles.radio} >
        {
        selectedOption===item.id?  <View style={styles.radiobg} ></View>:null
      }
      
      </View>
      <Text style={styles.radioText}>{item.name}</Text>
    </View>
  </TouchableOpacity>)
   } */}

      {/* <TouchableOpacity  onPress={ ()=> setSelectedOption(2)} >
        <View style={styles.radioWrapper} >
          <View style={styles.radio} >
          {
            selectedOption===2?<View style={styles.radiobg} ></View>:null
          }
          </View>
          <Text style={styles.radioText}>Radio2</Text>
        </View>
      </TouchableOpacity> */}








{/* <Text>Selected Option: {selectedOption}</Text>
      <RadioButtons
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      /> */}
   









{/* 



       <Text style={{marginTop:40,textAlign:"center"}}>TouchableHighlight</Text>
      <TouchableHighlight>
      <Text style={{margin:10,textAlign:"center",padding:10,backgroundColor:"yellow",fontSize:25,borderRadius:10,shadowColor:"black",elevation:10,shadowOpacity:1}}>Button</Text>
     </TouchableHighlight>
     <TouchableHighlight>
      <Text style={{margin:10,textAlign:"center",padding:10,backgroundColor:"green",fontSize:25,borderRadius:10,shadowColor:"black",elevation:10,shadowOpacity:1}}>Button</Text>
     </TouchableHighlight>
     <TouchableHighlight>
      <Text style={{margin:10,textAlign:"center",padding:10,backgroundColor:"blue",fontSize:25,borderRadius:10,shadowColor:"black",elevation:10,shadowOpacity:1}}>Button</Text>
     </TouchableHighlight>
     <TouchableHighlight>
      <Text style={{margin:10,textAlign:"center",padding:10,backgroundColor:"red",fontSize:25,borderRadius:10,shadowColor:"black",elevation:10,shadowOpacity:1}}>Button</Text>
     </TouchableHighlight>

     <TouchableHighlight>
      <Text style={{margin:10,textAlign:"center",padding:10,backgroundColor:"black",color:"white",fontSize:25,borderRadius:10,shadowColor:"black",elevation:10,shadowOpacity:1}}>Button</Text>
     </TouchableHighlight>
  */}





      {/* <View  style={{flex:1,backgroundColor:"yellow",flexDirection:"row"}} >
      <View  style={{flex:1,backgroundColor:"orange",margin:10}} ></View>
      <View  style={{flex:1,backgroundColor:"pink",margin:10}} ></View>
      <View  style={{flex:1,backgroundColor:"blue",margin:10}} ></View>

      </View>
      <View  style={{flex:1,backgroundColor:"red"}} ></View>
      <View  style={{flex:1,backgroundColor:"pink"}} ></View>
       
 */}

















      {/* <Text style={styles.fontext} >Form In React Native</Text>
      <Text style={{fontSize:30,marginLeft:80}}>{count}</Text>
      <View>
      <Button  title='Increase Value' onPress={()=>setcount(!count)}></Button>
      </View>
     {
      count ?<User/>:null
     } */}












{/* <SectionList 
sections={users}
renderItem={({item})=>(<Text  style={{fontSize:20,marginLeft:20}} >{item}</Text>
  
  )}
renderSectionHeader={({section:{name}})=>(
  <Text style={{fontSize:20,color:"red"}} >{name}</Text>
)}
 /> */}





    {/* <View  style={{flex:1, flexDirection:"row",flexWrap:"wrap"}}>
      
        {
        users.map((item)=><Text style={styles.text}>{item.name}</Text>)
         }
   
      </View> */}

{/*  
<FlatList  
data={users}
renderItem={({item})=> 
   <UserDatas  item={item} />
}
/>  */}






      {/* <TextInput  style={styles.textInput} onChangeText={(text)=>setname1(text)} placeholder='Enter Your Name'  />
      <TextInput  style={styles.textInput}  secureTextEntry={true} onChangeText={(text)=>setPassword(text)} placeholder='Enter Your Password'  />
      <TextInput  style={styles.textInput}  onChangeText={(text)=>setemail(text)} placeholder='Enter Your Email'  />


<View style={{ marginBottom:20 }}>
  <Button title="Print " onPress={() => setdisplay(true)} />
</View>

<Button  title="Clear Details" onPress={clearData}  />

<View>

  {
    display ? <View>
      <Text style={{fontSize:20}} >User Name:{name1}</Text>
      <Text  style={{fontSize:20}} >User Password:{Password}</Text>
      <Text  style={{fontSize:20}} >User Email:{email}</Text>
    </View>  :null

  }
</View> */}




      {/* <Text>Ye lo Bhai Apna App Banne ja rha he</Text>
      <Text>{text}</Text>
      <View style={{ margin: 90 }}>
        <Button title='Click Here' color='#00ced1' onPress={()=>fun("hello udai")} />
      </View>
      {/* <Button title='Click Here' color='#00ced1' onPress={fun} /> */}
      {/* <UserData name={'Tushar'} /> */}
      {/* <TextInput 
      style={styles.textInput}
       placeholder='Enter Your Name'
       value={text}
       onChangeText={(text)=>settext(text)}
      />
<Button title='Remove Text' color='#00ced1' onPress={()=>settext('')} />
      
    */}





   // </View>
  


   const User=()=>{
    let timer=setInterval(()=>{
      console.warn("timer running")
    },2000)
    useEffect(()=>{
      return()=>clearInterval(timer)
    })
    return(
      <View>
        <Text  style={{fontSize:30,color:"yello"}}>Toggle Button Clicked</Text>
      </View>
    )
  }