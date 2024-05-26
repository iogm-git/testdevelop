import * as React from 'react'
import { Provider } from 'react-redux'

import Routes from './src/utils/Routes'
import storeData from './src/redux/store'

import { dataSekolahActions } from './src/redux/actions'

storeData.dispatch(dataSekolahActions.init())

function App() {
  return (
    <Provider store={storeData}>
      <Routes />
    </Provider>
  );
}

export default App;

