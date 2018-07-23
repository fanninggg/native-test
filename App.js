import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#1D8618', justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.leftTramline}></View>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://i.imgur.com/1ZmmNwY.png'}}
        />
        <View style={styles.rightTramline}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
    alignItems: 'flex-start',
    padding: 20,
  },
  para: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftTramline: {
    flex: 1,
    backgroundColor: '#fff',
    width: 20,
    height: '100%',
    position: 'absolute',
    left: 15
  },
  rightTramline: {
    flex: 1,
    backgroundColor: '#fff',
    width: 20,
    height: '100%',
    position: 'absolute',
    right: 15
  }
});
