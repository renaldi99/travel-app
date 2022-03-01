import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Inputan = ({
  label,
  width,
  height,
  fontSize,
  placehorder,
  value,
  secureTextEntry,
  onChangeText,
  disabled,
  color,
  colorInput,
  fontSizeInput,
  borderColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText(fontSize, color)}>{label} : </Text>
      <TextInput
        style={styles.textInput(
          borderColor,
          fontSizeInput,
          colorInput,
          width,
          height,
        )}
        value={value}
        placehorder={placehorder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        disabled={disabled ? false : true}
      />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  labelText: (fontSize, color) => ({
    fontFamily: fonts.main.robotoReguler,
    fontSize: fontSize ? fontSize : 14,
    color: color ? color : colors.colorPrimary,
    marginBottom: 8,
  }),
  textInput: (borderColor, fontSizeInput, colorInput, width, height) => ({
    width: width,
    height: height,
    fontSize: fontSizeInput ? fontSizeInput : 16,
    fontFamily: fonts.main.regular,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: borderColor ? borderColor : colors.colorPrimary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: colorInput ? colorInput : colors.colorPrimary,
  }),
});
