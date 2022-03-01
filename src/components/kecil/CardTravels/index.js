import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const CardTravels = ({category}) => {
  return (
    <TouchableOpacity
      style={styles.container(category.colorCard)}
      onPress={() =>
        ToastAndroid.show('Anda Klik ' + category.name, ToastAndroid.SHORT)
      }>
      <View style={styles.wrapperContent}>
        {category.icon}
        <Text style={styles.textCategory}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTravels;

const styles = StyleSheet.create({
  container: colorCard => ({
    backgroundColor: colorCard ? colorCard : colors.colorPrimary,
    marginRight: 12,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  }),
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCategory: {
    marginLeft: 5,
    color: colors.white,
  },
});
