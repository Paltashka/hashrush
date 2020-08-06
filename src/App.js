import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
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
import ThankYouPage from './pages/ThankYouPage';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/pure';
import StripeModal from './components/BundleHeader/Purchase/StripeModal';
import PurchaseModal from './components/BundleHeader/Purchase/PurchaseMobile/PurchaseModal';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BundlesPage = lazy(() => import('./pages/BundlesPage'));
const BundlePage = lazy(() => import('./pages/BundlePage'));

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.pageview(location.hash);
});

const stripePromise = loadStripe("pk_test_51HBysJJc3FMMgaAwpNHet4XFCvWrFRAjFpHLsU6Gf2c8jbjVMlBwfw5E46iiasnoi7kFwhC2JNthLoMgL8hea7zo0094X633x9");

function App({ signInByToken }) {
  useEffect(() => { 
    localStorage.getItem('token') && signInByToken();
  });

  return (
    <Elements stripe={stripePromise}>
      <HashRouter history={history}>
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
            <Route path="/bundles" component={BundlesPage}/>
            <Route path="/bundle/:id" component={BundlePage} />
            <Route path="/thank-you" component={ThankYouPage}/>
            <Route path="/purchase" component={PurchaseModal} />
            <Route path="/payment/card" component={StripeModal}/>
          </Suspense>
        </Switch>
      </HashRouter>
    </Elements>
  );
}

const mapActionToProps = {
  signInByToken
};

export default connect(null, mapActionToProps)(App);