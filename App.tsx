import React, {FC} from 'react';
import RootNavigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
