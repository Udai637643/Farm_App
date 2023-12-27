import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, SectionList } from 'react-native';
import UserData from './componets/UserData.js';
import { useState } from 'react';

const fun = (val) => {
  console.warn(val);
}















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
{
  id:7,
  name:"rohit",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:8,
  name:"mohit",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:9,
  name:"mukesh",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:10,
  name:"suresh",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:11,
  name:"malesh",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:12,
  name:"hitesh",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:13,
  name:"himu",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},
{
  id:14,
  name:"himu2",
  email:"udai12@gmail.com",
  data:["c","c++","Html","javascript"]
},

]

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
  return (
    <View style={styles.container}>
       

      <Text style={styles.fontext} >Form In React Native</Text>


<SectionList 
sections={users}
renderItem={({item})=>(<Text  style={{fontSize:20,marginLeft:20}} >{item}</Text>
  
  )}
renderSectionHeader={({section:{name}})=>(
  <Text style={{fontSize:20,color:"red"}} >{name}</Text>
)}
 />





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





    </View>
  );
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
  container: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    // justifyContent: 'center',
    // alignItems: 'center',
  
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
