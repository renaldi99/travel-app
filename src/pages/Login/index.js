import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, heightMobileUI, responsiveHeight} from '../../utils';
import {BannerImage, Logo} from '../../assets';
import {Button, Inputan} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      background: BannerImage,
    };
  }
  render() {
    const {email, password, background} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#111D1C" />
        <ImageBackground
          source={background}
          style={styles.backgroundLogin}
          blurRadius={2}>
          <View style={styles.overlayBanner} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.sectionLogo}>
              <Logo width="150" />
            </View>

            <View style={styles.sectionText}>
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.text}>
                Sign in and start tour trip with us
              </Text>
            </View>

            <View style={styles.sectionInput}>
              <Inputan
                label="Email"
                fontSize={18}
                color={colors.white}
                colorInput={colors.white}
                fontSizeInput={16}
                borderColor={colors.white}
                value={email}
                onChangeText={email => this.setState({email})}
              />
              <Inputan
                label="Password"
                fontSize={18}
                color={colors.white}
                colorInput={colors.white}
                fontSizeInput={16}
                borderColor={colors.white}
                value={password}
                onChangeText={password => this.setState({password})}
                secureTextEntry
              />
            </View>

            <View style={{paddingHorizontal: 30}}>
              <Button type="text" title="Login" padding={15} color="#1796DE" />
            </View>
            <View style={styles.sectionRegisterAccount}>
              <Text style={styles.TitleRegisterAccount}>
                Don't have an account?
              </Text>
              <Text
                onPress={() => navigation.navigate('Register')}
                style={styles.TextRegisterAccount}>
                Register
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundLogin: {
    flex: 1,
  },
  sectionLogo: {
    alignItems: 'center',
    marginTop: 50,
  },
  overlayBanner: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  sectionText: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  title: {
    fontFamily: fonts.main.robotoReguler,
    fontSize: 20,
    color: colors.white,
  },
  text: {
    marginTop: 10,
    fontFamily: fonts.main.robotoLight,
    fontSize: 18,
    color: colors.white,
  },
  sectionInput: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  sectionRegisterAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(120),
    marginBottom: 30,
  },
  TitleRegisterAccount: {
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.main.robotoLight,
    color: colors.white,
  },
  TextRegisterAccount: {
    marginLeft: 5,
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.main.robotoReguler,
    color: colors.white,
  },
});
