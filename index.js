/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './store';

import { createStore } from 'redux';


const mystore = store;
const ReduxApp = () => (
    <Provider store={mystore}>
      <App />
    </Provider>
  );
  
AppRegistry.registerComponent(appName, () => ReduxApp);
  
