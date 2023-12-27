// AllPosts.js
import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import IP from "../config"

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await fetch(`http://${IP}:3002/upload`);
                const data = await response.json();
                console.log('API Response:', data);
                setAllPosts(data);
            } catch (error) {
                console.error('Error fetching all posts:', error);
            }
        };

        fetchAllPosts();
    }, []);

    return (
        <View >
            
                <Text style={{fontSize:25,marginTop:40,marginLeft:20}}>Posts</Text>
            <FlatList
                data={allPosts}
                style={{marginBottom:70}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ margin: 10, alignItems: "center",  shadowColor:"black",elevation:100,shadowOpacity:10,shadowRadius:50,backgroundColor:"white",padding:15,borderRadius:10 }}>
                        <Image
                            source={{
                                uri: `http://${IP}:3002/uploads/${item.image}`,
                            }}
                            style={{ width: 315, height: 250, borderRadius: 5 }}
                            resizeMode="cover"
                        />
                        <View style={{ marginTop: 5, marginLeft: 10, borderRadius: 5, borderColor: '#fffaf0', borderWidth: 3,width:310,padding:5,backgroundColor:"#fffff0" }}>
                            <Text style={{ flexWrap: 'wrap', alignSelf: 'stretch',fontWeight:"bold" }}>{item.title}</Text>
                        </View>
                        <View style={{ marginTop: 5, marginLeft: 10, borderRadius: 5, borderColor: '#fffaf0', borderWidth: 3,width:310,padding:5,backgroundColor:"#fffff0"  }}>
                            <Text style={{ flexWrap: 'wrap', alignSelf: 'stretch' }}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default AllPosts;
