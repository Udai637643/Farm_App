import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Toolbox = () => {
  return (
    <View style={styles.toolbox}>
      <TouchableOpacity style={styles.tool}>
        <Text style={styles.toolText}>Tool 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tool}>
        <Text style={styles.toolText}>Tool 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tool}>
        <Text style={styles.toolText}>Tool 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  tool: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  toolText: {
    color: 'white',
  },
});

export default Toolbox;
