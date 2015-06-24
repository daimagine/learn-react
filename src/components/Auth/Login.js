import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../../services/AuthService';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  componentWillMount() {
    document.body.classList.add('error-body');
    document.body.classList.add('no-top');
  }

  componentDidUnmount() {
    document.body.classList.remove('error-body');
    document.body.classList.remove('no-top');  
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <div className="row login-container column-seperation">
        <div className="col-md-10 col-md-offset-1">
          <h2>Sign in to <span>Jualio</span></h2><br/>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <form role="form" id="login-form" className="login-form">
            <div className="row">
              <div className="form-group col-md-12">
                <label className="form-label">Username</label>
                <div className="controls">
                  <div className="input-with-icon right">
                    <i></i>
                    <input id="txtusername" type="text" name="txtusername" className="form-control"
                      valueLink={this.linkState('user')} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label className="form-label">Password</label><span className="help"></span>
                <div className="controls">
                  <div className="input-with-icon right"><i></i>
                    <input id="txtpassword" type="password" name="txtpassword" className="form-control"
                      valueLink={this.linkState('password')} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="control-group col-md-12">
                <div className="checkbox checkbox check-success"><a href="#">Trouble login in?</a>
                  <br/><br/>
                  <input id="checkbox1" type="checkbox" value="1" />
                  <label htmlFor="checkbox1">Keep me reminded</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary btn-cons pull-right" 
                  onClick={this.login.bind(this)}>Login</button>
              </div>
            </div>
          </form>
          <br/>
        </div>
        <div className="col-md-5">
          <br/>
          <p>
            Use Facebook, Twitter or your email to sign in.
            <br/>
            <a href="sign-up.html">Sign up Now! </a>
            for a Jualio account, it's free and always will be..
              <br/>
          </p>
          <br/>
          <button type="button" className="btn btn-block btn-info col-md-8"><span className="pull-left"><i className="icon-facebook"></i></span><span className="bold">Login with Facebook</span></button>
          <button type="button" className="btn btn-block btn-success col-md-8"><span className="pull-left"><i className="icon-twitter"></i></span><span className="bold">Login with Twitter</span></button>
          <br/>
        </div>
      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
