import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
      return (
        <div>
            <NavBar/>
            <div className = "container">
              <div>This is our about page.</div>
              <br/>
              <div>Discuss what our website does here.</div>
            </div>
        </div>
      );
    }
  }

  export default About;