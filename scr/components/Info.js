import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  InputAccessoryView,
  Button,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Header from './test/HeaderComponent';
import {InsertDiet} from '../api/user/Info';
import {useSelector} from 'react-redux';

function Info({navigation}) {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [active, setActive] = useState();
  const idUser = useSelector(state => state?.userReducer?.idUser);
  //console.log(active);
  function insert() {
    InsertDiet(
      `Id=${idUser}&Weight=${weight}&ActivityRate=${active}&Height=${height}`,
      'POST',
      null,
    ).then(res => {
      navigation.replace('TabNavigation');
    });
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title={'Tính toán Calo'} />
        <View style={styles.weightContainer}>
          <Text style={styles.textShow}>CÂN NẶNG</Text>
          <View style={styles.weightCon}>
            <Text style={{marginLeft: 10}}>Cân nặng hiện tại</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TextInput
                style={{marginRight: 5}}
                placeholder="Cân nặng hiện tại"
                keyboardType="numeric"
                onChangeText={setWeight}
                //value={weight}
                // inputAccessoryViewID="done button"
                // clearButtonMode="always"
              />
              <Text style={{}}>Kg</Text>
            </View>
          </View>
          <View style={styles.InfoCon}>
            <Text style={{marginLeft: 10}}>Chiều cao</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TextInput
                style={{marginRight: 5}}
                placeholder="Chiều cao"
                keyboardType="numeric"
                onChangeText={setHeight}
                //value={height}
              />
              <Text style={{}}>cm</Text>
            </View>
          </View>
        </View>
        <View style={styles.planContainer}>
          <Text style={styles.textShow}>CHƯƠNG TRÌNH</Text>
          <View style={styles.planSpeed}>
            <Text style={{marginLeft: 10}}>Tiến độ mong muốn</Text>
            <View style={{marginRight: 10}}>
              <RNPickerSelect
                placeholder={{
                  label: 'Tiến độ',
                  value: null,
                }}
                onValueChange={value => console.log(value)}
                items={[
                  {label: 'Chậm', value: 'slow'},
                  {label: 'Bình thường', value: 'normal'},
                  {label: 'Nhanh', value: 'fast'},
                ]}
              />
            </View>
          </View>
          <View style={styles.planSpeed}>
            <Text style={{marginLeft: 10}}>Tần suất hoạt động</Text>
            <View style={{marginRight: 10}}>
              <RNPickerSelect
                placeholder={{
                  label: 'Tần suất hoạt động',
                  value: null,
                }}
                onValueChange={value => setActive(value)}
                items={[
                  {label: 'Ít hoặc không', value: '1.2'},
                  {label: 'Tuần 1-3 buổi', value: '1.375'},
                  {label: 'Tuần 3-5 buổi', value: '1.55'},
                  {label: 'Tuần 6-7 buổi', value: '1.725'},
                  {label: 'Vận động viên', value: '1.9'},
                ]}
              />
            </View>
          </View>
        </View>
        <View style={{height: '10%'}}>
          <Button title="Tính toán lại" onPress={() => insert()} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weightContainer: {
    //flexDirection: 'row',
    marginTop: 10,
    height: '20%',
  },
  textShow: {
    color: '#a9a4a4',
    fontSize: 16,
    fontWeight: '500',
    height: '15%',
    marginLeft: 10,
  },
  textGoal: {
    color: '#a9a4a4',
    fontSize: 16,
    fontWeight: '500',
    height: '10%',
    marginLeft: 10,
  },
  weightCon: {
    flexDirection: 'row',
    height: '33%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  InfoCon: {
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  planContainer: {
    marginTop: 20,
    height: '20%',
  },
  planSpeed: {
    backgroundColor: '#ffffff',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Info;
