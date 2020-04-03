import React, {Component} from 'react';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import Landing from "./components/Landing";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./views/NotFound";

// check for a token to keep the user logged in
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  // Check to see if token is expired
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // If expired, logout user and go to the login page
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
            <div>
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Landing} />
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
