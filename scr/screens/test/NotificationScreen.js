import React from 'react';
import HomeSectionComponent from '../../components/test/HomeSectionComponent';
import {StyleSheet, View, StatusBar} from 'react-native';

import Header from '../../components/test/HeaderComponent';

const Diary = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title={'Diary'} />
      <View style={styles.bodyContainer}>
        <HomeSectionComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //
  bodyContainer: {
    backgroundColor: '#fff',
  },
  screenContainer: {
    flex: 1,
  },
  calorieRemain: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 26,
    paddingHorizontal: 22,
  },
  textContainer: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
    paddingHorizontal: 12,
  },
});

export default Diary;
