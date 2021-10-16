import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import firebase from 'firebase';
import { Platform } from 'react-native';
import { LogBox } from 'react-native-web-log-box';
import Login from './src/pages/Login';
import MemoCreate from './src/pages/MemoCreate';
import MemoDetail from './src/pages/MemoDetail';
import MemoEdit from './src/pages/MemoEdit';
import MemoList from './src/pages/MemoList';
import { firebaseConfig } from './env';

if (Platform.OS === 'android') {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'Setting a timer',
  ]);
}

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#467FD3',
          },
          headerTitleStyle: {
            color: '#ffffff',
          },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoCreate" component={MemoCreate} />
        <Stack.Screen name="MemoDetail" component={MemoDetail} />
        <Stack.Screen name="MemoEdit" component={MemoEdit} />
        <Stack.Screen name="MemoList" component={MemoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
