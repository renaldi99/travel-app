import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, ListMenu} from '../../components';
import {DataMenu, DataUser} from '../../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts, heightMobileUI, responsiveHeight} from '../../utils';
import {get} from 'react-native/Libraries/Utilities/PixelRatio';
import {IconLeft, IconSignOut} from '../../assets';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataUser: DataUser,
      dataMenu: DataMenu,
    };
  }

  render() {
    const {navigation} = this.props;
    const {dataUser, dataMenu} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sectionHeading}>
          <TouchableOpacity>
            <IconLeft />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionProfile}>
          <Image style={styles.sectionImageProfile} source={dataUser.avatar} />
          <Text style={styles.textName}>{dataUser.nama}</Text>
          <View style={styles.sectionInfo}>
            <Text style={styles.textNumber}>{dataUser.nomorHp}</Text>
            <View style={styles.line} />
            <Text style={styles.textEmail}>{dataUser.email}</Text>
          </View>
          <TouchableOpacity style={styles.buttonMenuEdit}>
            <Text style={styles.textEditProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <ListMenu menus={dataMenu} navigation={navigation} />

        <TouchableOpacity
          style={styles.buttonMenuSignOut}
          onPress={() => navigation.navigate('Login')}>
          <IconSignOut />
          <Text style={styles.textSignOut}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionHeading: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
  },
  sectionProfile: {
    alignItems: 'center',
    marginTop: 60,
  },
  sectionImageProfile: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  textName: {
    fontSize: RFValue(18, responsiveHeight(heightMobileUI)),
    fontFamily: fonts.main.robotoMedium,
    color: colors.black,
    marginTop: 22,
  },
  sectionInfo: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
  },
  line: {
    height: 20,
    borderWidth: 0.5,
    marginHorizontal: 10,
  },
  textNumber: {
    fontSize: RFValue(14, responsiveHeight(heightMobileUI)),
    fontFamily: fonts.main.robotoReguler,
    color: colors.black,
  },
  textEmail: {
    fontSize: RFValue(14, responsiveHeight(heightMobileUI)),
    fontFamily: fonts.main.robotoReguler,
    color: colors.black,
  },
  buttonMenuEdit: {
    marginTop: 15,
    backgroundColor: colors.colorPrimary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textEditProfile: {
    fontSize: RFValue(14, responsiveHeight(heightMobileUI)),
    fontFamily: fonts.main.robotoReguler,
    color: colors.white,
  },
  buttonMenuSignOut: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 30,
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  textSignOut: {
    fontSize: RFValue(14, responsiveHeight(heightMobileUI)),
    fontFamily: fonts.main.robotoReguler,
    color: colors.black,
    marginLeft: 10,
  },
});
