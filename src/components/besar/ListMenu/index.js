import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardMenu} from '../../kecil';

const ListMenu = ({menus, navigation}) => {
  return (
    <View style={styles.container}>
      {menus.map(menu => {
        return <CardMenu menu={menu} key={menu.id} navigation={navigation} />;
      })}
    </View>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
