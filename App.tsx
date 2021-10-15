import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import { RootStackParamList } from './src/interfaces';
import { DetailsScreen, HomeScreen } from './src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      <StyledButton>asdadsad</StyledButton>
    </NavigationContainer>
  );
}

const StyledButton = styled.Text`
  background-color: #888;
  color: #123;
`;
