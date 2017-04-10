import React, { Component } from 'react';

import { 
    AppRegistry,
    Text,
    StyleSheet,
    Vibration,
    TouchableHighlight
    } 
  from 'react-native';

import Sound from 'react-native-sound';

// playback in silence mode

Sound.setCategory('Playback');

const styles = StyleSheet.create({
  button: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 70,
    textAlign: 'center',
    paddingTop: 200,
    paddingBottom: 300,
  }
});

const blop = new Sound('blop.wav', Sound.MAIN_BUNDLE, (error) => {
  if(error) {
    console.log('failed to load the sound ' + error);
    return;
  }
});

class ActionButton extends Component {
  _onPressButton() {
    console.log("You tapped the button!");
    blop.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    Vibration.vibrate();
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text style={styles.button}>
          Touch
        </Text>
      </TouchableHighlight>
    );
  };
}

AppRegistry.registerComponent('reactnatclicker', () => ActionButton);