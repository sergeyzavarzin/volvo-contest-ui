import React, { FunctionComponent } from 'react';
import { ButtonProps as NativeButtonProps } from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = NativeButtonProps;

export const Button: FunctionComponent<ButtonProps> = ({ title, ...props }) => {
  return (
    <ButtonContainer activeOpacity={0.7} {...props}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background: orange;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
`;

const ButtonText = styled.Text`
  color: #fff;
`;
