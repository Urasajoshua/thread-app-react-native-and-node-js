import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, AntDesign ,Ionicons} from '@expo/vector-icons';
import ThreadScreen from './screens/ThreadScreen';
import ActiveScreen from './screens/ActiveScreen';
import Profile from './screens/Profile';
import { UserContext } from './UserContext';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeScreen} options={{ tabBarLabel: 'home', tabBarLabelStyle: { color: 'black' }, headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Entypo name="home" size={24} color="black" />) : (<AntDesign name="home" size={24} color="black" />) }} />
      <Tab.Screen name='thread' component={ThreadScreen} options={{ tabBarLabel: 'create-thread', tabBarLabelStyle: { color: 'black' }, headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Ionicons name="create" size={24} color="black" />) : (<Ionicons name="create-outline" size={24} color="black" />) }} />
      <Tab.Screen name='activity' component={ActiveScreen} options={{ tabBarLabel: 'activity', tabBarLabelStyle: { color: 'black' }, headerShown: false, tabBarIcon: ({ focused }) => focused ? (<AntDesign name="heart" size={24} color="black" />) : (<AntDesign name="hearto" size={24} color="black" />) }} />
      <Tab.Screen name='profile' component={Profile} options={{ tabBarLabel: 'profile', tabBarLabelStyle: { color: 'black' }, headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Ionicons name="person" size={24} color="black" />) : (<Ionicons name="person-outline" size={24} color="black" />) }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
   <UserContext>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='signup' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='main' component={BottomTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
   </UserContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
