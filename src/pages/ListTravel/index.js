import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {IconMic, IconSearch} from '../../assets';
import {colors, fonts} from '../../utils';
import {DataCategory} from '../../data';
import {ListTravels} from '../../components';

export default class ListTravel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: DataCategory,
    };
  }
  render() {
    const {category} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sectionSearchBar}>
          <View style={styles.searchBar}>
            <IconSearch />
            <TextInput style={styles.inputSearch} placeholder="Search..." />
          </View>
          <TouchableOpacity style={styles.iconMic}>
            <IconMic />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCategory}>
          <Text style={styles.titleCategory}>Category</Text>
        </View>
        <ListTravels categories={category} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  sectionCategory: {
    paddingHorizontal: 30,
  },
  titleCategory: {
    fontFamily: fonts.main.robotoMedium,
    fontSize: 18,
    color: colors.black,
  },
});
