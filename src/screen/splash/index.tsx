import React, {FC, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomButton from '../../components/button';
import {interfaceNativeStackScreenProps} from '../../navigation/navigation.interface';
import SplashStyles from './splash.styles';
import HookSplashScreen from '../../hook/screen/splash';

const Splash: FC<interfaceNativeStackScreenProps> = ({navigation}) => {
  const {checkIsAlreadyLogin} = HookSplashScreen();

  useEffect(() => {
    checkIsAlreadyLogin();
  });

  return (
    <SafeAreaView>
      <View style={SplashStyles.mainView}>
        <Text>Splash</Text>
        <CustomButton
          title="Login"
          onPress={() => {
            navigation.replace('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
