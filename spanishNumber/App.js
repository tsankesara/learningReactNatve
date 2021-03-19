import React, {useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
const soundList = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

const App = () => {
  const playSound = sound => {
    var whoosh = new Sound(`${sound}.wav`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log(error);
      } else {
        setTimeout(() => {
          whoosh.play();
        });
      }
    });
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                playSound(sound);
              }}
              key={index}
              style={styles.box}>
              <Text style={styles.text}>{index + 1}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#FF4301',
  },
});
