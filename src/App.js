import React, { Component } from 'react';
import Container from './container/container';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { createLogger } from 'redux-logger';
import serverApi from './middleware/serverApi.js';
import {  Router, browserHistory } from 'react-router'
import PersonMessage from './components/PersonMessage/index.js'
import StudentMessage from './components/StudentMessage/index.js'
import ClassInfo from './components/ClassInfo/index.js'


const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(serverApi, logger),
  ));

const routeConfig = [
  {
    path: '/',
    component: Container,
    indexRoute: { component: StudentMessage },
    childRoutes: [
      { path: 'class/:id', component: ClassInfo },
      { path: 'person/:id', component: PersonMessage }
    ]
  }
]

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
