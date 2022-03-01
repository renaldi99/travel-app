import {Text, StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import React, {Component} from 'react';
import {BannerImage, Logo} from '../../assets';
import {colors, fonts} from '../../utils';

export default class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#111D1C" />
        <ImageBackground source={BannerImage} style={styles.imageBanner}>
          <View style={styles.overlayBanner} />
          <Logo width="150" />
          <Text style={styles.text}>Make your best trip with us</Text>
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
  imageBanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayBanner: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.3,
  },
  text: {
    fontFamily: fonts.main.robotoReguler,
    fontSize: 18,
    color: colors.white,
  },
});
