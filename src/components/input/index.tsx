import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import InputStyles from './input.styles';

type typeInput = {
  customStyle?: any | {};
};

type InputProps = TextInputProps & typeInput;

const Input: FC<InputProps> = props => {
  return (
    <TextInput
      {...props}
      style={[InputStyles.txtInput, props.customStyle ? props.customStyle : {}]}
    />
  );
};

export default Input;
