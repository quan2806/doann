import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import FoodEntry from '../FoodEntry';
import {DetailMeal} from '../../api/meal/DetailMeal';
import {useSelector} from 'react-redux';

function Meal(props) {
  const meal = props.meal;
  const idM = props.idM;
  const date = props.date;
  //console.log(props);
  let total = 0;
  const [foodM, setFoodM] = useState();
  useEffect(() => {
    DetailMeal(idM, 'GET', null).then(res => {
      setFoodM(res.data);
      //console.log(res.data);
    });
  }, [idM]);
  if (foodM == null) {
    return null;
  }
  for (var i = 0; i < foodM.length; i++) {
    total += Math.floor((foodM[i].Calo * foodM[i].Quantity) / 100);
  }
  return (
    <View>
      <View style={styles.mealContainer}>
        <View style={styles.meal}>
          <Text style={styles.mealTitle}>{`${meal}`}</Text>
          <Text style={styles.totalcals}>{`${total}`}</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={foodM}
          renderItem={({item}) => {
            return <FoodEntry navigation={props.navigation} item={item} />;
          }}
          keyExtractor={item => item.IdMeal}
        />
      </View>
      <View style={styles.addfood}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.push('SearchPage', {
              IdM: idM,
              Meal: meal,
              date: date,
            });
          }}>
          <Text>+ THÊM THỨC ĂN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Meal;
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
  addfood: {
    height: 40,
    justifyContent: 'center',
    marginLeft: 10,
  },
  mealContainer: {
    backgroundColor: '#ffffff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  meal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  mealTitle: {
    fontSize: 20,
  },
});
