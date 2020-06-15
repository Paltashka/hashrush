import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CompleteResetPasswordPage from './pages/CompleteResetPasswordPage';

import CreateAccount from './components/CreateAccount';
import LoginModal from './components/LoginModal';
import ThanksModal from './components/ThanksModal';

import raken from './assets/forms/raken-rider.png';
import muskernack from './assets/forms/3-muskernack-smaller-size.png';

import { signInByToken } from './actions/authorizationFlow';

import './index.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App({ signInByToken }) {
  useEffect(() => { 
    localStorage.getItem('token') && signInByToken();
  });

  return (
    <BrowserRouter> 
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
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/resetPassword" component={CompleteResetPasswordPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

const mapActionToProps = {
  signInByToken
};

export default connect(null, mapActionToProps)(App);