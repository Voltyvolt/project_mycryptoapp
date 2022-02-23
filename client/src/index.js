import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { TransactionProvider } from './context/TransactionContext';
import App from './App';
import store from './app/store';

import 'antd/dist/antd.css';

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>,
  </TransactionProvider>,
  document.getElementById('root'),
);

