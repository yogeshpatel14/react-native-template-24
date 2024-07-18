import React, {FC} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/button';
import {interfaceNativeStackScreenProps} from '../../navigation/navigation.interface';
import {useAppSelector} from '../../store/use-app-selector';
import {useAppDispatch} from '../../store/use-app-dispatch';
import {actionSaveLoginInfo} from '../../store/reducer/login';

const Login: FC<interfaceNativeStackScreenProps> = ({navigation}) => {
  const {loginInfo} = useAppSelector(state => state.rLogin);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>{loginInfo.name}</Text>
      <CustomButton
        title="Update Name"
        onPress={() => {
          dispatch(actionSaveLoginInfo({name: 'test123'}));
        }}
      />
      <CustomButton
        title="Signup"
        onPress={() => {
          navigation.push('Signup');
        }}
      />
    </View>
  );
};

export default Login;
