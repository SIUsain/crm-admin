import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    return (
      <div className="login-page">
        {this.renderRedirect()}
        <div className="login-box">
          <div className="login-logo">
            <Link to="/">
              <b>Admin</b>LTE
            </Link>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={this.setRedirect}
                    >
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <button
                  className="btn btn-block btn-primary"
                  onClick={this.setRedirect}
                >
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </button>
                <button
                  className="btn btn-block btn-danger"
                  onClick={this.setRedirect}
                >
                  <i className="fab fa-google-plus mr-2" /> Sign in using
                  Google+
                </button>
              </div>
              <p className="mb-1">
                <Link to="/forgot-password">I forgot my password</Link>
              </p>
              <p className="mb-0">
                <Link to="/register" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
