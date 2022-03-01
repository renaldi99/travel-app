import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notification Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
