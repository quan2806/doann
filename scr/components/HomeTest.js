import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  onChangeNumber,
  onDownNumber,
  onUpNumber,
} from '../stores/actions/incrementAction';

const HomeTest = () => {
  const number = useSelector(state => state?.incrementReducer?.number);
  const dispatch = useDispatch();
  const upNumber = () => {
    dispatch(onUpNumber());
  };
  const downNumber = () => {
    dispatch({
      type: 'DOWN',
    });
  };
  // const downNumber = () => {
  //   dispatch(onDownNumber());
  // };
  const changeNumber = number => {
    dispatch(onChangeNumber({number: 100}));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{number}</Text>
      <TouchableOpacity
        onPress={upNumber}
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'yellow',
        }}>
        <Text>UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={downNumber}
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
        }}>
        <Text>DOWN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeNumber(100)}
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'blue',
        }}>
        <Text>CHANGE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeTest;
