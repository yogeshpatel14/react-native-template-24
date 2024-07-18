import {FC} from 'react';
import Login from '../screen/login';
import Signup from '../screen/signup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {interfaceRootStackList} from './root-stack-list.interface';
import Dashboard from '../screen/dashboard';

export type interfaceListScreen = {
  name: string;
  component: FC<NativeStackScreenProps<interfaceRootStackList, any>>;
};

const listOfScreen: interfaceListScreen[] = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Signup',
    component: Signup,
  },
  {
    name: 'Dashboard',
    component: Dashboard,
  },
];

export default listOfScreen;
