import React, { FunctionComponent } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { RootStackParamList } from '../interfaces';
import * as icons from '../icons';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const IconsScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <StyledSafeAreaView>
      <StyledView>
        {Array.from(Object.entries(icons))
          .sort(([a]) => (a.toUpperCase().includes('BLACK') ? -1 : 1))
          .map(([key, Icon]) => {
            const isBlack = key.toUpperCase().includes('BLACK');

            return (
              <StyledIconView key={key} isBlack={isBlack}>
                <Icon width={30} height={30} />
                <StyledIconText isBlack={isBlack}>{key}</StyledIconText>
              </StyledIconView>
            );
          })}
      </StyledView>
    </StyledSafeAreaView>
  );
};

const StyledView = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledIconView = styled.View<{ isBlack: boolean }>`
  width: 170px;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => (props.isBlack ? '#fff' : '#000')};
  margin-bottom: 20px;
`;

const StyledIconText = styled.Text<{ isBlack: boolean }>`
  color: ${(props) => (props.isBlack ? '#000' : '#fff')};
  font-size: 12px;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 15px;
  justify-content: space-between;
`;
