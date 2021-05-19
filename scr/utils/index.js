import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import constants from '../constants';

const {width: screenWidth} = Dimensions.get('window');

export const ratioW = widthData => {
  return screenWidth * (widthData / constants.WIDTH_CONSTANT_PORTRAIT);
};

export const clearData = async () => {
  return await AsyncStorage.clear();
};

const asyncStorageSetItem = async (name, value) => {
  try {
    return await AsyncStorage.setItem(name, value);
  } catch (e) {
    // save error
  }
};

export const asyncStorageGetItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return '';
  }
};

export const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};

export const formatMoney = money => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

export default {
  ratioW,
  asyncStorageSetItem,
  asyncStorageGetItem,
  deleteData,
  clearData,
  formatMoney,
};
