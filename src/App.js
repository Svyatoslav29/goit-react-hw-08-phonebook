import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBarComp from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import styles from './App.module.css'

const HomePage = lazy(() =>
  import('./pages/HomePage'),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage'),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage'),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage'), 
);
class App extends Component {
  componentDidMount() { 
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBarComp className={styles.App}/>
        <Suspense fallback={<p>Wait...</p>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);