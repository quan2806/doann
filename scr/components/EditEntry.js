import React, {Component, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  DeleteDetailMeal,
  FoodInMeal,
  UpdateDetailMeal,
} from '../api/meal/DetailMeal';
import {ProfileFood} from '../api/food/FoodInfo';

function EditEntry(props) {
  const [food, setFood] = useState();
  const [servings, setSer] = useState(100);
  const Id = props.route.params.IdDM;
  useEffect(() => {
    FoodInMeal(Id, 'GET', null).then(res => {
      setFood(res.data);
      //console.log(res.data);
    });
  }, []);
  function update() {
    UpdateDetailMeal(`IdB=${Id}&Quantity=${servings}`, 'PUT', null).then(
      res => {
        props.navigation.replace('Diary');
      },
    );
  }
  function deleteDM() {
    DeleteDetailMeal(`IdB=${Id}`, 'PUT', null).then(res => {
      props.navigation.replace('Diary');
    });
  }
  if (food == null) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
          // onPress={() => {
          //   this.props.navigation.navigate('Home');
          // }}
          >
            <Text>Quay lại</Text>
          </TouchableOpacity>
          <Text>Sửa khẩu phần ăn</Text>
          <TouchableOpacity onPress={() => update()}>
            <Text>Xong</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.foodInfo}>
        <View style={styles.type}>
          <Text>Bữa</Text>
          <Text>Sáng</Text>
          {/*{mealType}*/}
        </View>
      </View>
      <View style={styles.food}>
        <Text style={styles.foodname}>{food[0].NameFood}</Text>
        {/*{foodName}*/}
      </View>
      <View style={styles.macros}>
        <View style={styles.cals}>
          <Text style={{fontSize: 24}}>{food[0].Calo}</Text>
          {/*{calories * this.state.servings}*/}
          <Text>calo</Text>
          <View style={styles.bar}>
            <View
              style={{
                ...styles.carbs,
                width: `${Math.floor(
                  ((Math.ceil(food[0]?.Carb) * 4) /
                    Math.ceil(
                      Math.ceil(food[0]?.Protein) * 4 +
                        Math.ceil(food[0]?.Fat) * 9 +
                        Math.ceil(food[0]?.Carb) * 4,
                    )) *
                    100,
                )}%`,
              }}
            />
            {/*${carbsPercent}*/}
            <View
              style={{
                ...styles.fat,
                width: `${Math.floor(
                  ((Math.ceil(food[0]?.Fat) * 9) /
                    Math.ceil(
                      Math.ceil(food[0]?.Protein) * 4 +
                        Math.ceil(food[0]?.Fat) * 9 +
                        Math.ceil(food[0]?.Carb) * 4,
                    )) *
                    100,
                )}%`,
              }}
            />
            {/*${fatPercent}*/}
            <View
              style={{
                ...styles.protein,
                width: `${Math.floor(
                  ((Math.ceil(food[0]?.Protein) * 4) /
                    Math.ceil(
                      Math.ceil(food[0]?.Protein) * 4 +
                        Math.ceil(food[0]?.Fat) * 9 +
                        Math.ceil(food[0]?.Carb) * 4,
                    )) *
                    100,
                )}%`,
              }}
            />
            {/*${proteinPercent}*/}
          </View>
        </View>
        <View style={styles.macro}>
          <Text style={{color: '#67DFE6'}}>
            {Math.floor(
              ((Math.ceil(food[0]?.Carb) * 4) /
                Math.ceil(
                  Math.ceil(food[0]?.Protein) * 4 +
                    Math.ceil(food[0]?.Fat) * 9 +
                    Math.ceil(food[0]?.Carb) * 4,
                )) *
                100,
            )}
            %
          </Text>
          {/*{carbsPercent}%*/}
          <Text>{food[0].Carb}g</Text>
          {/*{carbs * this.state.servings}g*/}
          <Text>Tinh bột</Text>
        </View>
        <View style={styles.macro}>
          <Text style={{color: 'red'}}>
            {Math.floor(
              ((Math.ceil(food[0]?.Fat) * 9) /
                Math.ceil(
                  Math.ceil(food[0]?.Protein) * 4 +
                    Math.ceil(food[0]?.Fat) * 9 +
                    Math.ceil(food[0]?.Carb) * 4,
                )) *
                100,
            )}
            %
          </Text>
          {/*{fatPercent}%*/}
          <Text>{food[0].Fat}</Text>
          {/*{fats * this.state.servings}g*/}
          <Text>Chất béo</Text>
        </View>
        <View style={styles.macro}>
          <Text style={{color: 'purple'}}>
            {Math.floor(
              ((Math.ceil(food[0]?.Protein) * 4) /
                Math.ceil(
                  Math.ceil(food[0]?.Protein) * 4 +
                    Math.ceil(food[0]?.Fat) * 9 +
                    Math.ceil(food[0]?.Carb) * 4,
                )) *
                100,
            )}
            %
          </Text>
          {/*{proteinPercent}%*/}
          <Text>{food[0].Protein}</Text>
          {/*{protein * this.state.servings}g*/}
          <Text>Chất đạm</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.servingContainer}>
        <View style={styles.serving}>
          <Text>Kích thước khẩu phần ăn</Text>
          <Text>100 grams</Text>
          {/*{servingSize}*/}
        </View>
      </TouchableOpacity>
      <View style={styles.servingContainer}>
        <View style={styles.serving}>
          <Text>Lượng ăn</Text>
          {/* should be an input */}
          <TextInput
            style={{
              width: 100,
              height: 20,
              textAlign: 'right',
            }}
            /*{/*{`${servings}`}}*/
            placeholder="100"
            placeholderTextColor="black"
            keyboardType="numeric"
            // onChangeText={text => setSer({servings: text})}
            onChangeText={setSer}
          />
        </View>
      </View>
      <View style={styles.nutrition}>
        <View style={styles.nutriHead}>
          <Text>Giá trị dinh dưỡng</Text>
        </View>
        <View style={styles.nutri}>
          <Text>Lượng calo</Text>
          <Text>{Math.ceil((food[0].Calo * servings) / 100)}</Text>
          {/*{calories * this.state.servings}*/}
        </View>
        <View style={styles.nutri}>
          <Text>Tổng chất béo</Text>
          <Text>{(Math.ceil(food[0]?.Fat) * servings) / 100} g</Text>
          {/*{fats * this.state.servings} g*/}
        </View>
        <View style={styles.nutri}>
          <Text>Tổng tinh bột</Text>
          <Text>{(Math.ceil(food[0]?.Carb) * servings) / 100} g</Text>
          {/*{carbs * this.state.servings} g*/}
        </View>
        <View style={styles.nutri}>
          <Text>Tổng chất đạm</Text>
          <Text>{(Math.ceil(food[0]?.Protein) * servings) / 100} g</Text>
          {/*{protein * this.state.servings} g*/}
        </View>
        <TouchableOpacity style={styles.delete} onPress={() => deleteDM()}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>XOÁ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // <ScrollView style={styles.container}>
    //   <View style={styles.headerContainer}>
    //     <View style={styles.header}>
    //       <TouchableOpacity
    //         onPress={() => {
    //           this.props.navigation.navigate('Home');
    //         }}>
    //         <Text>Back</Text>
    //       </TouchableOpacity>
    //
    //       <Text>Edit Entry</Text>
    //       <TouchableOpacity
    //         onPress={() => {
    //           this.props.navigation.navigate('Home');
    //         }}>
    //         <Text>Done</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   <View style={styles.foodInfo}>
    //     <View style={styles.type}>
    //       <Text>Meal</Text>
    //       <Text>-------</Text>
    //     </View>
    //   </View>
    //   <View style={styles.food}>
    //     <Text style={styles.foodname}>Can't find in Database</Text>
    //     <Text style={styles.brand}>--------</Text>
    //   </View>
    //   <View style={styles.macros}>
    //     <View style={styles.cals}>
    //       <Text style={{fontSize: 24}}>0</Text>
    //       <Text>cal</Text>
    //       <View style={styles.bar}>
    //         <View style={styles.carbs} />
    //         <View style={styles.fat} />
    //         <View style={styles.protein} />
    //       </View>
    //     </View>
    //     <View style={styles.macro}>
    //       <Text style={{color: '#67DFE6'}}>0%</Text>
    //       <Text>0</Text>
    //       <Text>Carbs</Text>
    //     </View>
    //     <View style={styles.macro}>
    //       <Text style={{color: 'red'}}>0%</Text>
    //       <Text>0g</Text>
    //       <Text>Fat</Text>
    //     </View>
    //     <View style={styles.macro}>
    //       <Text style={{color: 'purple'}}>0%</Text>
    //       <Text>0g</Text>
    //       <Text>Protein</Text>
    //     </View>
    //   </View>
    //   <TouchableOpacity style={styles.servingContainer}>
    //     <View style={styles.serving}>
    //       <Text>Serving Size</Text>
    //       <Text>0</Text>
    //     </View>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.servingContainer}>
    //     <View style={styles.serving}>
    //       <Text>Number of Servings</Text>
    //       <Text>0</Text>
    //     </View>
    //   </TouchableOpacity>
    //   <View style={styles.nutrition}>
    //     <View style={styles.nutriHead}>
    //       <Text>Nutrition Facts</Text>
    //     </View>
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '95%',
  },
  foodInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(230,230,230)',
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  food: {
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    height: 90,
    borderBottomColor: 'rgb(230,230,230)',
    alignItems: 'center',
  },
  foodname: {
    fontSize: 16,
    fontWeight: '400',
    width: '95%',
  },
  brand: {
    fontWeight: '200',
    fontSize: 12,
    width: '95%',
  },
  macros: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
  },
  bar: {
    height: 10,
    width: 80,
    flexDirection: 'row',
  },
  carbs: {
    height: 10,
    backgroundColor: 'rgb(103, 223, 230)',
  },
  fat: {
    height: 10,
    backgroundColor: 'red',
  },
  protein: {
    height: 10,
    backgroundColor: 'purple',
  },
  cals: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 70,
  },
  macro: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 70,
  },
  servingContainer: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(230,230,230)',
    height: 50,
    justifyContent: 'center',
  },
  serving: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  nutrition: {
    height: 700,
  },
  nutriHead: {
    backgroundColor: 'rgb(230,230,230)',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nutri: {
    height: '8%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    marginLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(230,230,230)',
  },
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: '10%',
  },
});

export default EditEntry;

// const mapDispatchToProps = dispatch => ({
//   getItem: (foodId, meal, date) => {
//     return dispatch(getSingleItem(foodId, meal, date));
//   },
//   editItem: (foodId, meal, date, servings) => {
//     return dispatch(editItem(foodId, meal, date, servings));
//   },
//   deleteItem: (foodId, meal, date) => {
//     return dispatch(deleteItem(foodId, meal, date));
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);
