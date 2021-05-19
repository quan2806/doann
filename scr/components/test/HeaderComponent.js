import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.cartContainer}>
        <View style={styles.cartIcon} />
      </View>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.cartContainer}>
        <View style={styles.cartIcon} />
      </View>
    </View>
  );
};

const HEADER_ICON_SIZE = 24;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#ec6b09',
    justifyContent: 'space-between',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: '#ededed',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Header;
