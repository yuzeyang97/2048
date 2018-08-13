import React, { Component } from 'react';
import routeConfig from './routes'
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { createLogger } from 'redux-logger';
import serverApi from './middleware/serverApi.js';
import {  Router, browserHistory } from 'react-router'



const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(serverApi, logger),
  ));



export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routeConfig}/>
      </Provider>
    );
  }
}
