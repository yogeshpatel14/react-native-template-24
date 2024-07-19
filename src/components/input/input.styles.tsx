import {StyleSheet} from 'react-native';
import {colorPlatter} from '../../themes/color-platter';
import cFontSize from '../../themes/font-size.constant';

const InputStyles = StyleSheet.create({
  txtInput: {
    fontSize: cFontSize.h4,
    borderColor: colorPlatter.mediumGray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

export default InputStyles;
