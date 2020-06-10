import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import EmailVerificationPage from './pages/EmailVerificationPage';

import CreateAccount from './components/CreateAccount';
import LoginModal from './components/LoginModal';
import ThanksModal from './components/ThanksModal';

import raken from './assets/forms/raken-rider.png';
import muskernack from './assets/forms/3-muskernack-smaller-size.png';

import './index.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <HashRouter> 
      <Switch>
        <Suspense fallback>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/login" component={LoginModal} />
          <Route path="/thanks-register">
            <ThanksModal img={raken} title="Thank you for Registering!" text={true} />
          </Route>
          <Route path="/thanks-download">
            <ThanksModal img={muskernack} title="Thank you for downloading Hash Rush!" text={false} />
          </Route>
          <Route path="/account" component={AccountPage} />
          <Route path="/emailVerification/:token" component={EmailVerificationPage} />
        </Suspense>
      </Switch>
    </HashRouter>
  );
}

export default App;