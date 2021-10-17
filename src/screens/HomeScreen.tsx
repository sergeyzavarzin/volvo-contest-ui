import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { RootStackParamList } from '../interfaces';
import { Button } from '../components';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
  return (
    <StyledSafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Go to Details 2" onPress={() => navigation.navigate('Details')} />
      <Button title="Go to icons" onPress={() => navigation.navigate('Icons')} />
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
