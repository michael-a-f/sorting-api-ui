import { AppRegistry, SafeAreaView } from 'react-native';
import { PaperProvider, MD3DarkTheme as DefaultTheme, useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { expo as expoAppDetails} from '../app.json'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Searching from './Searching';
import Sorting from './Sorting';


const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <PaperProvider theme={DefaultTheme}>
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
              headerStyle: {
                backgroundColor: DefaultTheme.colors.surface,
                elevation: 0,
              },
              headerShadowVisible: false,
              headerTitleStyle: {
                color: DefaultTheme.colors.background,
              },
              tabBarActiveTintColor: DefaultTheme.colors.onSurface,
              tabBarInactiveTintColor: DefaultTheme.colors.onSurfaceDisabled,
              tabBarStyle: {
                backgroundColor: DefaultTheme.colors.surface,
                elevation: 0,
                borderColor: DefaultTheme.colors.onSurfaceDisabled,
                borderTopWidth: 0
              }
            }}
            >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Sorting"
              component={Sorting}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Searching"
              component={Searching}
              options={{
                tabBarLabel: 'Searching',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(expoAppDetails.name, () => App);