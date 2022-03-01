import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconRight} from '../../../assets/icons';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts, heightMobileUI, responsiveHeight} from '../../../utils';

const CardMenu = ({menu, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.SectionButtonMenu}
      onPress={() => navigation.navigate(menu.halaman)}>
      <View style={styles.sectionIconName}>
        {menu.icon}
        <Text style={styles.menuName}>{menu.name}</Text>
      </View>
      <IconRight />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  SectionButtonMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  sectionIconName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuName: {
    marginLeft: 15,
    fontSize: RFValue(14, responsiveHeight(heightMobileUI)),
    fontFamily: fonts.main.robotoReguler,
    color: colors.black,
  },
});
