import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

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
// import BundlesPage from './pages/BundlesPage';
import BundlePage from './pages/BundlePage';
import ThankYouPage from './pages/ThankYouPage';
// import MeligharPage from './pages/MeligharPage';
// import CaraxPage from './pages/CaraxPage';
// import FarionPage from './pages/FarionPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BundlesPage = lazy(() => import('./pages/BundlesPage'));
const MeligharPage = lazy(() => import('./pages/MeligharPage'));
const CaraxPage = lazy(() => import('./pages/CaraxPage'));
const FarionPage = lazy(() => import('./pages/FarionPage'));

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.pageview(location.hash);
});

function App({ signInByToken }) {
  useEffect(() => { 
    localStorage.getItem('token') && signInByToken();
  });

  return (
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
          {/*<Route path="/bundle/:id" component={BundlePage} />*/}
          <Route path="/bundle/melighar" component={MeligharPage} />
          <Route path="/bundle/carax" component={CaraxPage} />
          <Route path="/bundle/farion" component={FarionPage} />
          <Route path="/thank-you" component={ThankYouPage}/>
        </Suspense>
      </Switch>
    </HashRouter>
  );
}

const mapActionToProps = {
  signInByToken
};

export default connect(null, mapActionToProps)(App);