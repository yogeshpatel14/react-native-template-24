import React, {FC} from 'react';
import {Button, ButtonProps} from 'react-native';

type btnProps = ButtonProps;

const CustomButton: FC<btnProps> = props => {
  return <Button {...props} />;
};

export default CustomButton;
