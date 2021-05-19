import React from 'react';
import HomeSectionComponent from '../../components/test/HomeSectionComponent';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import Header from '../../components/test/HeaderComponent';
import Meal from '../../components/test/MealComponent';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title={'Home'} />
      <View style={styles.bodyContainer}>
        <HomeSectionComponent />
        <ScrollView>
          <Meal text={'Breakfast'}></Meal>
          <Meal text={'Lunch'}></Meal>
        </ScrollView>
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

export default HomeScreen;
