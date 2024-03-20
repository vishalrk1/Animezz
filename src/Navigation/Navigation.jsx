import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, useTheme} from '@react-navigation/native';
import DiscoverScreen from '../Screens/Discover/DiscoverScreen';
import SchedualScreen from '../Screens/Schedual/SchedualScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import SearchScreen from '../Screens/Search/SearchScreen';

const Tab = createBottomTabNavigator();

export const BottomNavTab = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          title: 'Animezz',
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.yelloColor,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={20}
              color={focused ? colors.yelloColor : colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedual"
        component={SchedualScreen}
        options={{
          title: 'Schedual',
          tabBarActiveTintColor: colors.yelloColor,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({focused}) => (
            <Icon
              name="calendar"
              size={20}
              color={focused ? colors.yelloColor : colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarActiveTintColor: colors.yelloColor,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              size={20}
              color={focused ? colors.yelloColor : colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarActiveTintColor: colors.yelloColor,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({focused}) => (
            <Icon
              name="cog"
              size={20}
              color={focused ? colors.yelloColor : colors.text}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
