import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import cloud from "../images/cloud.png"
const FiveDay = () => {
    // Create an array of data with five items
    const data = Array.from({ length: 5 }, (_, index) => ({ key: `${index}` }));

    return (
        <FlatList
            data={data}
            style={{ marginTop: 230 }}
            horizontal={true} // Set the FlatList to render items horizontally
            renderItem={({ item }) => (
                <View style={{ width: 100, backgroundColor: "#fffaf0", height: 120, margin: 8, borderRadius: 10,alignItems:"center" }}>
                    <Image
                        source={cloud}
                        style={styles.cloudImage}
                    />
                    <Text style={{ color: "black", fontSize: 15,marginBottom:10,marginTop:5 }}>
                              Sunday
                            </Text>
                            <Text style={{ color: "black", fontSize: 24, marginRight: 10 }}>
                             30
                            </Text>
                </View>
            )}
        />
    );
};


const styles = StyleSheet.create({
    cloudImage: {
        width: 50,
        height: 50,
        marginTop:5
    },
});

export default FiveDay;
