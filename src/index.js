import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import todoApp from './reducers';
import {rootLoad} from './sagas/rootSaga';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootLoad);
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
