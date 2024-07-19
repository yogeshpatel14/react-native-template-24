import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import StylesPressable from './pressable-btn.styles';
import Label from '../label';

type intBtn = {
  customStyles?: any | {};
  title: string;
};

type btnProps = TouchableOpacityProps & intBtn;

const CustomButton: FC<btnProps> = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[StylesPressable.btnPressable, props.customStyles || {}]}>
      <Label
        customStyle={StylesPressable.txtBtn}
        varient="h5"
        title={props.title}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
