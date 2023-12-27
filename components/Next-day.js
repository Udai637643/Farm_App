import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, Image, StyleSheet } from "react-native";
import cloud from "../images/cloud.png";

const Next_day = () => {
  const [weatherData2, setweatherData2] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchweatherData2 = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Manali,himachal%20pradesh&appid=e8424142604ae1a36eb251219aa4e44f`
      );
      const data = await response.json();

      if (data.list && data.list.length > 0) {
        // Calculate the dates for the next 5 days
        const currentDate = new Date();
        const nextFiveDaysData = [];
        for (let i = 1; i <= 5; i++) {
          const nextDate = new Date(currentDate);
          nextDate.setDate(currentDate.getDate() + i);

          // Find the data for the next day
          const nextDayData = data.list.find((item) => {
            const itemDate = new Date(item.dt_txt);
            return itemDate.getDate() === nextDate.getDate();
          });

          if (nextDayData) {
            nextFiveDaysData.push(nextDayData);
          }
        }

        setweatherData2(nextFiveDaysData);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchweatherData2();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.weatherItem}>
      <Image
        source={cloud}
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
    <View>
      
      <FlatList
        data={weatherData2}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Next_day;
