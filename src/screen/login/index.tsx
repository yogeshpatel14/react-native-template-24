import React, {FC} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/button';
import {interfaceNativeStackScreenProps} from '../../navigation/navigation.interface';

const Login: FC<interfaceNativeStackScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <CustomButton
        title="Signup"
        onPress={() => {
          navigation.push('Dashboard');
        }}
      />
    </View>
  );
};

export default Login;
