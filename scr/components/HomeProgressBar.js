import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CaloAllMeal} from '../api/meal/Meal';
import {useSelector} from 'react-redux';
import {CaloNeeded} from '../api/user/Info';
// import { connect } from "react-redux";
// import { getDetails } from "../stores/userDetails";
function HomeProgressBar() {
  const [currentDate, setCurrentDate] = useState('');
  const [calo, setCalo] = useState();
  const [caloEat, setCaloEat] = useState();
  const idUser = useSelector(state => state?.userReducer?.idUser);
  let totalF = 0;
  let total = 0;
  let totalC = 0;
  let totalP = 0;
  let gt = 5;
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + '-' + month + '-' + date);
  }, []);
  //console.log(currentDate);
  useEffect(() => {
    CaloNeeded(idUser, 'GET', null).then(res => {
      setCalo(res.data);
    });
    CaloAllMeal(`ID=${idUser}&Dates=${currentDate}`, 'GET', null).then(res => {
      setCaloEat(res.data);
      //console.log(res.data);
    });
  }, [currentDate, idUser]);
  if (caloEat == null) {
    return null;
  }
  if (calo[0].Sex === 'Nữ') {
    gt = -165;
  }
  for (var i = 0; i < caloEat.length; i++) {
    total += Math.floor((caloEat[i].Calo * caloEat[i].Quantity) / 100);
  }
  for (var i = 0; i < caloEat.length; i++) {
    totalF += Math.floor(caloEat[i].Fat);
  }
  for (var i = 0; i < caloEat.length; i++) {
    totalC += Math.floor(caloEat[i].Carb);
  }
  for (var i = 0; i < caloEat.length; i++) {
    totalP += Math.floor(caloEat[i].Protein);
  }
  let fatP = Math.round(((gt * calo[0].ActivityRate + calo[0].abc) * 0.15) / 9);
  let carbP = Math.round(
    ((gt * calo[0].ActivityRate + calo[0].abc) * 0.55) / 4,
  );
  let proteinP = Math.round(
    ((gt * calo[0].ActivityRate + calo[0].abc) * 0.3) / 4,
  );
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <View style={styles.calories}>
          <View style={styles.infoBox}>
            <Text style={styles.small}>{total}</Text>
            {/*{this.props.allCals}*/}
            <Text>ĐÃ ĂN</Text>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.left}>
              <Text style={styles.large}>
                {Math.round(gt * calo[0].ActivityRate + calo[0].abc) - total}
              </Text>
              {/*{calsLeft}*/}
              <Text>CALO CÒN LẠI</Text>
            </View>
            <View style={styles.progressLayer}>
              <View
                style={{
                  ...styles.progressLayer2,
                  width: `${
                    ((Math.round(gt * calo[0].ActivityRate + calo[0].abc) -
                      total) /
                      Math.round(gt * calo[0].ActivityRate + calo[0].abc)) *
                    100
                  }%`,
                  // ${calsPercent}
                }}
              />
            </View>
          </View>
          {/*<View style={styles.infoBox}>*/}
          {/*  <Text style={styles.small}>0</Text>*/}
          {/*  <Text>BURNED</Text>*/}
          {/*</View>*/}
        </View>
        <View style={styles.macros}>
          <View style={styles.macro}>
            <Text>CHẤT BÉO</Text>
            <View style={styles.fatBar}>
              <View
                style={{...styles.fat2, width: `${(totalF / fatP) * 100}%`}}
              />
              {/*${fatsPercent}*/}
            </View>
            <Text style={styles.centered}>
              {totalF}/{fatP} g còn lại
            </Text>
          </View>
          <View style={styles.macro}>
            <Text>CHẤT ĐẠM</Text>
            <View style={styles.proteinBar}>
              <View
                style={{
                  ...styles.protein2,
                  width: `${(totalP / proteinP) * 100}%`,
                  // ${proteinPercent}
                }}
              />
            </View>
            <Text style={styles.centered}>
              {totalP}/{proteinP} g còn lại
            </Text>
          </View>
          <View style={styles.macro}>
            <Text>TINH BỘT</Text>
            <View style={styles.carbsBar}>
              <View
                style={{...styles.carbs2, width: `${(totalC / carbP) * 100}%`}}
              />
              {/*${carbsPercent}*/}
            </View>
            <Text style={styles.centered}>
              {totalC}/{carbP} g còn lại
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// const mapStateToProps = state => ({
//   dailyCalories: state.details.calories,
//   dailyProtein: state.details.protein,
//   dailyCarbs: state.details.carbs,
//   dailyFats: state.details.fats,
//   allCals: state.meals.total,
//   allProtein: state.meals.protein,
//   allCarbs: state.meals.carbs,
//   allFats: state.meals.fats,
// });
// const mapDispatchToState = dispatch => ({
//   getDetails: () => dispatch(getDetails()),
// });

//export default connect(mapStateToProps, mapDispatchToState)(HomeProgressBar);

export default HomeProgressBar;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: 'rgb(246,244,244)',
    height: '40%',
  },
  info: {
    backgroundColor: 'rgb(248,159,63)',
    height: '100%',
    alignItems: 'center',
  },
  calories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    height: '50%',
    marginTop: 50,
    marginLeft: 15,
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    fontSize: 24,
  },
  large: {
    fontSize: 44,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressLayer: {
    width: 100,
    backgroundColor: 'rgba(255, 255, 255,.2)',
    height: 10,
  },
  progressLayer2: {
    backgroundColor: 'white',
    height: 10,
  },
  macros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  macro: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  fatBar: {
    width: 100,
    backgroundColor: 'rgba(255, 255, 255,.2)',
    height: 10,
  },
  fat2: {
    backgroundColor: 'white',
    height: 10,
  },
  proteinBar: {
    width: 100,
    backgroundColor: 'rgba(255, 255, 255,.2)',
    height: 10,
  },
  protein2: {
    backgroundColor: 'white',
    height: 10,
  },
  carbsBar: {
    width: 100,
    backgroundColor: 'rgba(255, 255, 255,.2)',
    height: 10,
  },
  carbs2: {
    backgroundColor: 'white',
    height: 10,
  },
});
