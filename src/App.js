import React from 'react';
import './App.css';
import BasicRouter from './Config/Router/Router.js'
import { Provider } from 'react-redux'
import { store,persistor } from './Store'
import { PersistGate } from 'redux-persist/integration/react'


class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BasicRouter />
        </PersistGate>
      </Provider>


    )
  }
}
export default App;
