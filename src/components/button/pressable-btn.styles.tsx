import {StyleSheet} from 'react-native';
import {colorPlatter} from '../../themes/color-platter';
import cFontSize from '../../themes/font-size.constant';

const StylesPressable = StyleSheet.create({
  btnPressable: {
    height: 44,
    backgroundColor: colorPlatter.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtBtn: {
    fontSize: cFontSize.h5,
    fontWeight: 'bold',
  },
});

export default StylesPressable;
