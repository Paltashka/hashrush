import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import App from './App';
import store from './store';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '15px',
  transition: transitions.SCALE,
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </AlertProvider>,
  document.getElementById('root')
);