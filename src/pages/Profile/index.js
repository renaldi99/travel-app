import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {ListMenu} from '../../components';
import {DataMenu, DataUser} from '../../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts, heightMobileUI, responsiveHeight} from '../../utils';
import {IconLeft, IconSignOut} from '../../assets';
import FIREBASE from '../../config/FIREBASE';
import {clearStorage, getData} from '../../utils/localStorage';
import {DefaultImage} from '../../assets/images/index';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataUser: false,
      dataMenu: DataMenu,
    };
  }

  logout = () => {
    const {navigation} = this.props;
    Alert.alert('Warning', 'Are you sure want to sign out ?', [
      {
        text: 'No',
        onPress: () => null,
        styles: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () =>
          FIREBASE.auth()
            .signOut()
            .then(() => {
              clearStorage();
              navigation.replace('Login');
            })
            .catch(error => {
              alert(error);
            }),
      },
    ]);
  };

  componentDidMount = () => {
    getData('user').then(res => {
      const data = res;
      console.log(data);

      if (data) {
        this.setState({
          dataUser: data,
        });
      } else {
        // alert not login
      }
    });
  };

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
          <Image
            style={styles.sectionImageProfile}
            source={dataUser.avatar ? dataUser.avatar : DefaultImage}
          />
          <Text style={styles.textName}>
            {dataUser.nama ? dataUser.nama : 'Guest'}
          </Text>
          <View style={styles.sectionInfo}>
            <Text style={styles.textNumber}>
              {dataUser.nomorHp ? dataUser.nomorHp : ''}
            </Text>
            {dataUser ? <View style={styles.line} /> : null}
            <Text style={styles.textEmail}>
              {dataUser.email ? dataUser.email : ''}
            </Text>
          </View>
          {dataUser ? (
            <TouchableOpacity style={styles.buttonMenuEdit}>
              <Text style={styles.textEditProfile}>Edit Profile</Text>
            </TouchableOpacity>
          ) : (
            <Text>Please Login</Text>
          )}
        </View>

        <ListMenu menus={dataMenu} navigation={navigation} />

        <TouchableOpacity
          style={styles.buttonMenuSignOut}
          onPress={() => this.logout()}>
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
