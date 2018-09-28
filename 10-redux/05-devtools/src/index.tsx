import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import App from './App';

import appReducer from 'reducer';

import './index.css';
import './styles/semantic.min.css';

const store = createStore(
  appReducer,
  compose(
    process.env.NODE_ENV === 'development' && (window as any).devToolsExtension
      ? (window as any).devToolsExtension()
      : (f: any) => f,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
