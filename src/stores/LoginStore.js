import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt from 'jsonwebtoken';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt;
        var payload = jwt.decode(this._jwt);
        if (payload) {
          this._user = payload.user;
        }
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._user = null;
        this._jwt = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    var valid = true;
    if (this._user) {
      var expiryTime = this._user.client_token_valid_time * 1000;
      var now = (new Date()).getTime();
      if (expiryTime < now) {
        valid = false;
        console.log('token is expired', new Date(expiryTime));
      }
    }
    return !!this._user && valid;
  }
}

export default new LoginStore();
