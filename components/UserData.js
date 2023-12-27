import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

   const UserData=(props)=>{
    const [name1, setname1] = useState (0)
    const [name2, setname2] = useState(props.name)
    return(
        <View>
               <Text>{name2}</Text>
        <Text>{name1}</Text>
        <View style={{ margin: 40 }} >
        <Button title='Increment' onPress={()=>setname1(name1+1)} ></Button>
        </View>
        
        <Button title='Decreament' onPress={()=>setname1(name1-1)} ></Button>
        <View style={{ margin: 40 }} >
        <Button title='change name' onPress={()=>setname2("Tushar Kumar")} ></Button>

        </View>
        <Button title='change name' onPress={()=>setname2("Tushar")} ></Button>
        
        </View>
    )
}

export default UserData