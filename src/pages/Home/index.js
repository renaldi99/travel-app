import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IconMic,
  IconSearch,
  IconStarReview,
  ProfileImage,
  IconNotification,
} from '../../assets';
import {BannerSlider} from '../../components';
import {DataCategory, DataPopular, DataTravel} from '../../data';
import {colors, fonts} from '../../utils';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: DataPopular,
      category: DataCategory,
      travel: DataTravel,
    };
  }

  render() {
    const {popular, category, travel} = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar backgroundColor="#BDBDBD" />
        <View style={styles.sectionHeader}>
          <View style={styles.textHeader}>
            <Text style={styles.titleHeaderName}>Hello, Renaldi 👋</Text>
            <Text style={styles.textBot}>Explore the beautiful world!</Text>
          </View>
          <View style={styles.sectionHeaderRight}>
            <TouchableOpacity>
              <IconNotification />
            </TouchableOpacity>
            <Image style={styles.imageProfile} source={ProfileImage} />
          </View>
        </View>

        <BannerSlider />
        <View style={styles.sectionSearchBar}>
          <View style={styles.searchBar}>
            <IconSearch />
            <TextInput style={styles.inputSearch} placeholder="Search..." />
          </View>
          <TouchableOpacity style={styles.iconMic}>
            <IconMic />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionPopularTravel}>
          <View style={styles.textPopularTravel}>
            <Text style={styles.titleLeftopular}>Popular Destination</Text>
            <Text style={styles.titleRightPopular}>See all</Text>
          </View>

          <FlatList
            data={popular}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.containerCardPopular}>
                <Image style={styles.imageCardPopular} source={item.image} />
                <View style={styles.sectionContentPopular}>
                  <Text style={styles.titlePopular}>{item.title}</Text>
                  <View style={styles.contentBottom}>
                    <View style={styles.wrapperReview}>
                      <IconStarReview />
                      <Text style={styles.textReview}>4.8 (20 Review)</Text>
                    </View>
                    <Text style={styles.textPrice}>${item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.sectionCategory}>
          <Text style={styles.titleCategory}>Category</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.wrapperCategory}>
          <View style={styles.spaceWidth} />
          {category.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.containerCardCategory(item.colorCard)}
                key={index}>
                <View style={styles.wrapperContentCategory}>
                  {item.icon}
                  <Text style={styles.textCategory}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.containerListTravel}>
          <Text style={styles.textTitleListTravel}>We’ve Prepared For You</Text>
          {travel.map((item, index) => {
            return (
              <TouchableOpacity style={styles.containerCardTravel} key={index}>
                <Image style={styles.imageTravel} source={item.image} />
                <Text style={styles.titleCardTravel}>{item.title}</Text>
                <Text style={styles.contentCardTravel}>{item.content}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{height: 30}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 30,
  },
  sectionHeader: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeaderName: {
    fontFamily: fonts.main.robotoMedium,
    fontSize: 18,
    color: colors.black,
  },
  textBot: {
    fontSize: 16,
    fontFamily: fonts.main.robotoReguler,
    marginTop: 4,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 10,
  },
  sectionSearchBar: {
    marginHorizontal: 30,
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.whiteGrey,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSearch: {
    marginLeft: 10,
    fontFamily: fonts.main.robotoReguler,
    fontSize: 16,
  },
  sectionPopularTravel: {},
  textPopularTravel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  titleLeftopular: {
    fontFamily: fonts.main.robotoMedium,
    fontSize: 18,
    color: colors.black,
  },
  titleRightPopular: {
    fontFamily: fonts.main.robotoMedium,
    fontSize: 16,
    color: colors.colorPrimary,
  },
  containerCardPopular: {
    marginLeft: 30,
    marginTop: 18,
    marginBottom: 30,
    width: 300,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: '#909090',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 7,
  },
  imageCardPopular: {
    width: '100%',
    height: 180,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  sectionContentPopular: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titlePopular: {
    color: colors.black,
    fontFamily: fonts.main.robotoMedium,
  },
  contentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  wrapperReview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textReview: {
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.main.robotoMedium,
    marginLeft: 10,
  },
  textPrice: {
    color: colors.colorPrimary,
    fontFamily: fonts.main.robotoMedium,
    fontSize: 18,
  },
  sectionCategory: {
    paddingHorizontal: 30,
  },
  titleCategory: {
    fontFamily: fonts.main.robotoMedium,
    fontSize: 18,
    color: colors.black,
  },
  spaceWidth: {
    width: 30,
  },
  wrapperCategory: {
    flexDirection: 'row',
  },
  containerCardCategory: colorCard => ({
    marginTop: 18,
    marginRight: 12,
    backgroundColor: colorCard ? colorCard : colors.whiteGrey,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  }),
  wrapperContentCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCategory: {
    marginLeft: 5,
    color: colors.white,
  },
  containerListTravel: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  textTitleListTravel: {
    color: colors.black,
    fontFamily: fonts.main.robotoMedium,
    fontSize: 18,
    marginBottom: 18,
  },
  containerCardTravel: {
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imageTravel: {
    width: '100%',
  },
  titleCardTravel: {
    position: 'absolute',
    color: colors.white,
    top: 30,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: fonts.main.robotoMedium,
  },
  contentCardTravel: {
    position: 'absolute',
    color: colors.white,
    bottom: 30,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: fonts.main.robotoMedium,
  },
});
