import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Login from './src/pages/Login';
import MemoCreate from './src/pages/MemoCreate';
import MemoDetail from './src/pages/MemoDetail';
import MemoEdit from './src/pages/MemoEdit';
import MemoList from './src/pages/MemoList';

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
