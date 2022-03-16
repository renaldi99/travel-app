import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconBookmark,
  IconBookmarkActive,
  IconHome,
  IconHomeActive,
  IconList,
  IconListActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';

const TabItem = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'ListTravel') {
      return isFocused ? <IconListActive /> : <IconList />;
    }
    if (label === 'Bookmark') {
      return isFocused ? <IconBookmarkActive /> : <IconBookmark />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }

    return;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
