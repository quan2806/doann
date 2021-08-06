import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ProfileFood} from '../api/food/FoodInfo';
import {InsertDM, InsertDMNew} from '../api/meal/DetailMeal';
import {useSelector} from 'react-redux';
function SingleFood(props) {
  const IdFood = props.route.params.IdF;
  const IdM = props.route.params.IdM;
  const Meal = props.route.params.Meal;
  const date = props.route.params.date;
  var NameMeal = '';
  if (Meal == 'Bữa sáng') {
    NameMeal = 'breakfast';
  } else if (Meal == 'Bữa trưa') {
    NameMeal = 'lunch';
  } else if (Meal == 'Bữa tối') {
    NameMeal = 'dinner';
  }
  const [data, setData] = useState();
  const [servings, setSer] = useState(100);
  const idUser = useSelector(state => state?.userReducer?.idUser);
  useEffect(() => {
    ProfileFood(IdFood, 'GET', null).then(res => {
      setData(res.data);
      //console.log(res.data);
    });
  }, []);
  function insert() {
    if (IdM == 0) {
      InsertDMNew(
        `Id=${idUser}&Name=${NameMeal}&Dates=${date}&IdFood=${IdFood}&Quantity=${servings}`,
        'POST',
        null,
      ).then(res => {
        if (res?.status == 200) {
          props.navigation.replace('Diary');
        } else {
          alert('Lỗi');
        }
      });
    } else {
      InsertDM(
        `IdMeal=${IdM}&IdFood=${IdFood}&Quantity=${servings}`,
        'POST',
        null,
      ).then(res => {
        props.navigation.replace('Diary');
      });
    }
  }
  if (data == null) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SearchPage');
            }}>
            <Text>Quay lại</Text>
          </TouchableOpacity>
          <Text>Thêm khẩu phần ăn</Text>
          <TouchableOpacity onPress={() => insert()}>
            <Text>Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.foodInfo}>
        <View style={styles.type}>
          <Text>Bữa</Text>
          <Text>Bữa sáng</Text>
        </View>
      </View>
      <View style={styles.food}>
        <Text style={styles.foodname}>{data[0].NameFood}</Text>
      </View>
      <View style={styles.macros}>
        <View style={styles.cals}>
          <Text style={{fontSize: 24}}>{data[0].Calo}</Text>
          <Text>Calo</Text>
          <View style={styles.bar}>
            <View
              style={{
                ...styles.carbs,
                width: `${Math.floor(
                  ((Math.ceil(data[0]?.Carb) * 4) /
                    Math.ceil(
                      Math.ceil(data[0]?.Protein) * 4 +
                        Math.ceil(data[0]?.Fat) * 9 +
                        Math.ceil(data[0]?.Carb) * 4,
                    )) *
                    100,
                )}%`,
              }}
            />
            <View
              style={{
                ...styles.fat,
                width: `${Math.floor(
                  ((Math.ceil(data[0]?.Fat) * 9) /
                    Math.ceil(
                      Math.ceil(data[0]?.Protein) * 4 +
                        Math.ceil(data[0]?.Fat) * 9 +
                        Math.ceil(data[0]?.Carb) * 4,
                    )) *
                    100,
                )}%`,
              }}
            />
            <View
              style={{
                ...styles.protein,
                width: `${Math.floor(
                  ((Math.ceil(data[0]?.Protein) * 4) /
                    Math.ceil(
                      Math.ceil(data[0]?.Protein) * 4 +
                        Math.ceil(data[0]?.Fat) * 9 +
                        Math.ceil(data[0]?.Carb) * 4,
                    )) *
                    100,
                )}%`,
              }}
            />
          </View>
        </View>
        <View style={styles.macro}>
          <Text style={{color: 'rgb(103, 223, 230)'}}>
            {Math.floor(
              ((Math.ceil(data[0]?.Carb) * 4) /
                Math.ceil(
                  Math.ceil(data[0]?.Protein) * 4 +
                    Math.ceil(data[0]?.Fat) * 9 +
                    Math.ceil(data[0]?.Carb) * 4,
                )) *
                100,
            )}
            %
          </Text>
          <Text>{Math.ceil(data[0]?.Carb)}g</Text>
          <Text>Tinh bột</Text>
        </View>
        <View style={styles.macro}>
          <Text style={{color: 'red'}}>
            {Math.floor(
              ((Math.ceil(data[0]?.Fat) * 9) /
                Math.ceil(
                  Math.ceil(data[0]?.Protein) * 4 +
                    Math.ceil(data[0]?.Fat) * 9 +
                    Math.ceil(data[0]?.Carb) * 4,
                )) *
                100,
            )}
            %
          </Text>
          <Text>{Math.ceil(data[0]?.Fat)}g</Text>
          <Text>Chất béo</Text>
        </View>
        <View style={styles.macro}>
          <Text style={{color: 'purple'}}>
            {Math.floor(
              ((Math.ceil(data[0]?.Protein) * 4) /
                Math.ceil(
                  Math.ceil(data[0]?.Protein) * 4 +
                    Math.ceil(data[0]?.Fat) * 9 +
                    Math.ceil(data[0]?.Carb) * 4,
                )) *
                100,
            )}
            %
          </Text>
          <Text>{Math.ceil(data[0]?.Protein)}g</Text>
          <Text>Chất đạm</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.servingContainer}>
        <View style={styles.serving}>
          <Text>Kích thước khẩu phần ăn</Text>
          <Text>100 grams</Text>
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
          <Text>Lượng Calo</Text>
          <Text>{Math.ceil((data[0].Calo * servings) / 100)}</Text>
        </View>
        <View style={styles.nutri}>
          <Text>Tổng chất béo</Text>
          <Text>{(Math.ceil(data[0]?.Fat) * servings) / 100} g</Text>
        </View>
        <View style={styles.nutri}>
          <Text>Tổng tinh bột</Text>
          <Text>{(Math.ceil(data[0]?.Carb) * servings) / 100} g</Text>
        </View>
        <View style={styles.nutri}>
          <Text>Tổng chất đạm</Text>
          <Text>{(Math.ceil(data[0]?.Protein) * servings) / 100} g</Text>
        </View>
      </View>
    </ScrollView>
    // ) : (
    //   <ScrollView style={styles.container}>
    //     <View style={styles.headerContainer}>
    //       <View style={styles.header}>
    //         <TouchableOpacity
    //           onPress={() => {
    //             this.props.navigation.navigate('Home');
    //           }}>
    //           <Text>Back</Text>
    //         </TouchableOpacity>
    //
    //         <Text>Edit Entry</Text>
    //         <TouchableOpacity
    //           onPress={() => {
    //             this.props.navigation.navigate('Home');
    //           }}>
    //           <Text>Done</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //     <View style={styles.foodInfo}>
    //       <View style={styles.type}>
    //         <Text>Meal</Text>
    //         <Text>-------</Text>
    //       </View>
    //     </View>
    //     <View style={styles.food}>
    //       <Text style={styles.foodname}>Can't find in Database</Text>
    //       <Text style={styles.brand}>--------</Text>
    //     </View>
    //     <View style={styles.macros}>
    //       <View style={styles.cals}>
    //         <Text style={{fontSize: 24}}>0</Text>
    //         <Text>cal</Text>
    //         <View style={styles.bar}>
    //           <View style={styles.carbs} />
    //           <View style={styles.fat} />
    //           <View style={styles.protein} />
    //         </View>
    //       </View>
    //       <View style={styles.macro}>
    //         <Text style={{color: 'rgb(103, 223, 230)'}}>0%</Text>
    //         <Text>0</Text>
    //         <Text>Carbs</Text>
    //       </View>
    //       <View style={styles.macro}>
    //         <Text style={{color: 'red'}}>0%</Text>
    //         <Text>0g</Text>
    //         <Text>Fat</Text>
    //       </View>
    //       <View style={styles.macro}>
    //         <Text style={{color: 'purple'}}>0%</Text>
    //         <Text>0g</Text>
    //         <Text>Protein</Text>
    //       </View>
    //     </View>
    //     <TouchableOpacity style={styles.servingContainer}>
    //       <View style={styles.serving}>
    //         <Text>Serving Size</Text>
    //         <Text>0</Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.servingContainer}>
    //       <View style={styles.serving}>
    //         <Text>Number of Servings</Text>
    //         <Text>0</Text>
    //       </View>
    //     </TouchableOpacity>
    //     <View style={styles.nutrition}>
    //       <View style={styles.nutriHead}>
    //         <Text>Nutrition Facts</Text>
    //       </View>
    //     </View>
    //   </ScrollView>
  );
}

// const mapStateToProps = state => ({
//   singleFood: state.singleFood,
//   date: state.date.numberdate,
// });

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SingleFood);
export default SingleFood;

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
    fontSize: 20,
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
});
