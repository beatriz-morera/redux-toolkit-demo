import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Loading from './components/loading';

const Login = lazy(() => import('./pages/login'));
const Dashboard = lazy(() => import('./pages/dashboard'));

export default () => {
  return (
    <HashRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/" render={() => <Redirect to="/login" />} exact />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
