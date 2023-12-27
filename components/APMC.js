import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import img2 from "../images/img2.jpg"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function APMC() {
  const [apidata, setApidata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchState, setSearchState] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001987c65666f9c49656f0f9ef4fa3650e7&format=json&offset=0&limit=400'
      );
      const data = await response.json();
      setApidata(data.records);
      setFilteredData(data.records);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = apidata.filter(
      (item) =>
        item.state.toLowerCase() === searchState.toLowerCase()
    );
    setFilteredData(filtered);
  }

  const clearSearch = () => {
    setSearchState('');
    setFilteredData(apidata);
  }

  return (
    <ImageBackground source={img2} style={{ flex: 1, resizeMode: "contain", justifyContent: 'center', width: '100%' }}>
      <View style={{ flex: 1, padding: 20 }}>

        <TextInput
          style={{
            height: 40,
            borderColor: '#778899',
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 10,
            backgroundColor: "#f0fff0"
          }}
          placeholder={searchState ? '' : 'Enter State'}
          placeholderTextColor="gray"
          value={searchState}
          onChangeText={(text) => setSearchState(text)}
          onFocus={() => setSearchState('')}
          onBlur={() => {
            if (!searchState) {
              setSearchState('Enter State');
            }
          }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: '#ffdab9',
              color: 'black',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleSearch}
          >
            <Text style={{ color: 'black', fontSize: 18 }}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#afeeee',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={clearSearch}
          >
            <Text style={{ color: 'black', fontSize: 18 }}>Clear Search</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <Text>Loading data...</Text>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10, borderWidth: 2, borderColor: '#98fb98', padding: 5, borderRadius: 5, backgroundColor: '#fff0f5' }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#90ee90', padding: 10, width: 305, borderRadius: 5 }}>
                  <Text style={{ flex: 1, fontSize: 20 }}>{item.market}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="location-outline" size={20} style={{ marginBottom: 5 }} color="green" />
                    <Text style={{ marginRight: 5, fontSize: 15 }}>{item.state},</Text>
                    <Text style={{ fontSize: 15 }}>{item.district}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Commodity:</Text>
                  <Text style={{ flex: 1, color: "green", fontWeight: 700 }}>{item.commodity}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Variety:</Text>
                  <Text style={{ flex: 1 }}>{item.variety}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Grade:</Text>
                  <Text style={{ flex: 1 }}>{item.grade}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Arrival Date:</Text>
                  <Text style={{ flex: 1 }}>{item.arrival_date}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Min Price:</Text>
                  <Text style={{ flex: 1 }}>{item.min_price}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Max Price:</Text>
                  <Text style={{ flex: 1 }}>{item.max_price}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>Modal Price:</Text>
                  <Text style={{ flex: 1 }}>{item.modal_price}</Text>
                </View>
              </View>
            )}
          />
        )}

      </View>
    </ImageBackground>
  );
}
