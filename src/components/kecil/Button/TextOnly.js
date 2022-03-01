import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextOnly = ({title, padding, fontSize, onPress, color}) => {
  return (
    <TouchableOpacity
      style={styles.container(padding, color)}
      onPress={onPress}>
      <Text style={styles.textTitle(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: (padding, color) => ({
    backgroundColor: color ? color : colors.colorPrimary,
    padding: padding ? padding : 10,
    borderRadius: 5,
  }),
  textTitle: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.main.robotoReguler,
  }),
});
