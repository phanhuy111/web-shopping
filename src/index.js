import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Component/App';
import { Provider } from 'react-redux';
import configureStore from './Component/Redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react'
let { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>

  , document.getElementById("root"));
registerServiceWorker();
