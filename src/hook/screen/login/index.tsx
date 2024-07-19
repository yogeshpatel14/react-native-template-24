import {useState} from 'react';
import {interfaceLoginFrom} from '../../../interfaces/screen/login';

export default function HookLoginScreen() {
  const [formValue, setFormValue] = useState<interfaceLoginFrom>({
    email: '',
    password: '',
  });

  const updateFormValues = (key: string, value: string) => {
    setFormValue({...formValue, [key]: value});
  };

  return {
    formValue,
    updateFormValues,
  };
}
