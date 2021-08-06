import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/test/HomeScreen';
import DiaryStack from './DiaryStack';
import StackProfile from './StackProfile';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ec6b09',
        inactiveTintColor: '#262626',
      }}>
      <Tab.Screen
        name="DiaryStack"
        component={DiaryStack}
        options={{
          tabBarLabel: 'Nhật ký',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="date-range" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Báo cáo',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="analytics" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StackProfile"
        component={StackProfile}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
