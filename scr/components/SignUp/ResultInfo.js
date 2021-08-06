import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Picker,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ResultInfo = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('normal');
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer} />
      <View style={styles.goalContainer}>
        <Text style={styles.textGoal}>MỤC TIÊU CỦA BẠN</Text>
        <View style={styles.weightCon} />
      </View>
      <View style={styles.suggestContainer}>
        <Text style={styles.textGoal}>LƯỢNG CALORIES ĐỀ XUẤT</Text>
        <View style={styles.weightCon} />
      </View>
      <View style={{height: '25%'}} />
      <View style={{height: '10%'}}>
        <Button
          title="Next"
          onPress={() => {
            navigation.push('');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    //flexDirection: 'row',
    marginTop: 5,
    height: '40%',
    backgroundColor: '#ffffff',
  },
  textGoal: {
    color: '#a9a4a4',
    fontSize: 16,
    fontWeight: '500',
    height: '30%',
    marginLeft: 10,
  },
  weightCon: {
    flexDirection: 'row',
    height: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  goalContainer: {
    height: '10%',
    marginTop: 10,
  },
  suggestContainer: {
    height: '10%',
    marginTop: 10,
  },
});

export default ResultInfo;
