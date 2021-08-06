import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserProfile from './scr/components/UserProfile';
import SignInScreen from './scr/screens/SignInScreen';
import EditProfile from './scr/components/EditProfile';
import SearchPage from './scr/components/SearchPage';
import {createStackNavigator} from '@react-navigation/stack';
import EditEntry from './scr/components/EditEntry';
import Info from './scr/components/Info';
import SingleFood from './scr/components/SingleFood';
import HomeProgressBar from './scr/components/HomeProgressBar';
import SignUp from './scr/components/SignUp';
import Home from './scr/components/Home';
import {Provider} from 'react-redux';
import {store} from './scr/stores/stores';
import HomeTest from './scr/components/HomeTest';
import TabNavigation from './scr/navigations/TabNavigation';
import AppNavigation from './scr/navigations/AppNavigation';
import StackDiary from './scr/navigations/DiaryStack';
// import Diet from './scr/components/SignUp/DietarryInfo';
// import AboutYou from './scr/components/SignUp/AboutYou';
// import ResultInfo from './scr/components/SignUp/ResultInfo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
  //const App: () => Node = () => {
  //const [count, setCount] = React.useState(0);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    // <>
    //   <Provider store={store}>
    //     <HomeTest />
    //   </Provider>
    // </>
    //<Home />
    //<SignUp />
    //<HomeProgressBar />
    //<SingleFood />
    //<EditEntry />
    //<SignInScreen />
    //<UserProfile />
    //<EditProfile />
    //<SearchPage />
    //<Info />
    //<StackSignUp />
  );
};

export default App;
