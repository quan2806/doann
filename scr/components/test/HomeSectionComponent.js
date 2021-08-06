import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import {CaloNeeded} from '../../api/user/Info';
import {useSelector} from 'react-redux';
import {CaloAllMeal} from '../../api/meal/Meal';

const HomeSectionComponent = props => {
  const [calo, setCalo] = useState();
  const [caloEat, setCaloEat] = useState();
  const date = props.date;
  const idUser = useSelector(state => state?.userReducer?.idUser);
  let gt = 5;
  let total = 0;
  //console.log(date);
  useEffect(() => {
    CaloNeeded(idUser, 'GET', null).then(res => {
      setCalo(res.data);
    });
    CaloAllMeal(`ID=${idUser}&Dates=${date}`, 'GET', null).then(res => {
      setCaloEat(res.data);
      //console.log(res.data);
    });
  }, [date, idUser]);
  if (caloEat == null) {
    return null;
  }
  if (calo[0].Sex === 'Nữ') {
    gt = -165;
  }
  for (var i = 0; i < caloEat.length; i++) {
    total += Math.floor((caloEat[i].Calo * caloEat[i].Quantity) / 100);
  }
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Lượng calo còn lại</Text>
      <View style={styles.numberCalorie}>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>
            {Math.round(gt * calo[0].ActivityRate + calo[0].abc)}
          </Text>
          <Text style={styles.textCa}>Mục tiêu</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>-</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>{total}</Text>
          <Text style={styles.textCa}>Đã ăn</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>=</Text>
        </View>
        <View style={styles.caloContainer}>
          <Text style={styles.calorie}>
            {Math.round(gt * calo[0].ActivityRate + calo[0].abc) - total}
          </Text>
          <Text style={styles.textCa}>Còn lại</Text>
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
