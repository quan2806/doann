import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../components/EditProfile';
import Info from '../components/Info';
import UserProfile from '../components/UserProfile';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const StackProfile = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Info" component={Info} />
      {/*<Stack.Screen name="SignInScreen" component={SignInScreen} />*/}
    </Stack.Navigator>
  );
};

export default StackProfile;
