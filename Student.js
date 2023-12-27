import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Student extends Component {
  btn = () => {
    console.warn("Pressed Me");
  }

  render() {
    return (
      <View style={{ marginTop: 60 }}>
        <Text style={{ fontSize: 20, color: "blue" }}>{this.props.name}</Text>
        
      </View>
    );
  }
}

export default Student;
