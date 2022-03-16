import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconLeft} from '../../../assets/icons';
import {colors} from '../../../utils';
import TextOnly from './TextOnly';
import ButtonLoading from './ButtonLoading';

const Button = props => {
  const Icon = () => {
    if (icon === 'arrow-left') {
      return <IconLeft />;
    } else {
      return null;
    }
  };

  const {icon, padding, shadow, onPress, type, loading} = props;

  if (loading) {
    return <ButtonLoading {...props} />;
  }

  if (type === 'text') {
    return <TextOnly {...props} />;
  }

  return (
    <TouchableOpacity
      style={styles.container(padding, shadow)}
      onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (padding, shadow) => ({
    backgroundColor: colors.white,
    padding: padding ? padding : 10,
    borderRadius: 5,
    shadowColor: shadow ? '#000' : null,
    shadowOffset: shadow
      ? {
          width: 0,
          height: 2,
        }
      : null,
    shadowOpacity: shadow ? 0.25 : null,
    shadowRadius: shadow ? 3.84 : null,

    elevation: shadow ? 5 : null,
  }),
});
