import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [dice, setDice] = useState(DiceOne);
  const [dice2, setDice2] = useState(DiceTwo);

  const diceChange = () => {
    const Dices = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
    let random = Math.floor(Math.random() * Dices.length);
    setDice(Dices[random]);
    let randomtwo = Math.floor(Math.random() * Dices.length);

    setDice2(Dices[randomtwo]);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={diceChange}>
          <Image style={styles.image} source={dice2} />

          <Image style={styles.image} source={dice} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
  },
});
