import React, {FC} from 'react';
import CustomButton from '../../components/button';
import {interfaceNativeStackScreenProps} from '../../navigation/navigation.interface';
import {useAppDispatch} from '../../store/use-app-dispatch';
import {actionSaveLoginInfo} from '../../store/reducer/login';
import Label from '../../components/label';
import HookLoginScreen from '../../hook/screen/login';
import Input from '../../components/input';
import ParentSafeArea from '../../components/safearea-view';

const Login: FC<interfaceNativeStackScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {formValue, updateFormValues} = HookLoginScreen();
  return (
    <ParentSafeArea>
      <Label varient="h2" title="Login" />
      <Input
        value={formValue.email}
        onChangeText={e => updateFormValues('email', e)}
        placeholder="email"
      />
      <Input
        value={formValue.password}
        onChangeText={e => updateFormValues('password', e)}
        secureTextEntry={true}
        placeholder="password"
      />
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
        customStyles={{marginTop: 5}}
      />
    </ParentSafeArea>
  );
};

export default Login;
