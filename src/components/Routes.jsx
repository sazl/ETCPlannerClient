import React from 'react';
import Router from 'react-router';

import AuthenticatedApp from 'components/AuthenticatedApp';
import App from 'components/App';
import Login from 'components/Login';
import Dashboard from 'components/dashboard/Dashboard';
import StaffBreakInService from 'components/dashboard/StaffBreakInService';
import Planning from 'components/planning/Planning';
import Requirement from 'components/requirement/Requirement';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let Routes = (
  <Route path="/" handler={AuthenticatedApp}>
    <Route name="login" path="/login" handler={Login} />
    <Route path="/" name="planner" handler={App}>
      <Route name="dashboard" path="/" handler={Dashboard}/>
      <Route name="break-in-service" path="/break-in-service" handler={StaffBreakInService}/>
      <Route name="planning" path="/planning" handler={Planning} />
      <Route name="requirement" path="/requirement" handler={Requirement} />
    </Route>
  </Route>
);

module.exports = Routes;
