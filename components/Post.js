import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Button, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import img3 from "../images/img2.jpg"
import { Ionicons } from '@expo/vector-icons'; 
import IP from "../config"
//import Ionicons from '@expo/vector-icons/Ionicons';
const Post = (props) => {
  const [imageUri, setImageUri] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access media library denied');
      }
    })();
  }, []);

  const handleChooseImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.error('Error choosing image:', error);
    }
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });

      const response = await axios.post(`http://${IP}:3002/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Post successful:', response.data);
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  return (
    <ImageBackground
    source={img3}// Replace with the path to your background image
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 280, height: 280, marginBottom: 20,marginTop:50 }} />
      ) : (
        <Text style={{marginBottom:10}}>No Image Selected</Text>
      )}

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{ marginBottom: 20, padding: 10, borderWidth: 1, width: 250, height: 50, backgroundColor: 'rgba(255,255,255,0.7)' ,borderRadius:5 }}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={{ marginBottom: 20, borderWidth: 1, width: 250, height: 100, textAlignVertical: 'top', backgroundColor: 'rgba(255,255,255,0.7)'  ,borderRadius:5}}
        multiline={true}
      />

<TouchableOpacity onPress={handleChooseImage} style={{ marginBottom: 20,  alignItems: 'center' }}>
  <Ionicons name="add-outline" size={40} color="green" />
  <Text style={{ marginLeft: 10 }}>Choose Image from Gallery</Text>
</TouchableOpacity>


      <TouchableOpacity onPress={handlePost} style={{ backgroundColor: "#696969", padding: 10, paddingLeft:30,paddingRight:30,borderRadius: 5,marginBottom:20 }}>
        <Text  style={{ color: "white", textAlign: "center" }}>Post</Text>
      </TouchableOpacity>

 <TouchableOpacity  onPress={() => props.navigation.navigate('AllPosts')} style={{ backgroundColor: "#696969", padding: 10, paddingLeft:30,paddingRight:30,borderRadius: 5,marginBottom:20 }} > 
 <Text style={{color:"white"}}>View All Posts</Text>
 </TouchableOpacity>
     
    </ImageBackground>
  );
};

export default Post;
