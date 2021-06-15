import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./pages/login/Login'));
const Register = React.lazy(() => import('./pages/register/Register'));
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./pages/page500/Page500'));

class App extends Component {
  
  checkAuth = (nextState, replace) => {
   const {isLoggedIn} = this.props.auth
   if (!isLoggedIn) {
     replace('/')
    }
  }
  
  checkSkipAuth = (nextState, replace) => {
  const {isLoggedIn} = this.props.auth
  if (isLoggedIn) {
    replace('/home')
  }
}


  render() {
    console.log(this.props.auth)
    const {isLoggedIn} = this.props.auth
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              {isLoggedIn ? 
              <Route path="/" name="Home" component={TheLayout} />
              :
              <>
              <Route exact path="/" name="Login Page" component={Login} />
              <Redirect path="/" />
              </>
            }
            {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>}/> */}
            <Route path="*" name="Not Found" component={Page404} />
            {/* <Route exact path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)