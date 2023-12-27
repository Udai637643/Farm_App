import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detail = () => {
    const route = useRoute();
    const { itemName, temp1, temp2, uri, soil, months, Process, states, disease1, disease2, Treatment1, Treatment2 } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={[styles.title]}>{itemName}</Text>
                    <Text style={styles.subtitle}>Temperature: {temp1}°C - {temp2}°C</Text>
                    <Text style={[styles.subtitle,{paddingLeft:-25}]}>Months: {months}</Text>
                </View>
                <Image source={{ uri: uri }} style={styles.image} />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 18 }}>Soil:</Text>
                <Text style={[styles.subtitle, { paddingLeft: 12,textAlign:"justify" }]}> {soil}</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 18 }}>Process:</Text>
                <Text style={[styles.subtitle, { paddingLeft: 12,textAlign:"justify" }]}>{Process}</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 18 }}>State:</Text>
                <Text style={[styles.subtitle, { paddingLeft: 12 }]}>{states}</Text>
            </View>
            <View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "800", fontSize: 18 }}>Disease:</Text>
                    <Text style={[styles.subtitle, { paddingLeft: 12 }]}>{disease1}</Text>
                </View>
                <View style={{ padding: 10, paddingRight: 60 }}>
                    <Text style={{ fontWeight: "800", fontSize: 16 }}>Treatment:</Text>
                    <Text style={[styles.subtitle, { paddingLeft: 12 }]}>{Treatment1}</Text>
                </View>
            </View>
            <View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "800", fontSize: 18 }}>Disease:</Text>
                    <Text style={[styles.subtitle, { paddingLeft: 12 }]}>{disease2}</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "800", fontSize: 18 }}>Treatment:</Text>
                    <Text style={[styles.subtitle, { paddingLeft: 12 }]}>{Treatment2}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: "#b0e0e6",
        borderRadius: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 10,
        marginLeft: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 60, // Adjust the borderRadius to control the bulging effect
        marginRight: 30,
        marginTop: 10,
        shadowColor: "black",
        shadowOffset: {
            width: -10,
            height: 9,
        },
        shadowOpacity: 5,
        shadowRadius: 2,
        elevation: 5
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "450",
    },
});

export default Detail;
