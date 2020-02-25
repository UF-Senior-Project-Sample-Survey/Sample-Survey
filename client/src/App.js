import React, {Component} from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import NotFound from "./views/NotFound";
import Navbar from "./components/Header/NavBar";
import Landing from "./components/Landing";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
            <div classname = "App">
              <Navbar/>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
