import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';

const Home = createStackNavigator({
  Home: HomeScreen,
});

const Profile = createStackNavigator({
  Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home,
  Profile,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const route = navigation.state.routeName;
      const name = {
        Home: 'home',
        Profile: 'user',
      }[route];

      return <Icon name={name} style={{ marginTop: 5 }} color={tintColor} size={28} />;
    },
    tabBarOptions: {
      style: {
        height: 50,
      },
      activeBackgroundColor: '#E6F0FA',
      showLabel: true,
    },
  }),
});


export default createAppContainer(TabNavigator);
