// import React, { useState } from 'react';
// import { Text, View, Button } from 'react-native';
// import { Audio } from 'expo-av';

// export default function MediaPlayer() {
//   const [sound, setSound] = useState();

//   const playSound = async () => {
//     const { sound } = await Audio.Sound.createAsync(
//       require('./path-to-your-audio-file.mp3')
//     );
//     setSound(sound);
//     await sound.playAsync();
//   };

//   const stopSound = async () => {
//     if (sound) {
//       await sound.unloadAsync();
//     }
//   };

//   return (
//     <View>
//       <Button title="Play" onPress={playSound} />
//       <Button title="Stop" onPress={stopSound} />
//     </View>
//   );
// }
