import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import Game from './container/Game';
import './App.css';

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger))
);

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
