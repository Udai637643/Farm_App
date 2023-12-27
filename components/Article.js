import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import axios from 'axios';
import IP from "../config"
const Article = (props) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${IP}:3000/detail`);
        setData(response.data);
        setOriginalData(response.data); // Save a copy of the original data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTitlePress = (item) => {
    props.navigation.navigate('Detail', { itemName: item.name, temp1: item.temperature.min, temp2: item.temperature.max, uri: item.image, soil: item.soil, months: item.Months, Process: item.growthProcess, states: item.state, disease1: item.diseases[0].name, disease2: item.diseases[1].name, Treatment1: item.diseases[0].treatment, Treatment2: item.diseases[1].treatment });
    console.log(`Title pressed: ${item.name}`);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If the search term is empty, reset the data to the full dataset
      setData(originalData);
    } else {
      // If the search term is not empty, filter the data based on the search term
      const filteredData = originalData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setData(filteredData);
    }
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTitlePress(item)}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container,{marginTop:25}]}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Crop & Fruit"
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity
  style={{ backgroundColor: "#696969", padding: 10, borderRadius: 5 }}
  onPress={handleSearch}
>
  <Text style={{ color: "white", textAlign: "center" }}>Search</Text>
</TouchableOpacity>

      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor:"#90ee90"
  },
  itemContainer: {
    width: windowWidth / 2 - 20,
    marginTop: 18,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Article;
