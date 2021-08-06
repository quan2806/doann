import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {AllFood, ProfileFood} from '../api/food/FoodInfo';
function Item({item1, navigation, IdM, Meal, date}) {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.resultContainer}
        onPress={async () => {
          navigation.navigate('SingleFood', {
            IdM: IdM,
            IdF: item1.IdFood,
            Meal: Meal,
            date: date,
          });
        }}>
        <View style={{width: '86%'}}>
          <Text style={{width: '70%'}} numberOfLines={1} ellipsizeMode="tail">
            {item1.NameFood}
          </Text>
        </View>
        <Text>{item1?.Calo}</Text>
      </TouchableOpacity>
    </View>
  );
}
function Result({navigation, IdM, Meal, date, search}) {
  const [food, setFood] = useState();
  const [servings, setSer] = useState(1);
  useEffect(() => {
    AllFood('', 'GET', null).then(res => {
      setFood(res.data);
    });
  }, []);
  if (food == null) {
    return null;
  }
  return (
    <FlatList
      data={food.filter(value => {
        return value?.NameFood.includes(search);
      })}
      renderItem={({item}) => {
        return (
          <Item
            navigation={navigation}
            item1={item}
            IdM={IdM}
            Meal={Meal}
            date={date}
          />
        );
      }}
      keyExtractor={item => item.IdFood}
    />
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    top: '2%',
    flexDirection: 'row',
    height: 50,
  },
});

export default Result;
