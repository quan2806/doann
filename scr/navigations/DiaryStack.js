import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from '../screens/test/NotificationScreen';
import SearchPage from '../components/SearchPage';
import SingleFood from '../components/SingleFood';
import EditEntry from '../components/EditEntry';

const Stack = createStackNavigator();

const StackDiary = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Diary" component={NotificationScreen} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="SingleFood" component={SingleFood} />
      <Stack.Screen name="EditEntry" component={EditEntry} />
    </Stack.Navigator>
  );
};

export default StackDiary;
