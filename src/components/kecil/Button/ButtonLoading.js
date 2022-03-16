import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors, fonts} from '../../../utils';

const TextOnly = ({padding, fontSize, onPress, color}) => {
  return (
    <TouchableOpacity
      style={styles.container(padding, color)}
      onPress={onPress}>
      <ActivityIndicator size="small" color={colors.white} />
      <Text style={styles.textTitle(fontSize)}>Loading ...</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: (padding, color) => ({
    backgroundColor: color ? color : colors.colorPrimary,
    padding: padding ? padding : 10,
    borderRadius: 5,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  }),
  textTitle: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    color: colors.white,
    fontFamily: fonts.main.robotoReguler,
    marginLeft: 10,
  }),
});
