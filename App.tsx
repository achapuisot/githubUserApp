import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import PersonScreen from './src/screens/Person';

export type AppStackParamsList = {
  Home: undefined;
  Person: {userParam: string};
};
const {Screen, Navigator} = createNativeStackNavigator<AppStackParamsList>();

const App = () => {
  return (
    <SafeAreaView style={safeAreaStyle}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'rgba(0, 0, 247, 0.82)',
            },
            headerTintColor: 'white',
          }}>
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Person" component={PersonScreen} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const safeAreaStyle = {flex: 1};

export default App;
