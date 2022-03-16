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
import {registerUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';
import FIREBASE from '../../config/FIREBASE';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      noHp: '',
      background: BannerImage,
    };
  }

  onSubmit = () => {
    const {email, password, name, noHp} = this.state;
    const {dispatch} = this.props;

    if (email === '' || password === '' || name === '' || noHp === '') {
      alert('Data tidak boleh kosong');
    } else {
      const data = {
        name: name,
        email: email,
        noHp: noHp,
      };

      dispatch(registerUser(data, password));
    }
  };

  componentDidUpdate = prevProps => {
    const {navigation, registerUserResult} = this.props;

    if (
      registerUserResult &&
      prevProps.registerUserResult !== registerUserResult
    ) {
      navigation.replace('MainApp');
    }
  };

  render() {
    const {email, password, name, noHp, background} = this.state;
    const {navigation, registerUserLoading} = this.props;
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
              <Text style={styles.title}>Here You Go</Text>
              <Text style={styles.text}>
                Sign up and start tour trip with us
              </Text>
            </View>

            <View style={styles.sectionInput}>
              <Inputan
                label="Name"
                fontSize={18}
                color={colors.white}
                colorInput={colors.white}
                fontSizeInput={16}
                borderColor={colors.white}
                value={name}
                onChangeText={name => this.setState({name})}
              />
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
                label="Number Phone"
                fontSize={18}
                color={colors.white}
                colorInput={colors.white}
                fontSizeInput={16}
                borderColor={colors.white}
                value={noHp}
                onChangeText={noHp => this.setState({noHp})}
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
              <Button
                type="text"
                title="Register"
                padding={15}
                color="#1796DE"
                onPress={() => this.onSubmit()}
                loading={registerUserLoading}
              />
            </View>
            <View style={styles.sectionRegisterAccount}>
              <Text style={styles.TitleRegisterAccount}>Have an account?</Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={styles.TextRegisterAccount}>
                Login
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  registerUserLoading: state.AuthReducer.registerUserLoading,
  registerUserResult: state.AuthReducer.registerUserResult,
  registerUserError: state.AuthReducer.registerUserError,
});

export default connect(mapStateToProps, null)(Register);

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
    fontFamily: fonts.main.robotoBold,
    fontSize: 20,
    color: colors.white,
  },
  text: {
    marginTop: 10,
    fontFamily: fonts.main.robotoLight,
    fontSize: 14,
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
