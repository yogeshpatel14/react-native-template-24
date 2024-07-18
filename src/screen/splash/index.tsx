import React, {FC} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/button';
import {interfaceNativeStackScreenProps} from '../../navigation/navigation.interface';

const Splash: FC<interfaceNativeStackScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Splash</Text>
      <CustomButton
        title="Login"
        onPress={() => {
          navigation.push('Login');
        }}
      />
    </View>
  );
};

export default Splash;
