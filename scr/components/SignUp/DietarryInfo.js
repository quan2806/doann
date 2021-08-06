import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {InsertUser} from '../../api/user/Info';

function Diet(props) {
  const [weight, onChangeWeight] = useState();
  const [targetWeight, onChangeTargetWeight] = useState();
  const [height, onChangeHeight] = useState();
  const [age, onChangeAge] = useState();
  const [sex, setSex] = useState();
  const [activity, setActivity] = useState();
  const User = props.route.params.user;
  function insert() {
    if (
      User.NameUser === undefined &&
      User.Pass === undefined &&
      weight === undefined &&
      sex === undefined &&
      targetWeight === undefined &&
      activity === undefined &&
      height === undefined
    ) {
      alert('Nhập đủ thông tin');
    } else {
      InsertUser(
        `Name=${User.NameUser}&Age=${age}&Sex=${sex}&Pass=${User.Pass}&Weight=${weight}&TargetWeight=${targetWeight}&ActivityRate=${activity}&Height=${height}`,
        'POST',
        null,
      ).then(res => {
        props.navigation.replace('SignIn');
      });
    }
  }
  //console.log(User);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.weightContainer}>
          <Text style={styles.textShow}>CÂN NẶNG</Text>
          <View style={styles.weightCon}>
            <Text style={{marginLeft: 10}}>Cân nặng hiện tại</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TextInput
                style={{marginRight: 5}}
                placeholder="Cân nặng hiện tại"
                keyboardType="numeric"
                onChangeText={onChangeWeight}
                //value={weight}
                // inputAccessoryViewID="done button"
                // clearButtonMode="always"
              />
              <Text style={{}}>Kg</Text>
            </View>
          </View>
          <View style={styles.weightCon}>
            <Text style={{marginLeft: 10}}>Cân nặng mục tiêu</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TextInput
                style={{marginRight: 5}}
                placeholder="Cân nặng mục tiêu"
                keyboardType="numeric"
                onChangeText={onChangeTargetWeight}
                //value={targetWeight}
                // inputAccessoryViewID="done button"
                // clearButtonMode="always"
              />
              <Text style={{}}>Kg</Text>
            </View>
          </View>
        </View>
        <View style={styles.weightContainer}>
          <Text style={styles.textShow}>THÔNG TIN CÁ NHÂN</Text>
          <View style={styles.InfoCon}>
            <Text style={{marginLeft: 10}}>Giới tính</Text>
            <View style={{marginRight: 10}}>
              <RNPickerSelect
                placeholder={{
                  label: 'Nam/Nữ',
                  value: null,
                }}
                onValueChange={value => setSex(value)}
                items={[
                  {label: 'Nam', value: 'Male'},
                  {label: 'Nữ', value: 'Female'},
                ]}
              />
            </View>
          </View>
          <View style={styles.InfoCon}>
            <Text style={{marginLeft: 10}}>Chiều cao</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TextInput
                style={{marginRight: 5}}
                placeholder="Chiều cao"
                keyboardType="numeric"
                onChangeText={onChangeHeight}
                value={height}
              />
              <Text style={{}}>cm</Text>
            </View>
          </View>
          <View style={styles.InfoCon}>
            <Text style={{marginLeft: 10}}>Tuổi</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TextInput
                style={{marginRight: 5}}
                placeholder="Tuổi"
                keyboardType="numeric"
                onChangeText={onChangeAge}
                value={age}
              />
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
                onValueChange={value => setActivity(value)}
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
          <Button title="Done" onPress={() => insert()} />
        </View>
      </SafeAreaView>
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

export default Diet;
