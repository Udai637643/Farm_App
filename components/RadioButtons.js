import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioButtons = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <View style={{margin:40,}} >
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedOption(option)}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: option === selectedOption ? 'blue' : 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {option === selectedOption && (
                <View style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: 'blue',
                }} />
              )}
            </View>
            <Text style={{ marginLeft: 8 }}>{option}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButtons;
