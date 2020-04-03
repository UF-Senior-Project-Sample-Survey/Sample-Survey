import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="bg">

      <div>
        <div style={{height: "75vh" }} 
          className="container valign-wrapper ">
          <div className="row">
            <div className="h1 col-12 s12 center-align black-text">
              Create your own sample survey!
              <div className="section-body"> 
                Design surveys using our database of questions. Choose a sampling method, and get a dataset of responses representing a sample.
                <br/>
                <br/>
              <div className="col s6">
                <Link
                  to="/register"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;