import React, {useEffect, useState} from 'react';
import HomeSectionComponent from '../../components/test/HomeSectionComponent';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';

import Header from '../../components/test/HeaderComponent';
import Meal from '../../components/test/MealComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux';
import {AllMeal} from '../../api/meal/DetailMeal';
import CalendarPicker from 'react-native-calendar-picker';

const Diary = ({navigation}) => {
  const [date, setDate] = useState(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1 > 10
        ? new Date().getMonth() + 1
        : `0${new Date().getMonth() + 1}`
    }-${
      new Date().getDate() > 10
        ? new Date().getDate()
        : `0${new Date().getDate()}`
    }`,
  );
  const [idMeal, setIdMeal] = useState({
    idmon: 0,
    idnoon: 0,
    idnight: 0,
  });
  const idUser = useSelector(state => state?.userReducer?.idUser);
  useEffect(() => {
    AllMeal(`ID=${idUser}&Dates=${date}`, 'GET', null).then(res => {
      //console.log(res.data);
      setIdMeal({idmon: 0, idnoon: 0, idnight: 0});
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].Name === 'breakfast') {
          setIdMeal(item => ({
            ...item,
            idmon: res.data[i].IdMeal,
          }));
        } else if (res.data[i].Name === 'lunch') {
          setIdMeal(item => ({
            ...item,
            idnoon: res.data[i].IdMeal,
          }));
        } else if (res.data[i].Name === 'dinner') {
          setIdMeal(item => ({
            ...item,
            idnight: res.data[i].IdMeal,
          }));
        }
      }
    });
  }, [date]);
  if (idMeal == null) {
    return null;
  }
  //console.log(date);
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title={'Diary'} />
      <View style={styles.bodyContainer}>
        <CalendarPicker
          onDateChange={day => {
            let month = '01',
              day1 = '01';
            if (day._i.month > 8) {
              month = day._i.month + 1;
            } else {
              month = `0${day._i.month + 1}`;
            }
            if (day._i.day > 9) {
              day1 = day._i.day;
            } else {
              day1 = `0${day._i.day}`;
            }
            setDate(`${day._i.year}-${month}-${day1}`);
          }}
          todayTextStyle={{color: '#fff'}}
          todayBackgroundColor="#FC5011"
          previousTitle="Tháng trước"
          nextTitle="Tháng sau"
          weekdays={['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']}
          months={[
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
          ]}
        />
        <HomeSectionComponent date={date} />
        <ScrollView>
          <Meal
            meal="Bữa sáng"
            navigation={navigation}
            idM={idMeal.idmon}
            date={date}
          />
          <Meal
            meal="Bữa trưa"
            navigation={navigation}
            idM={idMeal.idnoon}
            date={date}
          />
          <Meal
            meal="Bữa tối"
            navigation={navigation}
            idM={idMeal.idnight}
            date={date}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#fff',
    flex: 1,
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

export default Diary;
