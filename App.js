import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
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
