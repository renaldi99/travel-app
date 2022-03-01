import {Text, StyleSheet, View, StatusBar} from 'react-native';
import React, {Component} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {BannerSlide1, BannerSlide2} from '../../../assets';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [BannerSlide1, BannerSlide2],
    };
  }
  render() {
    const {images} = this.state;
    return (
      <View style={styles.container}>
        <SliderBox
          images={images}
          sliderBoxHeight={responsiveHeight(180)}
          autoplay
          circleLoop
          ImageComponentStyle={styles.slider}
          dotColor={colors.yellow}
          dotStyle={styles.dotStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  dotStyle: {
    height: 8,
    width: 8,
  },
  slider: {
    borderRadius: 10,
    width: responsiveWidth(355),
  },
});
