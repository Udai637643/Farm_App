import React, { useEffect, useState } from "react";
import { ImageBackground, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import img1 from "../images/img1.jpg";
import cloud from "../images/cloud.png";
import Clear_sky from "../images/Clear_sky.png";
import light_rain from "../images/light_rain.png";
import moderate from "../images/moderate.png";
import scartter from "../images/scartter.png";
import mist from "../images/mist.png";

import Ionicons from '@expo/vector-icons/Ionicons';
import Five_day from "./Five_day";
import Next_day from "./Next-day";

const WeatherApp = () => {
    const [weatherData2, setweatherData2] = useState([]);
    const [mindata, setmindata] = useState(null)
    const [maxdata, setmaxdata] = useState(null)
    const [location, setlocation] = useState(null); // Initialize to null
    const [humadity, sethumadity] = useState(null)
    const [weatherdes, setweatherdes] = useState(null)
    const [searchloc, setsearchloc] = useState("Una,Himachal");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();


    console.log(weatherdes)



    // Format the time as "HH:MM AM/PM"
    const formattedTime = formatTime(hours, minutes);



    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${searchloc}&appid=e8424142604ae1a36eb251219aa4e44f`
            );
            const data = await response.json();
            if (data.list && data.list.length > 0) {
                // Calculate the dates for the next 5 days
                const currentDate = new Date();
                const nextFiveDaysData = [];

                for (let i = 1; i <= 5; i++) {
                    const nextDate = new Date(currentDate);
                    nextDate.setDate(currentDate.getDate() + i);
                    const nextDateOnly = nextDate.toISOString().split('T')[0]; // Extract only the date part

                    // Find the data for the next day
                    const nextDayData = data.list.find((item) => {
                        const itemDate = new Date(item.dt_txt);
                        const itemDateOnly = itemDate.toISOString().split('T')[0]; // Extract only the date part

                        return itemDateOnly === nextDateOnly;
                    });

                    if (nextDayData) {
                        nextFiveDaysData.push({
                            ...nextDayData,
                            dt_txt: nextDateOnly // Update dt_txt to only include the date part
                        });
                    }
                }

                setweatherData2(nextFiveDaysData);
            }



            // Define the time you want to display data for (e.g., 12:00 PM)
            const targetTime = "12:00:00";

            // Find the data for the timestamp corresponding to the target time
            const targetData = data.list.find(item => item.dt_txt.includes(targetTime));

            if (targetData) {
                setmindata((targetData.main.temp_min - 273.15).toFixed(1) + "°C");
                setmaxdata((targetData.main.temp_max - 273.15).toFixed(1) + "°C");
                sethumadity(targetData.main.humidity + "%");
                setweatherdes(targetData.weather[0].description);
                setlocation(targetData.main.temp);

            } else {
                console.log('Data not found for the specified time.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []);

    const handlesearch = () => {
        fetchData(); // Call fetchData to fetch data for the new location
    }

    const formattedTemperature = location ? (location - 273.15).toFixed(1) + "°C" : 'Loading...';

    //for set the image of the clould
    let cloudImageSource;
    if (weatherdes === "few clouds") {
        cloudImageSource = cloud;
    } else if (weatherdes === "clear sky") {
        cloudImageSource = Clear_sky;
    }
    else if (weatherdes === "light rain") {
        cloudImageSource = light_rain;
    }
    else if (weatherdes === "moderate rain") {
        cloudImageSource = moderate;
    }
    else if (weatherdes === "scattered clouds") {
        cloudImageSource = scartter;
    }
    else if (weatherdes === "overcast clouds") {
        cloudImageSource = mist
    }else{
        cloudImageSource = Clear_sky;
    }


    const renderItem = ({ item }) => (
        <View style={styles.weatherItem}>
            <Image
                source={cloudImageSource}
                style={styles.cloudImage}
            />
            <Text style={styles.dayText}>
                {item.dt_txt}
            </Text>
            <Text style={styles.temperatureText}>
                {(item.main.temp - 273.15).toFixed(1)}°C
            </Text>
        </View>
    );


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={img1}
                style={{ flex: 1, resizeMode: "contain", justifyContent: "center", width: "100%" }}
            >
                <Text style={{ fontSize: 30, marginTop: 50, textAlign: 'center', color: "white" }}>Weather</Text>

                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <TextInput
                        style={{
                            width: 200,
                            height: 40,
                            borderColor: "#778899",
                            backgroundColor: "#f0fff0",
                            borderRadius: 5,
                            borderWidth: 1,
                            marginTop: 30,
                            paddingLeft: 10,
                        }}
                        placeholder="Enter location"
                        placeholderTextColor="gray"
                        onChangeText={(text) => setsearchloc(text)}
                    />

                    <TouchableOpacity
                        style={{
                            padding: 15,
                            backgroundColor: '#ffdab9',
                            color: 'black',
                            borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30
                        }}
                        onPress={handlesearch}
                    >
                        <Text style={{ color: 'black', fontSize: 18 }}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginLeft: 45 }}>
                    <View
                        style={{
                            width: 280,
                            height: 280,
                            backgroundColor: "#98fb98",
                            paddingLeft: 100,
                            flexDirection: "column",
                            borderRadius: 10,
                            marginTop: 10
                        }}
                    >
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: -25 }}>
                            <Text style={{ color: "black", fontSize: 24, marginRight: 12 }}>
                                Today
                            </Text>
                            <Text style={{ color: "black", fontSize: 24 }}>
                                {formattedTime}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, paddingLeft: 15 }}>
                            <Image
                                source={cloudImageSource}
                                style={styles.cloudImage}
                            />
                        </View>
                        <View style={{ flexDirection: 'colmn', marginTop: 20, justifyContent: "center", alignItems: "center", paddingRight: 80 }}>
                            <Text style={{ color: "black", fontSize: 24, marginRight: 10 }}>
                                {formattedTemperature}
                            </Text>
                            <Text style={{ color: "black", fontSize: 18, marginLeft: -20 }}>
                                {weatherdes}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "center", alignItems: "center", paddingRight: 90 }}>
                            <View style={{ flexDirection: "colmn", marginRight: 10 }}>
                                <Ionicons name="thermometer-outline" size={24} color="red" />
                                <Text style={{ color: "black", fontSize: 24, marginRight: 10 }}>
                                    {mindata}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "colmn", marginRight: 10 }}>
                                <Ionicons name="thermometer-outline" size={24} color="#48d1cc" />
                                <Text style={{ color: "black", fontSize: 24, marginRight: 10 }}>
                                    {maxdata}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "colmn" }}>
                                <Ionicons name="water-outline" size={24} color="blue" />
                                <Text style={{ color: "black", fontSize: 24, marginRight: 10 }}>
                                    {humadity}
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, top:70,position:"fixed" }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: "white" }}>Weather Five Days</Text></View>
                    <FlatList
                        data={weatherData2}
                        horizontal
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        
                    />

                </View>
            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    cloudImage: {
        width: 50,
        height: 50,
    },

    weatherItem: {
        width: 100,
        backgroundColor: "#fffaf0",
        height: 120,
        margin: 8,
        borderRadius: 10,
        alignItems: "center",
    },
    cloudImage: {
        width: 50,
        height: 50,
        marginTop: 5,
    },
    dayText: {
        color: "black",
        fontSize: 15,
        marginBottom: 10,
        marginTop: 5,
    },
    temperatureText: {
        color: "black",
        fontSize: 24,
        marginRight: 10,
    },

});

const formatTime = (hours, minutes) => {
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
};

export default WeatherApp;
