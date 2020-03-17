import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ExhibitorScreen from '../screens/ExhibitorScreen';
import TicketScreen from '../screens/TicketScreen';
import SpeakerScreen from '../screens/SpeakerScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
//home link start
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};
//`ios-home${focused ? '' : '-outline'}`

HomeStack.path = '';
//home link end

//Schedule start

const ScheduleStack = createStackNavigator(
  {
    Links: ScheduleScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

ScheduleStack.path = '';

//Schedule end

//Exhibitor start

const ExhibitorStack = createStackNavigator(
  {
    Home: ExhibitorScreen,
  },
  config
);

ExhibitorStack.navigationOptions = {
  tabBarLabel: 'Exhibitor',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-person'
          : 'md-person'
      }
    />
  ),
};

ExhibitorStack.path = '';
//Exhibitor end

//Speakers start

const SpeakerStack = createStackNavigator(
  {
    Home: SpeakerScreen,
  },
  config
);

SpeakerStack.navigationOptions = {
  tabBarLabel: 'Speaker',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-people'
          : 'md-people'
      }
    />
  ),
};

SpeakerStack.path = '';
//speakes end



//Tickets start
const SettingsStack = createStackNavigator(
  {
    Home: TicketScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Tickets',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-cart'
          : 'md-cart'
      }
    />
  ),
};
//`ios-information-circle${focused ? '' : '-outline'}`
SettingsStack.path = '';
//Tickets end

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ScheduleStack,
  ExhibitorStack,
  SpeakerStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
