import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Calories Remaining</Text>
      <View style={styles.numberCalorie}>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>2700</Text>
          <Text style={styles.textCa}>Goal</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>+</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>0</Text>
          <Text style={styles.textCa}>Food</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>=</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>2700</Text>
          <Text style={styles.textCa}>Remaining</Text>
        </View>
      </View>
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
  numberCalorie: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calorie: {
    padding: 10,
    fontSize: 16,
    color: '#2f2f2f',
  },
  textCa: {
    paddingLeft: 12,
    fontSize: 14,
    color: '#2f2f2f',
  },
});

export default HomeSectionComponent;
