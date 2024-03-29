import React from 'react';
import Router, {Route} from 'react-router';
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';

var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('container'));
});