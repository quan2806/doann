import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const Meal = props => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
    paddingTop: 8,
  },
});
export default Meal;
