import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import listOfScreen, {interfaceListScreen} from './list-screen';
import {interfaceRootStackList} from './root-stack-list.interface';

const Stack = createNativeStackNavigator<interfaceRootStackList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {listOfScreen.map((item: interfaceListScreen, index: number) => (
          <Stack.Screen key={index} {...item} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
