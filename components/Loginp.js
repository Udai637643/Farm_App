import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native"



export  const Login=(props)=>{

    const age=22;
    const [name,setname]=useState("")
    return(
      <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Login Screen</Text>
        <TextInput placeholder="Enter your Name" style={{borderBlockColor:"orange",borderWidth:2,padding:10,width:150}} onChangeText={(text)=>setname(text)} />
        <Button title="Go to home page " onPress={()=>props.navigation.navigate("Home",{name,age})} />
      </View>
    )
  }
  