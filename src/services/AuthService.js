import axios from 'axios';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(username, password) {
    return this.handleAuth(when(
      axios({
        method: 'POST',
        url: LOGIN_URL,
        responseType: 'json',
        data: {
          email: username,
          password: password
        }
      })
    ));
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(username, password, extra) {
    return this.handleAuth(when(
      axios({
        method: 'POST',
        url: LOGIN_URL,
        responseType: 'json',
        data: {
          email: username,
          password: password
        }
      })
    ));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.id_token;
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()
