import React, {FC} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/button';
import {interfaceNativeStackScreenProps} from '../../navigation/navigation.interface';

const Dashboard: FC<interfaceNativeStackScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <CustomButton
        title="Signup"
        onPress={() => {
          navigation.push('Login');
        }}
      />
    </View>
  );
};

export default Dashboard;
