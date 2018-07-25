import React, { Component } from 'react';
import Container from './container/container';
import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),
      ));

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Provider store={store}>
          <Container/>
        </Provider>
    );
  }
}
