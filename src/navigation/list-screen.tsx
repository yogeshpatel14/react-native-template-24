import {FC} from 'react';
import Login from '../screen/login';
import Signup from '../screen/signup';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {interfaceRootStackList} from './root-stack-list.interface';
import Dashboard from '../screen/dashboard';
import Splash from '../screen/splash';

export type interfaceListScreen = {
  name: string;
  component: FC<NativeStackScreenProps<interfaceRootStackList, any>>;
  options?: NativeStackNavigationOptions;
};

const listOfScreen: interfaceListScreen[] = [
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Signup',
    component: Signup,
  },
  {
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    name: 'Splash',
    component: Splash,
    options: {
      headerShown: false,
    },
  },
];

export default listOfScreen;
