import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactGA from 'react-ga';

import App from './App';
import store from './store';

const options = {
  position: positions.MIDDLE,
  timeout: 3000,
  offset: '15px',
  transition: transitions.SCALE,
};

ReactGA.initialize('UA-167438269-1');

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