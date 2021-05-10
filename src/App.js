import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/auth/Login";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
// Redux

import store from "./store";
import { loadUser } from "./redux/auth/actions";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <ul>
            <li>
              <Link to="/">MainPage</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" exact component={HomePage} />
            <Route exact path="/login" exact component={Login} />
            <PrivateRoute path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
