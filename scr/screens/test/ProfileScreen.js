import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/test/HeaderComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import UserProfile from '../../components/UserProfile';

const ProfileItem = ({icon, name, navigation}, props) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
    {/*<TouchableWithoutFeedback*/}
    {/*  onPress={() => {*/}
    {/*    navigation.navigate(props.screen);*/}
    {/*  }}>*/}
    {/*  <FontAwesome name="angle-right" size={26} color="#1e1e1e" />*/}
    {/*</TouchableWithoutFeedback>*/}
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);
const Stack = createStackNavigator();
const MoreScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title="Profile" />
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <MaterialIcons name="person" size={26} color="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomText}>No pain no gain</Text>
            <Text style={styles.authText}>Log in/Sign up</Text>
          </View>
          <FontAwesome name="angle-right" size={26} color="#ec6b09" />
        </View>
        <View style={styles.divider} />
        <ProfileItem icon="flag-checkered" name="Goals" />
        <ProfileItem icon="account" name="My Profile" />
        <ProfileItem icon="equalizer" name="Analysis" />
        <ProfileItem icon="cog" name="Settings" />
        <ProfileItem icon="help" name="Help" />
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={MoreScreen} />
    //     <Stack.Screen name={'UserProfile'} component={UserProfile()} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MoreScreen />
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec6b09',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomText: {
    color: '#828282',
  },
  authText: {
    color: '#ec6b09',
    fontSize: 18,
    fontWeight: '500',
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  divider: {
    height: 10,
  },
});

export default ProfileScreen;
