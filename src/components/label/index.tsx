import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';
import StyleLabel from './label.styles';

type intLabel = {
  title: string | '';
  varient?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  customStyle?: any | {};
};

type TxtProps = TextProps & intLabel;

const Label: FC<TxtProps> = props => {
  return (
    <Text
      style={[
        props.varient ? StyleLabel[props.varient] : {},
        props.customStyle ? props.customStyle : {},
      ]}>
      {props.title}
    </Text>
  );
};

export default Label;
