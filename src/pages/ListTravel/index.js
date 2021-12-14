import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListTravel = () => {
  return (
    <View style={styles.container}>
      <Text>List Travel Screen</Text>
    </View>
  );
};

export default ListTravel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
