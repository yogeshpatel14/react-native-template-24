import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

const ParentSafeArea: FC<SafeAreaViewProps> = props => {
  return (
    <SafeAreaView style={{marginHorizontal: 10}} {...props}>
      {props.children}
    </SafeAreaView>
  );
};

export default ParentSafeArea;
