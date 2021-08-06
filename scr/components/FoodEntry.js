import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ProfileFood} from '../api/food/FoodInfo';

function FoodEntry({item, navigation}) {
  // const {foodName, servings, calories} = props.food;
  // const total = Math.floor(servings * calories);

  const [food, setFood] = useState();
  useEffect(() => {
    ProfileFood(item.IdFood, 'GET', null).then(res => {
      setFood(res.data);
      //console.log(res.data);
    });
  }, []);
  if (food == null) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EditEntry', {
          //meal: props.food.mealType,
          IdDM: item.IdB,
          // date: props.food.date,
        })
      }>
      <View style={styles.foodContainer}>
        <View style={styles.food}>
          <View style={styles.foodInfo}>
            <Text style={styles.foodname}>{item.NameFood}</Text>
            <Text style={styles.xsmall}>
              {item.Quantity} g {/*2 serving,*/}
              {food[0].Calo} cals
            </Text>
            {/*{`${servings} serving(s), ${calories}cals`}*/}
          </View>
          <Text style={styles.cals}>
            {(food[0].Calo * item.Quantity) / 100}
          </Text>
          {/*{`${total}`}*/}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  foodContainer: {
    borderColor: 'grey',
    borderWidth: 0.5,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  food: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  foodName: {
    fontSize: 14,
    fontWeight: '700',
  },
  xsmall: {
    fontSize: 12,
    fontWeight: '300',
  },
});

export default FoodEntry;
