import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, useTheme} from '@react-navigation/native';
import DiscoverScreen from '../Screens/Discover/DiscoverScreen';
import SchedualScreen from '../Screens/Schedual/SchedualScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import SearchScreen from '../Screens/Search/SearchScreen';
import ExploreScreen from '../Screens/Explore/ExploreScreen';
import DetailsScreen from '../Screens/Details/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Animezz',
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.yelloColor,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({focused}) => (
            <Icon
              name="play"
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

export const StackNavigation = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNav" component={BottomNavTab} />
      <Stack.Screen
        name="Detail"
        component={DetailsScreen}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.text,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
