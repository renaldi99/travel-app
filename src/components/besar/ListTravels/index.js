import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardTravels} from '../../kecil';

const ListTravels = ({categories}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.width} />
        {categories.map((category, index) => {
          return <CardTravels category={category} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ListTravels;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 18,
  },
  width: {width: 30},
});
