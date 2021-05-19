import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './scr/screens/test/HomeScreen';

import NotificationScreen from './scr/screens/test/NotificationScreen';
import ProfileScreen from './scr/screens/test/ProfileScreen';
import UserProfile from './scr/components/UserProfile';
import SignInScreen from './scr/screens/SignInScreen';
import EditProfile from './scr/components/EditProfile';
import SearchPage from './scr/components/SearchPage';

// khong xay dung navigation tai day
const Tab = createBottomTabNavigator();

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     tabBarOptions={{
    //       activeTintColor: '#ec6b09',
    //       inactiveTintColor: '#262626',
    //     }}>
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         tabBarLabel: 'Home',
    //         tabBarIcon: ({color}) => (
    //           <MaterialIcons name="home" size={26} color={color} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Diary"
    //       component={NotificationScreen}
    //       options={{
    //         tabBarLabel: 'Diary',
    //         tabBarIcon: ({color}) => (
    //           <MaterialIcons name="date-range" size={26} color={color} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="More"
    //       component={ProfileScreen}
    //       options={{
    //         tabBarLabel: 'More',
    //         tabBarIcon: ({color}) => (
    //           <MaterialIcons name="more-horiz" size={26} color={color} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    //<SignInScreen />
    //<UserProfile />
    //<EditProfile />
    <SearchPage />
  );
};

export default App;
